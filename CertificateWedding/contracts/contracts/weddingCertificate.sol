// SPDX-License-Identifier: UNLICENSED.
pragma solidity ^0.7.4;

    contract WeddingCertificate {
        string private NamePartner1;
        string private NamePartner2;


        constructor(string memory _NamePartner1, string memory _NamePartner2) {
            NamePartner1 = _NamePartner1;
            NamePartner2 = _NamePartner2;
        }

        function getPartners() public view returns (string memory){
            return string(abi.encodePacked(NamePartner1,',',NamePartner2)); //return the Partners name
        }

    }

    contract WeddingCertificateFactory {

        WeddingCertificate[] listWeddingCertificate;

        function createCertificate(string memory _NamePartner1, string memory _NamePartner2) public {
            WeddingCertificate newCertificate = new WeddingCertificate(_NamePartner1, _NamePartner2);
            listWeddingCertificate.push(newCertificate);
        }

        function getListCertificate() public view returns(WeddingCertificate[] memory) {
            return listWeddingCertificate;
        }
    }
