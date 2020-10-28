// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Adder.sol";
import "./Suber.sol";
import "./Multiplier.sol";
import "./Divisor.sol";

contract Calculator {
    Adder private _adderContract;
    Suber private _suberContract;
    Multiplier private _multiplierContract;
    Divisor private _divisorContract;

    constructor() public {
        _adderContract = Adder(_adderContract);
        _suberContract = Suber(_suberContract);
        _multiplierContract = Multiplier(_multiplierContract);
        _divisorContract = Divisor(_divisorContract);
    }

    function add(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return _adderContract.add(nb1, nb2);
    }

    function sub(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return _suberContract.sub(nb1, nb2);
    }

    function mul(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return _multiplierContract.mul(nb1, nb2);
    }

    function div(uint256 nb1, uint256 nb2) public view returns (uint256) {
        return _divisorContract.div(nb1, nb2);
    }
}
