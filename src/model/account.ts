import type ExtType from '@polkadot/extension-inject/types';
import BN from 'bn.js';
import { WithOptional } from './type-operator';

export type InjectedAccountWithMeta = ExtType.InjectedAccountWithMeta;

export type IAccountMeta = WithOptional<InjectedAccountWithMeta, 'meta'>;

export interface TokenChainInfo<T = string> {
  symbol: T;
  decimal: string;
}

export interface Chain {
  tokens: TokenChainInfo[];
  ss58Format: string;
}
export interface AvailableBalance<T = string> {
  max: string | number | BN;
  asset: T;
  chainInfo?: TokenChainInfo;
}

export interface DailyLimit {
  limit: string | number;
  spentToday: string | number;
}