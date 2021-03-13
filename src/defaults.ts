const oldText = `Title Register: ABC123 - Registered at: 2019-12-24

- propertyRegister

-- Entry 5 - propertyRegister - 2019-12-24

Short particulars of the lease(s) (or under-lease(s)) under which the land is held:

Date : 13 December 2019 (This line is missing from the new text)

Term : 10 years from and including 13 December 2019 to and

including 12 December 2029

Parties : Bullet List Limited

Numbered Estates Ltd

New Line Ltd

NOTE: The tenant is under an obligation to offer to surrender the lease in the circumstances therein mentioned.`;

const newText = `Title Register: ABC123 - Registered at: 2019-12-24

- propertyRegister

-- Entry 5 - propertyRegister - 2019-12-24

Short particulars of the lease(s) (or under-lease(s)) under which the land is held:

Term : 10 years from and including 13 December 2019 to and

including 12 December 2029

Parties : (1) Bullet List Limited

(2) Numbered Estates Ltd

(3) New Line Ltd

NOTE: The tenant is under an obligation to offer to surrender the lease in the circumstances therein mentioned.`;

export { oldText, newText };
