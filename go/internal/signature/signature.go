package signature

type SigningMethodType string

type Signature interface {
	Verify(data []byte, publicKey []byte, sign []byte) (err error)
	Sign(data []byte, privateKey []byte) (sign []byte, err error)
}

type manager struct {
	signatures map[SigningMethodType]Signature
}

func (m *manager) register(name SigningMethodType, sig Signature) {
	m.signatures[name] = sig
}

func (m *manager) get(name SigningMethodType) Signature {
	return m.signatures[name]
}

var defaultSignatureManager = manager{
	signatures: make(map[SigningMethodType]Signature),
}

func Get(name SigningMethodType) Signature {
	return defaultSignatureManager.get(name)
}
