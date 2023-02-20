/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Create2BeaconMaker,
  Create2BeaconMakerInterface,
} from "../Create2BeaconMaker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "beacon",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initializationCalldata",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040526040516102ce3803806102ce83398101604081905261002291610191565b6040516000906001600160a01b0384169082818181855afa9150503d8060008114610069576040519150601f19603f3d011682016040523d82523d6000602084013e61006e565b606091505b50915050600081806020019051810190610088919061016d565b90506000816001600160a01b0316846040516100a49190610253565b600060405180830381855af49150503d80600081146100df576040519150601f19603f3d011682016040523d82523d6000602084013e6100e4565b606091505b50509050806100f7573d6000803e3d6000fd5b604051653d3d3d3d3d7360d01b60208201526001600160601b0319606087901b1660268201527f5afa3d82803e368260203750808036602082515af43d82803e903d91603a57fd603a820152615bf360f01b605a820152600090605c016040516020818303038152906040529050603c81602001f35b60006020828403121561017f57600080fd5b815161018a816102b5565b9392505050565b600080604083850312156101a457600080fd5b82516101af816102b5565b60208401519092506001600160401b03808211156101cc57600080fd5b818501915085601f8301126101e057600080fd5b8151818111156101f2576101f261029f565b604051601f8201601f19908116603f0116810190838211818310171561021a5761021a61029f565b8160405282815288602084870101111561023357600080fd5b61024483602083016020880161026f565b80955050505050509250929050565b6000825161026581846020870161026f565b9190910192915050565b60005b8381101561028a578181015183820152602001610272565b83811115610299576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146102ca57600080fd5b5056fe";

export class Create2BeaconMaker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    beacon: string,
    initializationCalldata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Create2BeaconMaker> {
    return super.deploy(
      beacon,
      initializationCalldata,
      overrides || {}
    ) as Promise<Create2BeaconMaker>;
  }
  getDeployTransaction(
    beacon: string,
    initializationCalldata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      beacon,
      initializationCalldata,
      overrides || {}
    );
  }
  attach(address: string): Create2BeaconMaker {
    return super.attach(address) as Create2BeaconMaker;
  }
  connect(signer: Signer): Create2BeaconMaker__factory {
    return super.connect(signer) as Create2BeaconMaker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Create2BeaconMakerInterface {
    return new utils.Interface(_abi) as Create2BeaconMakerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Create2BeaconMaker {
    return new Contract(address, _abi, signerOrProvider) as Create2BeaconMaker;
  }
}