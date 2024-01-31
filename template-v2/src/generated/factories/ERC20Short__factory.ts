/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { ERC20Short, ERC20ShortInterface } from '../ERC20Short'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

export class ERC20Short__factory {
  static readonly abi = _abi
  static createInterface(): ERC20ShortInterface {
    return new utils.Interface(_abi) as ERC20ShortInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ERC20Short {
    return new Contract(address, _abi, signerOrProvider) as ERC20Short
  }
}