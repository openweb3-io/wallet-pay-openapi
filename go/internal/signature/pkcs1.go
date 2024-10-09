package signature

import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"errors"
)

const SigningMethodPKCS1 SigningMethodType = "pkcs1"

func init() {
	defaultSignatureManager.register(SigningMethodPKCS1, &PKCS1{})
}

type PKCS1 struct {
}

// verify
func (*PKCS1) Verify(publicKey []byte, data []byte, sign []byte) (err error) {
	block, _ := pem.Decode(publicKey)
	if block == nil {
		return errors.New("public key error")
	}
	pub, err := x509.ParsePKCS1PublicKey(block.Bytes)
	if err != nil {
		return err
	}

	hashFunc := crypto.SHA256
	h := hashFunc.New()
	h.Write(data)
	hashed := h.Sum(nil)
	return rsa.VerifyPKCS1v15(pub, hashFunc, hashed, sign)
}

// sign
func (*PKCS1) Sign(privateKey []byte, data []byte) (sign []byte, err error) {
	block, _ := pem.Decode(privateKey)
	if block == nil {
		return nil, errors.New("private key error")
	}
	priv, err := x509.ParsePKCS1PrivateKey(block.Bytes)
	if err != nil {
		return nil, err
	}
	hashFunc := crypto.SHA256
	h := hashFunc.New()
	h.Write(data)
	hashed := h.Sum(nil)
	return rsa.SignPKCS1v15(rand.Reader, priv, hashFunc, hashed)
}
