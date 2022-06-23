// SPDX-License-Identifier: UNLICENSED.
pragma solidity ^0.7.4;

    contract WeddingCertificate {
        string private NamePartner1;
        string private NamePartner2;


        constructor(string memory _NamePartner1, string memory _NamePartner2) { // Initiate both names in a constructor
            NamePartner1 = _NamePartner1;
            NamePartner2 = _NamePartner2;
        }

        function getPartners() public view returns (string memory){ //function that will return the Partners name 
            return string(abi.encodePacked(NamePartner1,',',NamePartner2)); //return a concatenation of both Partners
        }

    }

    contract WeddingCertificateFactory {

        WeddingCertificate[] listWeddingCertificate;

        function createCertificate(string memory _NamePartner1, string memory _NamePartner2) public { //Create a new certificate with the name of the Partners 
            WeddingCertificate newCertificate = new WeddingCertificate(_NamePartner1, _NamePartner2);
            listWeddingCertificate.push(newCertificate); //push in the array the new certificate
        }

        function getListCertificate() public view returns(WeddingCertificate[] memory) { // return the list of certificate
            return listWeddingCertificate; 
        }
    }
