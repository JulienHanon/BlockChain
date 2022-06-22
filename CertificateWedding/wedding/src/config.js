export const LIST_WEDDING_ADDRESS = '0x800896B3cA9f633Da1eF8011fE38014f0b93E794';
export const WEDDING_ADDRESS = '0x717F82c3183d4d4B348c91B1dCcC3b16bd161579'
export const LIST_WEDDING_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_NamePartner1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_NamePartner2",
				"type": "string"
			}
		],
		"name": "createCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getListCertificate",
		"outputs": [
			{
				"internalType": "contract WeddingCertificate[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
export const WEDDING_ABI = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_NamePartner1",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_NamePartner2",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "getPartners",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
