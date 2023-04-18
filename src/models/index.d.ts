import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Properties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownership_type?: string | null;
  readonly listing_date?: string | null;
  readonly listing_price?: number | null;
  readonly zip_code?: string | null;
  readonly address?: string | null;
  readonly purchase_price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Properties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ownership_type?: string | null;
  readonly listing_date?: string | null;
  readonly listing_price?: number | null;
  readonly zip_code?: string | null;
  readonly address?: string | null;
  readonly purchase_price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Properties = LazyLoading extends LazyLoadingDisabled ? EagerProperties : LazyProperties

export declare const Properties: (new (init: ModelInit<Properties>) => Properties) & {
  copyOf(source: Properties, mutator: (draft: MutableModel<Properties>) => MutableModel<Properties> | void): Properties;
}