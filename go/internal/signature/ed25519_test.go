package signature

import (
	"crypto/ed25519"
	"encoding/hex"
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_SignAndVerify(t *testing.T) {
	pubKey, priKey, err := ed25519.GenerateKey(nil)
	assert.NoError(t, err)

	signer := &ed25519Signer{}

	content := []byte("hello world")

	signature, err := signer.Sign(priKey, content)
	assert.NoError(t, err)

	err = signer.Verify(pubKey, content, signature)
	assert.NoError(t, err)
}

func Test_SignAndVerify2(t *testing.T) {
	priKey, _ := hex.DecodeString("1733825de42257dd610d0e40358a8db9f61572f7266fe15f1d7324d55a43e4632920c0045e0edb8c2ed8d960eb1cb42f20592b0c91477bb9c4b4819f12e27419")
	pubKey, _ := hex.DecodeString("2920c0045e0edb8c2ed8d960eb1cb42f20592b0c91477bb9c4b4819f12e27419")

	signer := &ed25519Signer{}

	content := []byte("hello world")

	signature, err := signer.Sign(priKey, content)
	assert.NoError(t, err)

	fmt.Println(hex.EncodeToString(signature))

	err = signer.Verify(pubKey, content, signature)
	assert.NoError(t, err)
}
