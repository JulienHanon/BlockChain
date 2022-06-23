
export const LIST_WEDDING_ADDRESS = '0x358694263f195306e70Dd23fDA5b51Eaa13A48fC';

export const WEDDING_ABI = [
	[
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
	]
]


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
