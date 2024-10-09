package signature

const SigningMethodNoop SigningMethodType = "NOOP"

func init() {
	defaultSignatureManager.register(SigningMethodNoop, &Noop{})
}

type Noop struct {
}

// verify
func (*Noop) Verify(publicKey []byte, data []byte, sign []byte) (err error) {
	return nil
}

// sign
func (*Noop) Sign(privateKey []byte, data []byte) (sign []byte, err error) {
	return []byte(""), nil
}
