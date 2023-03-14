
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model PanelUser
 * 
 */
export type PanelUser = {
  id: string
  email: string
  passwordHash: string
  name: string
}

/**
 * Model PanelUserSession
 * 
 */
export type PanelUserSession = {
  token: string
  panelUserId: string
}

/**
 * Model Client
 * 
 */
export type Client = {
  id: string
  email: string
  passwordHash: string
  numericPasswordHash: string
  name: string
  notifyAnnouncements: boolean
  notifyNewProducts: boolean
  notifyEventsAndActions: boolean
}

/**
 * Model ClientSession
 * 
 */
export type ClientSession = {
  token: string
  clientId: string
}

/**
 * Model ClientPasswordResetRequest
 * 
 */
export type ClientPasswordResetRequest = {
  token: string
  createdAt: Date
  email: string
  wasUsed: boolean
  clientId: string
}

/**
 * Model ClientEmailChangeRequest
 * 
 */
export type ClientEmailChangeRequest = {
  id: string
  status: ClientEmailChangeRequestStatus
  clientId: string
}

/**
 * Model ClientPushToken
 * 
 */
export type ClientPushToken = {
  token: string
  clientId: string
}

/**
 * Model ContractWithdrawRequest
 * 
 */
export type ContractWithdrawRequest = {
  id: string
  createdAt: Date
  contractId: string
  value: Prisma.Decimal
  status: ContractWithdrawRequestStatus
}

/**
 * Model Notification
 * 
 */
export type Notification = {
  id: string
  type: NotificationType
  title: string
  body: string
  createdAt: Date
  payload: Prisma.JsonValue | null
}

/**
 * Model NotificationsClients
 * 
 */
export type NotificationsClients = {
  isViewed: boolean
  notificationId: string
  clientId: string
}

/**
 * Model CustomerService
 * 
 */
export type CustomerService = {
  id: string
  tel: string
  email: string
  whatsapp: string
  address: string
}

/**
 * Model Product
 * 
 */
export type Product = {
  id: string
  description: string
  tel: string
  whatsapp: string
  email: string
  name: string
  shortDescription: string
  imageSrc: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const ClientEmailChangeRequestStatus: {
  open: 'open',
  finished: 'finished',
  cancelled: 'cancelled'
};

export type ClientEmailChangeRequestStatus = (typeof ClientEmailChangeRequestStatus)[keyof typeof ClientEmailChangeRequestStatus]


export const ContractWithdrawRequestStatus: {
  open: 'open',
  finished: 'finished',
  cancelled: 'cancelled'
};

export type ContractWithdrawRequestStatus = (typeof ContractWithdrawRequestStatus)[keyof typeof ContractWithdrawRequestStatus]


export const NotificationType: {
  basic: 'basic',
  navigator: 'navigator'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PanelUsers
 * const panelUsers = await prisma.panelUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PanelUsers
   * const panelUsers = await prisma.panelUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.panelUser`: Exposes CRUD operations for the **PanelUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PanelUsers
    * const panelUsers = await prisma.panelUser.findMany()
    * ```
    */
  get panelUser(): Prisma.PanelUserDelegate<GlobalReject>;

  /**
   * `prisma.panelUserSession`: Exposes CRUD operations for the **PanelUserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PanelUserSessions
    * const panelUserSessions = await prisma.panelUserSession.findMany()
    * ```
    */
  get panelUserSession(): Prisma.PanelUserSessionDelegate<GlobalReject>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<GlobalReject>;

  /**
   * `prisma.clientSession`: Exposes CRUD operations for the **ClientSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientSessions
    * const clientSessions = await prisma.clientSession.findMany()
    * ```
    */
  get clientSession(): Prisma.ClientSessionDelegate<GlobalReject>;

  /**
   * `prisma.clientPasswordResetRequest`: Exposes CRUD operations for the **ClientPasswordResetRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientPasswordResetRequests
    * const clientPasswordResetRequests = await prisma.clientPasswordResetRequest.findMany()
    * ```
    */
  get clientPasswordResetRequest(): Prisma.ClientPasswordResetRequestDelegate<GlobalReject>;

  /**
   * `prisma.clientEmailChangeRequest`: Exposes CRUD operations for the **ClientEmailChangeRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientEmailChangeRequests
    * const clientEmailChangeRequests = await prisma.clientEmailChangeRequest.findMany()
    * ```
    */
  get clientEmailChangeRequest(): Prisma.ClientEmailChangeRequestDelegate<GlobalReject>;

  /**
   * `prisma.clientPushToken`: Exposes CRUD operations for the **ClientPushToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientPushTokens
    * const clientPushTokens = await prisma.clientPushToken.findMany()
    * ```
    */
  get clientPushToken(): Prisma.ClientPushTokenDelegate<GlobalReject>;

  /**
   * `prisma.contractWithdrawRequest`: Exposes CRUD operations for the **ContractWithdrawRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractWithdrawRequests
    * const contractWithdrawRequests = await prisma.contractWithdrawRequest.findMany()
    * ```
    */
  get contractWithdrawRequest(): Prisma.ContractWithdrawRequestDelegate<GlobalReject>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<GlobalReject>;

  /**
   * `prisma.notificationsClients`: Exposes CRUD operations for the **NotificationsClients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationsClients
    * const notificationsClients = await prisma.notificationsClients.findMany()
    * ```
    */
  get notificationsClients(): Prisma.NotificationsClientsDelegate<GlobalReject>;

  /**
   * `prisma.customerService`: Exposes CRUD operations for the **CustomerService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerServices
    * const customerServices = await prisma.customerService.findMany()
    * ```
    */
  get customerService(): Prisma.CustomerServiceDelegate<GlobalReject>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    PanelUser: 'PanelUser',
    PanelUserSession: 'PanelUserSession',
    Client: 'Client',
    ClientSession: 'ClientSession',
    ClientPasswordResetRequest: 'ClientPasswordResetRequest',
    ClientEmailChangeRequest: 'ClientEmailChangeRequest',
    ClientPushToken: 'ClientPushToken',
    ContractWithdrawRequest: 'ContractWithdrawRequest',
    Notification: 'Notification',
    NotificationsClients: 'NotificationsClients',
    CustomerService: 'CustomerService',
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PanelUserCountOutputType
   */


  export type PanelUserCountOutputType = {
    sessions: number
  }

  export type PanelUserCountOutputTypeSelect = {
    sessions?: boolean
  }

  export type PanelUserCountOutputTypeGetPayload<S extends boolean | null | undefined | PanelUserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PanelUserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PanelUserCountOutputTypeArgs)
    ? PanelUserCountOutputType 
    : S extends { select: any } & (PanelUserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PanelUserCountOutputType ? PanelUserCountOutputType[P] : never
  } 
      : PanelUserCountOutputType




  // Custom InputTypes

  /**
   * PanelUserCountOutputType without action
   */
  export type PanelUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PanelUserCountOutputType
     */
    select?: PanelUserCountOutputTypeSelect | null
  }



  /**
   * Count Type ClientCountOutputType
   */


  export type ClientCountOutputType = {
    passwordResetRequests: number
    emailChangeRequests: number
    pushTokens: number
    sessions: number
    notifications: number
  }

  export type ClientCountOutputTypeSelect = {
    passwordResetRequests?: boolean
    emailChangeRequests?: boolean
    pushTokens?: boolean
    sessions?: boolean
    notifications?: boolean
  }

  export type ClientCountOutputTypeGetPayload<S extends boolean | null | undefined | ClientCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClientCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ClientCountOutputTypeArgs)
    ? ClientCountOutputType 
    : S extends { select: any } & (ClientCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ClientCountOutputType ? ClientCountOutputType[P] : never
  } 
      : ClientCountOutputType




  // Custom InputTypes

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect | null
  }



  /**
   * Count Type NotificationCountOutputType
   */


  export type NotificationCountOutputType = {
    clients: number
  }

  export type NotificationCountOutputTypeSelect = {
    clients?: boolean
  }

  export type NotificationCountOutputTypeGetPayload<S extends boolean | null | undefined | NotificationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? NotificationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (NotificationCountOutputTypeArgs)
    ? NotificationCountOutputType 
    : S extends { select: any } & (NotificationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof NotificationCountOutputType ? NotificationCountOutputType[P] : never
  } 
      : NotificationCountOutputType




  // Custom InputTypes

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model PanelUser
   */


  export type AggregatePanelUser = {
    _count: PanelUserCountAggregateOutputType | null
    _min: PanelUserMinAggregateOutputType | null
    _max: PanelUserMaxAggregateOutputType | null
  }

  export type PanelUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
  }

  export type PanelUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
  }

  export type PanelUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    _all: number
  }


  export type PanelUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
  }

  export type PanelUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
  }

  export type PanelUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    _all?: true
  }

  export type PanelUserAggregateArgs = {
    /**
     * Filter which PanelUser to aggregate.
     */
    where?: PanelUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUsers to fetch.
     */
    orderBy?: Enumerable<PanelUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanelUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PanelUsers
    **/
    _count?: true | PanelUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanelUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanelUserMaxAggregateInputType
  }

  export type GetPanelUserAggregateType<T extends PanelUserAggregateArgs> = {
        [P in keyof T & keyof AggregatePanelUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanelUser[P]>
      : GetScalarType<T[P], AggregatePanelUser[P]>
  }




  export type PanelUserGroupByArgs = {
    where?: PanelUserWhereInput
    orderBy?: Enumerable<PanelUserOrderByWithAggregationInput>
    by: PanelUserScalarFieldEnum[]
    having?: PanelUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanelUserCountAggregateInputType | true
    _min?: PanelUserMinAggregateInputType
    _max?: PanelUserMaxAggregateInputType
  }


  export type PanelUserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    _count: PanelUserCountAggregateOutputType | null
    _min: PanelUserMinAggregateOutputType | null
    _max: PanelUserMaxAggregateOutputType | null
  }

  type GetPanelUserGroupByPayload<T extends PanelUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PanelUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanelUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanelUserGroupByOutputType[P]>
            : GetScalarType<T[P], PanelUserGroupByOutputType[P]>
        }
      >
    >


  export type PanelUserSelect = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    sessions?: boolean | PanelUser$sessionsArgs
    _count?: boolean | PanelUserCountOutputTypeArgs
  }


  export type PanelUserInclude = {
    sessions?: boolean | PanelUser$sessionsArgs
    _count?: boolean | PanelUserCountOutputTypeArgs
  }

  export type PanelUserGetPayload<S extends boolean | null | undefined | PanelUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PanelUser :
    S extends undefined ? never :
    S extends { include: any } & (PanelUserArgs | PanelUserFindManyArgs)
    ? PanelUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sessions' ? Array < PanelUserSessionGetPayload<S['include'][P]>>  :
        P extends '_count' ? PanelUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PanelUserArgs | PanelUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sessions' ? Array < PanelUserSessionGetPayload<S['select'][P]>>  :
        P extends '_count' ? PanelUserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof PanelUser ? PanelUser[P] : never
  } 
      : PanelUser


  type PanelUserCountArgs = 
    Omit<PanelUserFindManyArgs, 'select' | 'include'> & {
      select?: PanelUserCountAggregateInputType | true
    }

  export interface PanelUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PanelUser that matches the filter.
     * @param {PanelUserFindUniqueArgs} args - Arguments to find a PanelUser
     * @example
     * // Get one PanelUser
     * const panelUser = await prisma.panelUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PanelUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PanelUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PanelUser'> extends True ? Prisma__PanelUserClient<PanelUserGetPayload<T>> : Prisma__PanelUserClient<PanelUserGetPayload<T> | null, null>

    /**
     * Find one PanelUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PanelUserFindUniqueOrThrowArgs} args - Arguments to find a PanelUser
     * @example
     * // Get one PanelUser
     * const panelUser = await prisma.panelUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PanelUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PanelUserFindUniqueOrThrowArgs>
    ): Prisma__PanelUserClient<PanelUserGetPayload<T>>

    /**
     * Find the first PanelUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserFindFirstArgs} args - Arguments to find a PanelUser
     * @example
     * // Get one PanelUser
     * const panelUser = await prisma.panelUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PanelUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PanelUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PanelUser'> extends True ? Prisma__PanelUserClient<PanelUserGetPayload<T>> : Prisma__PanelUserClient<PanelUserGetPayload<T> | null, null>

    /**
     * Find the first PanelUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserFindFirstOrThrowArgs} args - Arguments to find a PanelUser
     * @example
     * // Get one PanelUser
     * const panelUser = await prisma.panelUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PanelUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PanelUserFindFirstOrThrowArgs>
    ): Prisma__PanelUserClient<PanelUserGetPayload<T>>

    /**
     * Find zero or more PanelUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PanelUsers
     * const panelUsers = await prisma.panelUser.findMany()
     * 
     * // Get first 10 PanelUsers
     * const panelUsers = await prisma.panelUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panelUserWithIdOnly = await prisma.panelUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PanelUserFindManyArgs>(
      args?: SelectSubset<T, PanelUserFindManyArgs>
    ): PrismaPromise<Array<PanelUserGetPayload<T>>>

    /**
     * Create a PanelUser.
     * @param {PanelUserCreateArgs} args - Arguments to create a PanelUser.
     * @example
     * // Create one PanelUser
     * const PanelUser = await prisma.panelUser.create({
     *   data: {
     *     // ... data to create a PanelUser
     *   }
     * })
     * 
    **/
    create<T extends PanelUserCreateArgs>(
      args: SelectSubset<T, PanelUserCreateArgs>
    ): Prisma__PanelUserClient<PanelUserGetPayload<T>>

    /**
     * Create many PanelUsers.
     *     @param {PanelUserCreateManyArgs} args - Arguments to create many PanelUsers.
     *     @example
     *     // Create many PanelUsers
     *     const panelUser = await prisma.panelUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PanelUserCreateManyArgs>(
      args?: SelectSubset<T, PanelUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PanelUser.
     * @param {PanelUserDeleteArgs} args - Arguments to delete one PanelUser.
     * @example
     * // Delete one PanelUser
     * const PanelUser = await prisma.panelUser.delete({
     *   where: {
     *     // ... filter to delete one PanelUser
     *   }
     * })
     * 
    **/
    delete<T extends PanelUserDeleteArgs>(
      args: SelectSubset<T, PanelUserDeleteArgs>
    ): Prisma__PanelUserClient<PanelUserGetPayload<T>>

    /**
     * Update one PanelUser.
     * @param {PanelUserUpdateArgs} args - Arguments to update one PanelUser.
     * @example
     * // Update one PanelUser
     * const panelUser = await prisma.panelUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PanelUserUpdateArgs>(
      args: SelectSubset<T, PanelUserUpdateArgs>
    ): Prisma__PanelUserClient<PanelUserGetPayload<T>>

    /**
     * Delete zero or more PanelUsers.
     * @param {PanelUserDeleteManyArgs} args - Arguments to filter PanelUsers to delete.
     * @example
     * // Delete a few PanelUsers
     * const { count } = await prisma.panelUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PanelUserDeleteManyArgs>(
      args?: SelectSubset<T, PanelUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanelUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PanelUsers
     * const panelUser = await prisma.panelUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PanelUserUpdateManyArgs>(
      args: SelectSubset<T, PanelUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PanelUser.
     * @param {PanelUserUpsertArgs} args - Arguments to update or create a PanelUser.
     * @example
     * // Update or create a PanelUser
     * const panelUser = await prisma.panelUser.upsert({
     *   create: {
     *     // ... data to create a PanelUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PanelUser we want to update
     *   }
     * })
    **/
    upsert<T extends PanelUserUpsertArgs>(
      args: SelectSubset<T, PanelUserUpsertArgs>
    ): Prisma__PanelUserClient<PanelUserGetPayload<T>>

    /**
     * Count the number of PanelUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserCountArgs} args - Arguments to filter PanelUsers to count.
     * @example
     * // Count the number of PanelUsers
     * const count = await prisma.panelUser.count({
     *   where: {
     *     // ... the filter for the PanelUsers we want to count
     *   }
     * })
    **/
    count<T extends PanelUserCountArgs>(
      args?: Subset<T, PanelUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanelUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PanelUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PanelUserAggregateArgs>(args: Subset<T, PanelUserAggregateArgs>): PrismaPromise<GetPanelUserAggregateType<T>>

    /**
     * Group by PanelUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PanelUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanelUserGroupByArgs['orderBy'] }
        : { orderBy?: PanelUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PanelUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanelUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PanelUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PanelUserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    sessions<T extends PanelUser$sessionsArgs= {}>(args?: Subset<T, PanelUser$sessionsArgs>): PrismaPromise<Array<PanelUserSessionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PanelUser base type for findUnique actions
   */
  export type PanelUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * Filter, which PanelUser to fetch.
     */
    where: PanelUserWhereUniqueInput
  }

  /**
   * PanelUser findUnique
   */
  export interface PanelUserFindUniqueArgs extends PanelUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PanelUser findUniqueOrThrow
   */
  export type PanelUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * Filter, which PanelUser to fetch.
     */
    where: PanelUserWhereUniqueInput
  }


  /**
   * PanelUser base type for findFirst actions
   */
  export type PanelUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * Filter, which PanelUser to fetch.
     */
    where?: PanelUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUsers to fetch.
     */
    orderBy?: Enumerable<PanelUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelUsers.
     */
    cursor?: PanelUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelUsers.
     */
    distinct?: Enumerable<PanelUserScalarFieldEnum>
  }

  /**
   * PanelUser findFirst
   */
  export interface PanelUserFindFirstArgs extends PanelUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PanelUser findFirstOrThrow
   */
  export type PanelUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * Filter, which PanelUser to fetch.
     */
    where?: PanelUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUsers to fetch.
     */
    orderBy?: Enumerable<PanelUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelUsers.
     */
    cursor?: PanelUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelUsers.
     */
    distinct?: Enumerable<PanelUserScalarFieldEnum>
  }


  /**
   * PanelUser findMany
   */
  export type PanelUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * Filter, which PanelUsers to fetch.
     */
    where?: PanelUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUsers to fetch.
     */
    orderBy?: Enumerable<PanelUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PanelUsers.
     */
    cursor?: PanelUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUsers.
     */
    skip?: number
    distinct?: Enumerable<PanelUserScalarFieldEnum>
  }


  /**
   * PanelUser create
   */
  export type PanelUserCreateArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * The data needed to create a PanelUser.
     */
    data: XOR<PanelUserCreateInput, PanelUserUncheckedCreateInput>
  }


  /**
   * PanelUser createMany
   */
  export type PanelUserCreateManyArgs = {
    /**
     * The data used to create many PanelUsers.
     */
    data: Enumerable<PanelUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PanelUser update
   */
  export type PanelUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * The data needed to update a PanelUser.
     */
    data: XOR<PanelUserUpdateInput, PanelUserUncheckedUpdateInput>
    /**
     * Choose, which PanelUser to update.
     */
    where: PanelUserWhereUniqueInput
  }


  /**
   * PanelUser updateMany
   */
  export type PanelUserUpdateManyArgs = {
    /**
     * The data used to update PanelUsers.
     */
    data: XOR<PanelUserUpdateManyMutationInput, PanelUserUncheckedUpdateManyInput>
    /**
     * Filter which PanelUsers to update
     */
    where?: PanelUserWhereInput
  }


  /**
   * PanelUser upsert
   */
  export type PanelUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * The filter to search for the PanelUser to update in case it exists.
     */
    where: PanelUserWhereUniqueInput
    /**
     * In case the PanelUser found by the `where` argument doesn't exist, create a new PanelUser with this data.
     */
    create: XOR<PanelUserCreateInput, PanelUserUncheckedCreateInput>
    /**
     * In case the PanelUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanelUserUpdateInput, PanelUserUncheckedUpdateInput>
  }


  /**
   * PanelUser delete
   */
  export type PanelUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
    /**
     * Filter which PanelUser to delete.
     */
    where: PanelUserWhereUniqueInput
  }


  /**
   * PanelUser deleteMany
   */
  export type PanelUserDeleteManyArgs = {
    /**
     * Filter which PanelUsers to delete
     */
    where?: PanelUserWhereInput
  }


  /**
   * PanelUser.sessions
   */
  export type PanelUser$sessionsArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    where?: PanelUserSessionWhereInput
    orderBy?: Enumerable<PanelUserSessionOrderByWithRelationInput>
    cursor?: PanelUserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PanelUserSessionScalarFieldEnum>
  }


  /**
   * PanelUser without action
   */
  export type PanelUserArgs = {
    /**
     * Select specific fields to fetch from the PanelUser
     */
    select?: PanelUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserInclude | null
  }



  /**
   * Model PanelUserSession
   */


  export type AggregatePanelUserSession = {
    _count: PanelUserSessionCountAggregateOutputType | null
    _min: PanelUserSessionMinAggregateOutputType | null
    _max: PanelUserSessionMaxAggregateOutputType | null
  }

  export type PanelUserSessionMinAggregateOutputType = {
    token: string | null
    panelUserId: string | null
  }

  export type PanelUserSessionMaxAggregateOutputType = {
    token: string | null
    panelUserId: string | null
  }

  export type PanelUserSessionCountAggregateOutputType = {
    token: number
    panelUserId: number
    _all: number
  }


  export type PanelUserSessionMinAggregateInputType = {
    token?: true
    panelUserId?: true
  }

  export type PanelUserSessionMaxAggregateInputType = {
    token?: true
    panelUserId?: true
  }

  export type PanelUserSessionCountAggregateInputType = {
    token?: true
    panelUserId?: true
    _all?: true
  }

  export type PanelUserSessionAggregateArgs = {
    /**
     * Filter which PanelUserSession to aggregate.
     */
    where?: PanelUserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUserSessions to fetch.
     */
    orderBy?: Enumerable<PanelUserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanelUserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PanelUserSessions
    **/
    _count?: true | PanelUserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanelUserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanelUserSessionMaxAggregateInputType
  }

  export type GetPanelUserSessionAggregateType<T extends PanelUserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePanelUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanelUserSession[P]>
      : GetScalarType<T[P], AggregatePanelUserSession[P]>
  }




  export type PanelUserSessionGroupByArgs = {
    where?: PanelUserSessionWhereInput
    orderBy?: Enumerable<PanelUserSessionOrderByWithAggregationInput>
    by: PanelUserSessionScalarFieldEnum[]
    having?: PanelUserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanelUserSessionCountAggregateInputType | true
    _min?: PanelUserSessionMinAggregateInputType
    _max?: PanelUserSessionMaxAggregateInputType
  }


  export type PanelUserSessionGroupByOutputType = {
    token: string
    panelUserId: string
    _count: PanelUserSessionCountAggregateOutputType | null
    _min: PanelUserSessionMinAggregateOutputType | null
    _max: PanelUserSessionMaxAggregateOutputType | null
  }

  type GetPanelUserSessionGroupByPayload<T extends PanelUserSessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PanelUserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanelUserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanelUserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PanelUserSessionGroupByOutputType[P]>
        }
      >
    >


  export type PanelUserSessionSelect = {
    token?: boolean
    panelUser?: boolean | PanelUserArgs
    panelUserId?: boolean
  }


  export type PanelUserSessionInclude = {
    panelUser?: boolean | PanelUserArgs
  }

  export type PanelUserSessionGetPayload<S extends boolean | null | undefined | PanelUserSessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PanelUserSession :
    S extends undefined ? never :
    S extends { include: any } & (PanelUserSessionArgs | PanelUserSessionFindManyArgs)
    ? PanelUserSession  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'panelUser' ? PanelUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PanelUserSessionArgs | PanelUserSessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'panelUser' ? PanelUserGetPayload<S['select'][P]> :  P extends keyof PanelUserSession ? PanelUserSession[P] : never
  } 
      : PanelUserSession


  type PanelUserSessionCountArgs = 
    Omit<PanelUserSessionFindManyArgs, 'select' | 'include'> & {
      select?: PanelUserSessionCountAggregateInputType | true
    }

  export interface PanelUserSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PanelUserSession that matches the filter.
     * @param {PanelUserSessionFindUniqueArgs} args - Arguments to find a PanelUserSession
     * @example
     * // Get one PanelUserSession
     * const panelUserSession = await prisma.panelUserSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PanelUserSessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PanelUserSessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PanelUserSession'> extends True ? Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>> : Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T> | null, null>

    /**
     * Find one PanelUserSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PanelUserSessionFindUniqueOrThrowArgs} args - Arguments to find a PanelUserSession
     * @example
     * // Get one PanelUserSession
     * const panelUserSession = await prisma.panelUserSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PanelUserSessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PanelUserSessionFindUniqueOrThrowArgs>
    ): Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>>

    /**
     * Find the first PanelUserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserSessionFindFirstArgs} args - Arguments to find a PanelUserSession
     * @example
     * // Get one PanelUserSession
     * const panelUserSession = await prisma.panelUserSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PanelUserSessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PanelUserSessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PanelUserSession'> extends True ? Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>> : Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T> | null, null>

    /**
     * Find the first PanelUserSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserSessionFindFirstOrThrowArgs} args - Arguments to find a PanelUserSession
     * @example
     * // Get one PanelUserSession
     * const panelUserSession = await prisma.panelUserSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PanelUserSessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PanelUserSessionFindFirstOrThrowArgs>
    ): Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>>

    /**
     * Find zero or more PanelUserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PanelUserSessions
     * const panelUserSessions = await prisma.panelUserSession.findMany()
     * 
     * // Get first 10 PanelUserSessions
     * const panelUserSessions = await prisma.panelUserSession.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const panelUserSessionWithTokenOnly = await prisma.panelUserSession.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends PanelUserSessionFindManyArgs>(
      args?: SelectSubset<T, PanelUserSessionFindManyArgs>
    ): PrismaPromise<Array<PanelUserSessionGetPayload<T>>>

    /**
     * Create a PanelUserSession.
     * @param {PanelUserSessionCreateArgs} args - Arguments to create a PanelUserSession.
     * @example
     * // Create one PanelUserSession
     * const PanelUserSession = await prisma.panelUserSession.create({
     *   data: {
     *     // ... data to create a PanelUserSession
     *   }
     * })
     * 
    **/
    create<T extends PanelUserSessionCreateArgs>(
      args: SelectSubset<T, PanelUserSessionCreateArgs>
    ): Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>>

    /**
     * Create many PanelUserSessions.
     *     @param {PanelUserSessionCreateManyArgs} args - Arguments to create many PanelUserSessions.
     *     @example
     *     // Create many PanelUserSessions
     *     const panelUserSession = await prisma.panelUserSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PanelUserSessionCreateManyArgs>(
      args?: SelectSubset<T, PanelUserSessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PanelUserSession.
     * @param {PanelUserSessionDeleteArgs} args - Arguments to delete one PanelUserSession.
     * @example
     * // Delete one PanelUserSession
     * const PanelUserSession = await prisma.panelUserSession.delete({
     *   where: {
     *     // ... filter to delete one PanelUserSession
     *   }
     * })
     * 
    **/
    delete<T extends PanelUserSessionDeleteArgs>(
      args: SelectSubset<T, PanelUserSessionDeleteArgs>
    ): Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>>

    /**
     * Update one PanelUserSession.
     * @param {PanelUserSessionUpdateArgs} args - Arguments to update one PanelUserSession.
     * @example
     * // Update one PanelUserSession
     * const panelUserSession = await prisma.panelUserSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PanelUserSessionUpdateArgs>(
      args: SelectSubset<T, PanelUserSessionUpdateArgs>
    ): Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>>

    /**
     * Delete zero or more PanelUserSessions.
     * @param {PanelUserSessionDeleteManyArgs} args - Arguments to filter PanelUserSessions to delete.
     * @example
     * // Delete a few PanelUserSessions
     * const { count } = await prisma.panelUserSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PanelUserSessionDeleteManyArgs>(
      args?: SelectSubset<T, PanelUserSessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanelUserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PanelUserSessions
     * const panelUserSession = await prisma.panelUserSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PanelUserSessionUpdateManyArgs>(
      args: SelectSubset<T, PanelUserSessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PanelUserSession.
     * @param {PanelUserSessionUpsertArgs} args - Arguments to update or create a PanelUserSession.
     * @example
     * // Update or create a PanelUserSession
     * const panelUserSession = await prisma.panelUserSession.upsert({
     *   create: {
     *     // ... data to create a PanelUserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PanelUserSession we want to update
     *   }
     * })
    **/
    upsert<T extends PanelUserSessionUpsertArgs>(
      args: SelectSubset<T, PanelUserSessionUpsertArgs>
    ): Prisma__PanelUserSessionClient<PanelUserSessionGetPayload<T>>

    /**
     * Count the number of PanelUserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserSessionCountArgs} args - Arguments to filter PanelUserSessions to count.
     * @example
     * // Count the number of PanelUserSessions
     * const count = await prisma.panelUserSession.count({
     *   where: {
     *     // ... the filter for the PanelUserSessions we want to count
     *   }
     * })
    **/
    count<T extends PanelUserSessionCountArgs>(
      args?: Subset<T, PanelUserSessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanelUserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PanelUserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PanelUserSessionAggregateArgs>(args: Subset<T, PanelUserSessionAggregateArgs>): PrismaPromise<GetPanelUserSessionAggregateType<T>>

    /**
     * Group by PanelUserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PanelUserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanelUserSessionGroupByArgs['orderBy'] }
        : { orderBy?: PanelUserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PanelUserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanelUserSessionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PanelUserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PanelUserSessionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    panelUser<T extends PanelUserArgs= {}>(args?: Subset<T, PanelUserArgs>): Prisma__PanelUserClient<PanelUserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PanelUserSession base type for findUnique actions
   */
  export type PanelUserSessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * Filter, which PanelUserSession to fetch.
     */
    where: PanelUserSessionWhereUniqueInput
  }

  /**
   * PanelUserSession findUnique
   */
  export interface PanelUserSessionFindUniqueArgs extends PanelUserSessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PanelUserSession findUniqueOrThrow
   */
  export type PanelUserSessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * Filter, which PanelUserSession to fetch.
     */
    where: PanelUserSessionWhereUniqueInput
  }


  /**
   * PanelUserSession base type for findFirst actions
   */
  export type PanelUserSessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * Filter, which PanelUserSession to fetch.
     */
    where?: PanelUserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUserSessions to fetch.
     */
    orderBy?: Enumerable<PanelUserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelUserSessions.
     */
    cursor?: PanelUserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelUserSessions.
     */
    distinct?: Enumerable<PanelUserSessionScalarFieldEnum>
  }

  /**
   * PanelUserSession findFirst
   */
  export interface PanelUserSessionFindFirstArgs extends PanelUserSessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PanelUserSession findFirstOrThrow
   */
  export type PanelUserSessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * Filter, which PanelUserSession to fetch.
     */
    where?: PanelUserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUserSessions to fetch.
     */
    orderBy?: Enumerable<PanelUserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelUserSessions.
     */
    cursor?: PanelUserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelUserSessions.
     */
    distinct?: Enumerable<PanelUserSessionScalarFieldEnum>
  }


  /**
   * PanelUserSession findMany
   */
  export type PanelUserSessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * Filter, which PanelUserSessions to fetch.
     */
    where?: PanelUserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelUserSessions to fetch.
     */
    orderBy?: Enumerable<PanelUserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PanelUserSessions.
     */
    cursor?: PanelUserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelUserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelUserSessions.
     */
    skip?: number
    distinct?: Enumerable<PanelUserSessionScalarFieldEnum>
  }


  /**
   * PanelUserSession create
   */
  export type PanelUserSessionCreateArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * The data needed to create a PanelUserSession.
     */
    data: XOR<PanelUserSessionCreateInput, PanelUserSessionUncheckedCreateInput>
  }


  /**
   * PanelUserSession createMany
   */
  export type PanelUserSessionCreateManyArgs = {
    /**
     * The data used to create many PanelUserSessions.
     */
    data: Enumerable<PanelUserSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PanelUserSession update
   */
  export type PanelUserSessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * The data needed to update a PanelUserSession.
     */
    data: XOR<PanelUserSessionUpdateInput, PanelUserSessionUncheckedUpdateInput>
    /**
     * Choose, which PanelUserSession to update.
     */
    where: PanelUserSessionWhereUniqueInput
  }


  /**
   * PanelUserSession updateMany
   */
  export type PanelUserSessionUpdateManyArgs = {
    /**
     * The data used to update PanelUserSessions.
     */
    data: XOR<PanelUserSessionUpdateManyMutationInput, PanelUserSessionUncheckedUpdateManyInput>
    /**
     * Filter which PanelUserSessions to update
     */
    where?: PanelUserSessionWhereInput
  }


  /**
   * PanelUserSession upsert
   */
  export type PanelUserSessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * The filter to search for the PanelUserSession to update in case it exists.
     */
    where: PanelUserSessionWhereUniqueInput
    /**
     * In case the PanelUserSession found by the `where` argument doesn't exist, create a new PanelUserSession with this data.
     */
    create: XOR<PanelUserSessionCreateInput, PanelUserSessionUncheckedCreateInput>
    /**
     * In case the PanelUserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanelUserSessionUpdateInput, PanelUserSessionUncheckedUpdateInput>
  }


  /**
   * PanelUserSession delete
   */
  export type PanelUserSessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
    /**
     * Filter which PanelUserSession to delete.
     */
    where: PanelUserSessionWhereUniqueInput
  }


  /**
   * PanelUserSession deleteMany
   */
  export type PanelUserSessionDeleteManyArgs = {
    /**
     * Filter which PanelUserSessions to delete
     */
    where?: PanelUserSessionWhereInput
  }


  /**
   * PanelUserSession without action
   */
  export type PanelUserSessionArgs = {
    /**
     * Select specific fields to fetch from the PanelUserSession
     */
    select?: PanelUserSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PanelUserSessionInclude | null
  }



  /**
   * Model Client
   */


  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    numericPasswordHash: string | null
    name: string | null
    notifyAnnouncements: boolean | null
    notifyNewProducts: boolean | null
    notifyEventsAndActions: boolean | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    numericPasswordHash: string | null
    name: string | null
    notifyAnnouncements: boolean | null
    notifyNewProducts: boolean | null
    notifyEventsAndActions: boolean | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    numericPasswordHash: number
    name: number
    notifyAnnouncements: number
    notifyNewProducts: number
    notifyEventsAndActions: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    numericPasswordHash?: true
    name?: true
    notifyAnnouncements?: true
    notifyNewProducts?: true
    notifyEventsAndActions?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    numericPasswordHash?: true
    name?: true
    notifyAnnouncements?: true
    notifyNewProducts?: true
    notifyEventsAndActions?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    numericPasswordHash?: true
    name?: true
    notifyAnnouncements?: true
    notifyNewProducts?: true
    notifyEventsAndActions?: true
    _all?: true
  }

  export type ClientAggregateArgs = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs = {
    where?: ClientWhereInput
    orderBy?: Enumerable<ClientOrderByWithAggregationInput>
    by: ClientScalarFieldEnum[]
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }


  export type ClientGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    numericPasswordHash?: boolean
    name?: boolean
    passwordResetRequests?: boolean | Client$passwordResetRequestsArgs
    emailChangeRequests?: boolean | Client$emailChangeRequestsArgs
    pushTokens?: boolean | Client$pushTokensArgs
    sessions?: boolean | Client$sessionsArgs
    notifyAnnouncements?: boolean
    notifyNewProducts?: boolean
    notifyEventsAndActions?: boolean
    notifications?: boolean | Client$notificationsArgs
    _count?: boolean | ClientCountOutputTypeArgs
  }


  export type ClientInclude = {
    passwordResetRequests?: boolean | Client$passwordResetRequestsArgs
    emailChangeRequests?: boolean | Client$emailChangeRequestsArgs
    pushTokens?: boolean | Client$pushTokensArgs
    sessions?: boolean | Client$sessionsArgs
    notifications?: boolean | Client$notificationsArgs
    _count?: boolean | ClientCountOutputTypeArgs
  }

  export type ClientGetPayload<S extends boolean | null | undefined | ClientArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Client :
    S extends undefined ? never :
    S extends { include: any } & (ClientArgs | ClientFindManyArgs)
    ? Client  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'passwordResetRequests' ? Array < ClientPasswordResetRequestGetPayload<S['include'][P]>>  :
        P extends 'emailChangeRequests' ? Array < ClientEmailChangeRequestGetPayload<S['include'][P]>>  :
        P extends 'pushTokens' ? Array < ClientPushTokenGetPayload<S['include'][P]>>  :
        P extends 'sessions' ? Array < ClientSessionGetPayload<S['include'][P]>>  :
        P extends 'notifications' ? Array < NotificationsClientsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClientCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClientArgs | ClientFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'passwordResetRequests' ? Array < ClientPasswordResetRequestGetPayload<S['select'][P]>>  :
        P extends 'emailChangeRequests' ? Array < ClientEmailChangeRequestGetPayload<S['select'][P]>>  :
        P extends 'pushTokens' ? Array < ClientPushTokenGetPayload<S['select'][P]>>  :
        P extends 'sessions' ? Array < ClientSessionGetPayload<S['select'][P]>>  :
        P extends 'notifications' ? Array < NotificationsClientsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClientCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Client ? Client[P] : never
  } 
      : Client


  type ClientCountArgs = 
    Omit<ClientFindManyArgs, 'select' | 'include'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Client'> extends True ? Prisma__ClientClient<ClientGetPayload<T>> : Prisma__ClientClient<ClientGetPayload<T> | null, null>

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs>
    ): Prisma__ClientClient<ClientGetPayload<T>>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Client'> extends True ? Prisma__ClientClient<ClientGetPayload<T>> : Prisma__ClientClient<ClientGetPayload<T> | null, null>

    /**
     * Find the first Client that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs>
    ): Prisma__ClientClient<ClientGetPayload<T>>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs>(
      args?: SelectSubset<T, ClientFindManyArgs>
    ): PrismaPromise<Array<ClientGetPayload<T>>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs>(
      args: SelectSubset<T, ClientCreateArgs>
    ): Prisma__ClientClient<ClientGetPayload<T>>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs>(
      args?: SelectSubset<T, ClientCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs>(
      args: SelectSubset<T, ClientDeleteArgs>
    ): Prisma__ClientClient<ClientGetPayload<T>>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs>(
      args: SelectSubset<T, ClientUpdateArgs>
    ): Prisma__ClientClient<ClientGetPayload<T>>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs>(
      args?: SelectSubset<T, ClientDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs>(
      args: SelectSubset<T, ClientUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs>(
      args: SelectSubset<T, ClientUpsertArgs>
    ): Prisma__ClientClient<ClientGetPayload<T>>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    passwordResetRequests<T extends Client$passwordResetRequestsArgs= {}>(args?: Subset<T, Client$passwordResetRequestsArgs>): PrismaPromise<Array<ClientPasswordResetRequestGetPayload<T>>| Null>;

    emailChangeRequests<T extends Client$emailChangeRequestsArgs= {}>(args?: Subset<T, Client$emailChangeRequestsArgs>): PrismaPromise<Array<ClientEmailChangeRequestGetPayload<T>>| Null>;

    pushTokens<T extends Client$pushTokensArgs= {}>(args?: Subset<T, Client$pushTokensArgs>): PrismaPromise<Array<ClientPushTokenGetPayload<T>>| Null>;

    sessions<T extends Client$sessionsArgs= {}>(args?: Subset<T, Client$sessionsArgs>): PrismaPromise<Array<ClientSessionGetPayload<T>>| Null>;

    notifications<T extends Client$notificationsArgs= {}>(args?: Subset<T, Client$notificationsArgs>): PrismaPromise<Array<NotificationsClientsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Client base type for findUnique actions
   */
  export type ClientFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUnique
   */
  export interface ClientFindUniqueArgs extends ClientFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client base type for findFirst actions
   */
  export type ClientFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: Enumerable<ClientScalarFieldEnum>
  }

  /**
   * Client findFirst
   */
  export interface ClientFindFirstArgs extends ClientFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: Enumerable<ClientScalarFieldEnum>
  }


  /**
   * Client findMany
   */
  export type ClientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: Enumerable<ClientOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: Enumerable<ClientScalarFieldEnum>
  }


  /**
   * Client create
   */
  export type ClientCreateArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }


  /**
   * Client createMany
   */
  export type ClientCreateManyArgs = {
    /**
     * The data used to create many Clients.
     */
    data: Enumerable<ClientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Client update
   */
  export type ClientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }


  /**
   * Client upsert
   */
  export type ClientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }


  /**
   * Client delete
   */
  export type ClientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }


  /**
   * Client.passwordResetRequests
   */
  export type Client$passwordResetRequestsArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    where?: ClientPasswordResetRequestWhereInput
    orderBy?: Enumerable<ClientPasswordResetRequestOrderByWithRelationInput>
    cursor?: ClientPasswordResetRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ClientPasswordResetRequestScalarFieldEnum>
  }


  /**
   * Client.emailChangeRequests
   */
  export type Client$emailChangeRequestsArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    where?: ClientEmailChangeRequestWhereInput
    orderBy?: Enumerable<ClientEmailChangeRequestOrderByWithRelationInput>
    cursor?: ClientEmailChangeRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ClientEmailChangeRequestScalarFieldEnum>
  }


  /**
   * Client.pushTokens
   */
  export type Client$pushTokensArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    where?: ClientPushTokenWhereInput
    orderBy?: Enumerable<ClientPushTokenOrderByWithRelationInput>
    cursor?: ClientPushTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ClientPushTokenScalarFieldEnum>
  }


  /**
   * Client.sessions
   */
  export type Client$sessionsArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    where?: ClientSessionWhereInput
    orderBy?: Enumerable<ClientSessionOrderByWithRelationInput>
    cursor?: ClientSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ClientSessionScalarFieldEnum>
  }


  /**
   * Client.notifications
   */
  export type Client$notificationsArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    where?: NotificationsClientsWhereInput
    orderBy?: Enumerable<NotificationsClientsOrderByWithRelationInput>
    cursor?: NotificationsClientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NotificationsClientsScalarFieldEnum>
  }


  /**
   * Client without action
   */
  export type ClientArgs = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientInclude | null
  }



  /**
   * Model ClientSession
   */


  export type AggregateClientSession = {
    _count: ClientSessionCountAggregateOutputType | null
    _min: ClientSessionMinAggregateOutputType | null
    _max: ClientSessionMaxAggregateOutputType | null
  }

  export type ClientSessionMinAggregateOutputType = {
    token: string | null
    clientId: string | null
  }

  export type ClientSessionMaxAggregateOutputType = {
    token: string | null
    clientId: string | null
  }

  export type ClientSessionCountAggregateOutputType = {
    token: number
    clientId: number
    _all: number
  }


  export type ClientSessionMinAggregateInputType = {
    token?: true
    clientId?: true
  }

  export type ClientSessionMaxAggregateInputType = {
    token?: true
    clientId?: true
  }

  export type ClientSessionCountAggregateInputType = {
    token?: true
    clientId?: true
    _all?: true
  }

  export type ClientSessionAggregateArgs = {
    /**
     * Filter which ClientSession to aggregate.
     */
    where?: ClientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: Enumerable<ClientSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientSessions
    **/
    _count?: true | ClientSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientSessionMaxAggregateInputType
  }

  export type GetClientSessionAggregateType<T extends ClientSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateClientSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientSession[P]>
      : GetScalarType<T[P], AggregateClientSession[P]>
  }




  export type ClientSessionGroupByArgs = {
    where?: ClientSessionWhereInput
    orderBy?: Enumerable<ClientSessionOrderByWithAggregationInput>
    by: ClientSessionScalarFieldEnum[]
    having?: ClientSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientSessionCountAggregateInputType | true
    _min?: ClientSessionMinAggregateInputType
    _max?: ClientSessionMaxAggregateInputType
  }


  export type ClientSessionGroupByOutputType = {
    token: string
    clientId: string
    _count: ClientSessionCountAggregateOutputType | null
    _min: ClientSessionMinAggregateOutputType | null
    _max: ClientSessionMaxAggregateOutputType | null
  }

  type GetClientSessionGroupByPayload<T extends ClientSessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ClientSessionGroupByOutputType[P]>
        }
      >
    >


  export type ClientSessionSelect = {
    token?: boolean
    client?: boolean | ClientArgs
    clientId?: boolean
  }


  export type ClientSessionInclude = {
    client?: boolean | ClientArgs
  }

  export type ClientSessionGetPayload<S extends boolean | null | undefined | ClientSessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClientSession :
    S extends undefined ? never :
    S extends { include: any } & (ClientSessionArgs | ClientSessionFindManyArgs)
    ? ClientSession  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'client' ? ClientGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClientSessionArgs | ClientSessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'client' ? ClientGetPayload<S['select'][P]> :  P extends keyof ClientSession ? ClientSession[P] : never
  } 
      : ClientSession


  type ClientSessionCountArgs = 
    Omit<ClientSessionFindManyArgs, 'select' | 'include'> & {
      select?: ClientSessionCountAggregateInputType | true
    }

  export interface ClientSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ClientSession that matches the filter.
     * @param {ClientSessionFindUniqueArgs} args - Arguments to find a ClientSession
     * @example
     * // Get one ClientSession
     * const clientSession = await prisma.clientSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientSessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientSessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClientSession'> extends True ? Prisma__ClientSessionClient<ClientSessionGetPayload<T>> : Prisma__ClientSessionClient<ClientSessionGetPayload<T> | null, null>

    /**
     * Find one ClientSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientSessionFindUniqueOrThrowArgs} args - Arguments to find a ClientSession
     * @example
     * // Get one ClientSession
     * const clientSession = await prisma.clientSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientSessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClientSessionFindUniqueOrThrowArgs>
    ): Prisma__ClientSessionClient<ClientSessionGetPayload<T>>

    /**
     * Find the first ClientSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionFindFirstArgs} args - Arguments to find a ClientSession
     * @example
     * // Get one ClientSession
     * const clientSession = await prisma.clientSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientSessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientSessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClientSession'> extends True ? Prisma__ClientSessionClient<ClientSessionGetPayload<T>> : Prisma__ClientSessionClient<ClientSessionGetPayload<T> | null, null>

    /**
     * Find the first ClientSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionFindFirstOrThrowArgs} args - Arguments to find a ClientSession
     * @example
     * // Get one ClientSession
     * const clientSession = await prisma.clientSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientSessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientSessionFindFirstOrThrowArgs>
    ): Prisma__ClientSessionClient<ClientSessionGetPayload<T>>

    /**
     * Find zero or more ClientSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientSessions
     * const clientSessions = await prisma.clientSession.findMany()
     * 
     * // Get first 10 ClientSessions
     * const clientSessions = await prisma.clientSession.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const clientSessionWithTokenOnly = await prisma.clientSession.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends ClientSessionFindManyArgs>(
      args?: SelectSubset<T, ClientSessionFindManyArgs>
    ): PrismaPromise<Array<ClientSessionGetPayload<T>>>

    /**
     * Create a ClientSession.
     * @param {ClientSessionCreateArgs} args - Arguments to create a ClientSession.
     * @example
     * // Create one ClientSession
     * const ClientSession = await prisma.clientSession.create({
     *   data: {
     *     // ... data to create a ClientSession
     *   }
     * })
     * 
    **/
    create<T extends ClientSessionCreateArgs>(
      args: SelectSubset<T, ClientSessionCreateArgs>
    ): Prisma__ClientSessionClient<ClientSessionGetPayload<T>>

    /**
     * Create many ClientSessions.
     *     @param {ClientSessionCreateManyArgs} args - Arguments to create many ClientSessions.
     *     @example
     *     // Create many ClientSessions
     *     const clientSession = await prisma.clientSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientSessionCreateManyArgs>(
      args?: SelectSubset<T, ClientSessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClientSession.
     * @param {ClientSessionDeleteArgs} args - Arguments to delete one ClientSession.
     * @example
     * // Delete one ClientSession
     * const ClientSession = await prisma.clientSession.delete({
     *   where: {
     *     // ... filter to delete one ClientSession
     *   }
     * })
     * 
    **/
    delete<T extends ClientSessionDeleteArgs>(
      args: SelectSubset<T, ClientSessionDeleteArgs>
    ): Prisma__ClientSessionClient<ClientSessionGetPayload<T>>

    /**
     * Update one ClientSession.
     * @param {ClientSessionUpdateArgs} args - Arguments to update one ClientSession.
     * @example
     * // Update one ClientSession
     * const clientSession = await prisma.clientSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientSessionUpdateArgs>(
      args: SelectSubset<T, ClientSessionUpdateArgs>
    ): Prisma__ClientSessionClient<ClientSessionGetPayload<T>>

    /**
     * Delete zero or more ClientSessions.
     * @param {ClientSessionDeleteManyArgs} args - Arguments to filter ClientSessions to delete.
     * @example
     * // Delete a few ClientSessions
     * const { count } = await prisma.clientSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientSessionDeleteManyArgs>(
      args?: SelectSubset<T, ClientSessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientSessions
     * const clientSession = await prisma.clientSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientSessionUpdateManyArgs>(
      args: SelectSubset<T, ClientSessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientSession.
     * @param {ClientSessionUpsertArgs} args - Arguments to update or create a ClientSession.
     * @example
     * // Update or create a ClientSession
     * const clientSession = await prisma.clientSession.upsert({
     *   create: {
     *     // ... data to create a ClientSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientSession we want to update
     *   }
     * })
    **/
    upsert<T extends ClientSessionUpsertArgs>(
      args: SelectSubset<T, ClientSessionUpsertArgs>
    ): Prisma__ClientSessionClient<ClientSessionGetPayload<T>>

    /**
     * Count the number of ClientSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionCountArgs} args - Arguments to filter ClientSessions to count.
     * @example
     * // Count the number of ClientSessions
     * const count = await prisma.clientSession.count({
     *   where: {
     *     // ... the filter for the ClientSessions we want to count
     *   }
     * })
    **/
    count<T extends ClientSessionCountArgs>(
      args?: Subset<T, ClientSessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientSessionAggregateArgs>(args: Subset<T, ClientSessionAggregateArgs>): PrismaPromise<GetClientSessionAggregateType<T>>

    /**
     * Group by ClientSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientSessionGroupByArgs['orderBy'] }
        : { orderBy?: ClientSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientSessionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientSessionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    client<T extends ClientArgs= {}>(args?: Subset<T, ClientArgs>): Prisma__ClientClient<ClientGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ClientSession base type for findUnique actions
   */
  export type ClientSessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * Filter, which ClientSession to fetch.
     */
    where: ClientSessionWhereUniqueInput
  }

  /**
   * ClientSession findUnique
   */
  export interface ClientSessionFindUniqueArgs extends ClientSessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientSession findUniqueOrThrow
   */
  export type ClientSessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * Filter, which ClientSession to fetch.
     */
    where: ClientSessionWhereUniqueInput
  }


  /**
   * ClientSession base type for findFirst actions
   */
  export type ClientSessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * Filter, which ClientSession to fetch.
     */
    where?: ClientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: Enumerable<ClientSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSessions.
     */
    cursor?: ClientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSessions.
     */
    distinct?: Enumerable<ClientSessionScalarFieldEnum>
  }

  /**
   * ClientSession findFirst
   */
  export interface ClientSessionFindFirstArgs extends ClientSessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientSession findFirstOrThrow
   */
  export type ClientSessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * Filter, which ClientSession to fetch.
     */
    where?: ClientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: Enumerable<ClientSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientSessions.
     */
    cursor?: ClientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientSessions.
     */
    distinct?: Enumerable<ClientSessionScalarFieldEnum>
  }


  /**
   * ClientSession findMany
   */
  export type ClientSessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * Filter, which ClientSessions to fetch.
     */
    where?: ClientSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientSessions to fetch.
     */
    orderBy?: Enumerable<ClientSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientSessions.
     */
    cursor?: ClientSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientSessions.
     */
    skip?: number
    distinct?: Enumerable<ClientSessionScalarFieldEnum>
  }


  /**
   * ClientSession create
   */
  export type ClientSessionCreateArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * The data needed to create a ClientSession.
     */
    data: XOR<ClientSessionCreateInput, ClientSessionUncheckedCreateInput>
  }


  /**
   * ClientSession createMany
   */
  export type ClientSessionCreateManyArgs = {
    /**
     * The data used to create many ClientSessions.
     */
    data: Enumerable<ClientSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClientSession update
   */
  export type ClientSessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * The data needed to update a ClientSession.
     */
    data: XOR<ClientSessionUpdateInput, ClientSessionUncheckedUpdateInput>
    /**
     * Choose, which ClientSession to update.
     */
    where: ClientSessionWhereUniqueInput
  }


  /**
   * ClientSession updateMany
   */
  export type ClientSessionUpdateManyArgs = {
    /**
     * The data used to update ClientSessions.
     */
    data: XOR<ClientSessionUpdateManyMutationInput, ClientSessionUncheckedUpdateManyInput>
    /**
     * Filter which ClientSessions to update
     */
    where?: ClientSessionWhereInput
  }


  /**
   * ClientSession upsert
   */
  export type ClientSessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * The filter to search for the ClientSession to update in case it exists.
     */
    where: ClientSessionWhereUniqueInput
    /**
     * In case the ClientSession found by the `where` argument doesn't exist, create a new ClientSession with this data.
     */
    create: XOR<ClientSessionCreateInput, ClientSessionUncheckedCreateInput>
    /**
     * In case the ClientSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientSessionUpdateInput, ClientSessionUncheckedUpdateInput>
  }


  /**
   * ClientSession delete
   */
  export type ClientSessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
    /**
     * Filter which ClientSession to delete.
     */
    where: ClientSessionWhereUniqueInput
  }


  /**
   * ClientSession deleteMany
   */
  export type ClientSessionDeleteManyArgs = {
    /**
     * Filter which ClientSessions to delete
     */
    where?: ClientSessionWhereInput
  }


  /**
   * ClientSession without action
   */
  export type ClientSessionArgs = {
    /**
     * Select specific fields to fetch from the ClientSession
     */
    select?: ClientSessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientSessionInclude | null
  }



  /**
   * Model ClientPasswordResetRequest
   */


  export type AggregateClientPasswordResetRequest = {
    _count: ClientPasswordResetRequestCountAggregateOutputType | null
    _min: ClientPasswordResetRequestMinAggregateOutputType | null
    _max: ClientPasswordResetRequestMaxAggregateOutputType | null
  }

  export type ClientPasswordResetRequestMinAggregateOutputType = {
    token: string | null
    createdAt: Date | null
    email: string | null
    wasUsed: boolean | null
    clientId: string | null
  }

  export type ClientPasswordResetRequestMaxAggregateOutputType = {
    token: string | null
    createdAt: Date | null
    email: string | null
    wasUsed: boolean | null
    clientId: string | null
  }

  export type ClientPasswordResetRequestCountAggregateOutputType = {
    token: number
    createdAt: number
    email: number
    wasUsed: number
    clientId: number
    _all: number
  }


  export type ClientPasswordResetRequestMinAggregateInputType = {
    token?: true
    createdAt?: true
    email?: true
    wasUsed?: true
    clientId?: true
  }

  export type ClientPasswordResetRequestMaxAggregateInputType = {
    token?: true
    createdAt?: true
    email?: true
    wasUsed?: true
    clientId?: true
  }

  export type ClientPasswordResetRequestCountAggregateInputType = {
    token?: true
    createdAt?: true
    email?: true
    wasUsed?: true
    clientId?: true
    _all?: true
  }

  export type ClientPasswordResetRequestAggregateArgs = {
    /**
     * Filter which ClientPasswordResetRequest to aggregate.
     */
    where?: ClientPasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPasswordResetRequests to fetch.
     */
    orderBy?: Enumerable<ClientPasswordResetRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientPasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPasswordResetRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientPasswordResetRequests
    **/
    _count?: true | ClientPasswordResetRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientPasswordResetRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientPasswordResetRequestMaxAggregateInputType
  }

  export type GetClientPasswordResetRequestAggregateType<T extends ClientPasswordResetRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateClientPasswordResetRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientPasswordResetRequest[P]>
      : GetScalarType<T[P], AggregateClientPasswordResetRequest[P]>
  }




  export type ClientPasswordResetRequestGroupByArgs = {
    where?: ClientPasswordResetRequestWhereInput
    orderBy?: Enumerable<ClientPasswordResetRequestOrderByWithAggregationInput>
    by: ClientPasswordResetRequestScalarFieldEnum[]
    having?: ClientPasswordResetRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientPasswordResetRequestCountAggregateInputType | true
    _min?: ClientPasswordResetRequestMinAggregateInputType
    _max?: ClientPasswordResetRequestMaxAggregateInputType
  }


  export type ClientPasswordResetRequestGroupByOutputType = {
    token: string
    createdAt: Date
    email: string
    wasUsed: boolean
    clientId: string
    _count: ClientPasswordResetRequestCountAggregateOutputType | null
    _min: ClientPasswordResetRequestMinAggregateOutputType | null
    _max: ClientPasswordResetRequestMaxAggregateOutputType | null
  }

  type GetClientPasswordResetRequestGroupByPayload<T extends ClientPasswordResetRequestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientPasswordResetRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientPasswordResetRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientPasswordResetRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ClientPasswordResetRequestGroupByOutputType[P]>
        }
      >
    >


  export type ClientPasswordResetRequestSelect = {
    token?: boolean
    createdAt?: boolean
    email?: boolean
    wasUsed?: boolean
    client?: boolean | ClientArgs
    clientId?: boolean
  }


  export type ClientPasswordResetRequestInclude = {
    client?: boolean | ClientArgs
  }

  export type ClientPasswordResetRequestGetPayload<S extends boolean | null | undefined | ClientPasswordResetRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClientPasswordResetRequest :
    S extends undefined ? never :
    S extends { include: any } & (ClientPasswordResetRequestArgs | ClientPasswordResetRequestFindManyArgs)
    ? ClientPasswordResetRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'client' ? ClientGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClientPasswordResetRequestArgs | ClientPasswordResetRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'client' ? ClientGetPayload<S['select'][P]> :  P extends keyof ClientPasswordResetRequest ? ClientPasswordResetRequest[P] : never
  } 
      : ClientPasswordResetRequest


  type ClientPasswordResetRequestCountArgs = 
    Omit<ClientPasswordResetRequestFindManyArgs, 'select' | 'include'> & {
      select?: ClientPasswordResetRequestCountAggregateInputType | true
    }

  export interface ClientPasswordResetRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ClientPasswordResetRequest that matches the filter.
     * @param {ClientPasswordResetRequestFindUniqueArgs} args - Arguments to find a ClientPasswordResetRequest
     * @example
     * // Get one ClientPasswordResetRequest
     * const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientPasswordResetRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientPasswordResetRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClientPasswordResetRequest'> extends True ? Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>> : Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T> | null, null>

    /**
     * Find one ClientPasswordResetRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientPasswordResetRequestFindUniqueOrThrowArgs} args - Arguments to find a ClientPasswordResetRequest
     * @example
     * // Get one ClientPasswordResetRequest
     * const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientPasswordResetRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClientPasswordResetRequestFindUniqueOrThrowArgs>
    ): Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>>

    /**
     * Find the first ClientPasswordResetRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPasswordResetRequestFindFirstArgs} args - Arguments to find a ClientPasswordResetRequest
     * @example
     * // Get one ClientPasswordResetRequest
     * const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientPasswordResetRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientPasswordResetRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClientPasswordResetRequest'> extends True ? Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>> : Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T> | null, null>

    /**
     * Find the first ClientPasswordResetRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPasswordResetRequestFindFirstOrThrowArgs} args - Arguments to find a ClientPasswordResetRequest
     * @example
     * // Get one ClientPasswordResetRequest
     * const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientPasswordResetRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientPasswordResetRequestFindFirstOrThrowArgs>
    ): Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>>

    /**
     * Find zero or more ClientPasswordResetRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPasswordResetRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientPasswordResetRequests
     * const clientPasswordResetRequests = await prisma.clientPasswordResetRequest.findMany()
     * 
     * // Get first 10 ClientPasswordResetRequests
     * const clientPasswordResetRequests = await prisma.clientPasswordResetRequest.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const clientPasswordResetRequestWithTokenOnly = await prisma.clientPasswordResetRequest.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends ClientPasswordResetRequestFindManyArgs>(
      args?: SelectSubset<T, ClientPasswordResetRequestFindManyArgs>
    ): PrismaPromise<Array<ClientPasswordResetRequestGetPayload<T>>>

    /**
     * Create a ClientPasswordResetRequest.
     * @param {ClientPasswordResetRequestCreateArgs} args - Arguments to create a ClientPasswordResetRequest.
     * @example
     * // Create one ClientPasswordResetRequest
     * const ClientPasswordResetRequest = await prisma.clientPasswordResetRequest.create({
     *   data: {
     *     // ... data to create a ClientPasswordResetRequest
     *   }
     * })
     * 
    **/
    create<T extends ClientPasswordResetRequestCreateArgs>(
      args: SelectSubset<T, ClientPasswordResetRequestCreateArgs>
    ): Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>>

    /**
     * Create many ClientPasswordResetRequests.
     *     @param {ClientPasswordResetRequestCreateManyArgs} args - Arguments to create many ClientPasswordResetRequests.
     *     @example
     *     // Create many ClientPasswordResetRequests
     *     const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientPasswordResetRequestCreateManyArgs>(
      args?: SelectSubset<T, ClientPasswordResetRequestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClientPasswordResetRequest.
     * @param {ClientPasswordResetRequestDeleteArgs} args - Arguments to delete one ClientPasswordResetRequest.
     * @example
     * // Delete one ClientPasswordResetRequest
     * const ClientPasswordResetRequest = await prisma.clientPasswordResetRequest.delete({
     *   where: {
     *     // ... filter to delete one ClientPasswordResetRequest
     *   }
     * })
     * 
    **/
    delete<T extends ClientPasswordResetRequestDeleteArgs>(
      args: SelectSubset<T, ClientPasswordResetRequestDeleteArgs>
    ): Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>>

    /**
     * Update one ClientPasswordResetRequest.
     * @param {ClientPasswordResetRequestUpdateArgs} args - Arguments to update one ClientPasswordResetRequest.
     * @example
     * // Update one ClientPasswordResetRequest
     * const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientPasswordResetRequestUpdateArgs>(
      args: SelectSubset<T, ClientPasswordResetRequestUpdateArgs>
    ): Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>>

    /**
     * Delete zero or more ClientPasswordResetRequests.
     * @param {ClientPasswordResetRequestDeleteManyArgs} args - Arguments to filter ClientPasswordResetRequests to delete.
     * @example
     * // Delete a few ClientPasswordResetRequests
     * const { count } = await prisma.clientPasswordResetRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientPasswordResetRequestDeleteManyArgs>(
      args?: SelectSubset<T, ClientPasswordResetRequestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientPasswordResetRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPasswordResetRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientPasswordResetRequests
     * const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientPasswordResetRequestUpdateManyArgs>(
      args: SelectSubset<T, ClientPasswordResetRequestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientPasswordResetRequest.
     * @param {ClientPasswordResetRequestUpsertArgs} args - Arguments to update or create a ClientPasswordResetRequest.
     * @example
     * // Update or create a ClientPasswordResetRequest
     * const clientPasswordResetRequest = await prisma.clientPasswordResetRequest.upsert({
     *   create: {
     *     // ... data to create a ClientPasswordResetRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientPasswordResetRequest we want to update
     *   }
     * })
    **/
    upsert<T extends ClientPasswordResetRequestUpsertArgs>(
      args: SelectSubset<T, ClientPasswordResetRequestUpsertArgs>
    ): Prisma__ClientPasswordResetRequestClient<ClientPasswordResetRequestGetPayload<T>>

    /**
     * Count the number of ClientPasswordResetRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPasswordResetRequestCountArgs} args - Arguments to filter ClientPasswordResetRequests to count.
     * @example
     * // Count the number of ClientPasswordResetRequests
     * const count = await prisma.clientPasswordResetRequest.count({
     *   where: {
     *     // ... the filter for the ClientPasswordResetRequests we want to count
     *   }
     * })
    **/
    count<T extends ClientPasswordResetRequestCountArgs>(
      args?: Subset<T, ClientPasswordResetRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientPasswordResetRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientPasswordResetRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPasswordResetRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientPasswordResetRequestAggregateArgs>(args: Subset<T, ClientPasswordResetRequestAggregateArgs>): PrismaPromise<GetClientPasswordResetRequestAggregateType<T>>

    /**
     * Group by ClientPasswordResetRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPasswordResetRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientPasswordResetRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientPasswordResetRequestGroupByArgs['orderBy'] }
        : { orderBy?: ClientPasswordResetRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientPasswordResetRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientPasswordResetRequestGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientPasswordResetRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientPasswordResetRequestClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    client<T extends ClientArgs= {}>(args?: Subset<T, ClientArgs>): Prisma__ClientClient<ClientGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ClientPasswordResetRequest base type for findUnique actions
   */
  export type ClientPasswordResetRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * Filter, which ClientPasswordResetRequest to fetch.
     */
    where: ClientPasswordResetRequestWhereUniqueInput
  }

  /**
   * ClientPasswordResetRequest findUnique
   */
  export interface ClientPasswordResetRequestFindUniqueArgs extends ClientPasswordResetRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientPasswordResetRequest findUniqueOrThrow
   */
  export type ClientPasswordResetRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * Filter, which ClientPasswordResetRequest to fetch.
     */
    where: ClientPasswordResetRequestWhereUniqueInput
  }


  /**
   * ClientPasswordResetRequest base type for findFirst actions
   */
  export type ClientPasswordResetRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * Filter, which ClientPasswordResetRequest to fetch.
     */
    where?: ClientPasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPasswordResetRequests to fetch.
     */
    orderBy?: Enumerable<ClientPasswordResetRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPasswordResetRequests.
     */
    cursor?: ClientPasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPasswordResetRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPasswordResetRequests.
     */
    distinct?: Enumerable<ClientPasswordResetRequestScalarFieldEnum>
  }

  /**
   * ClientPasswordResetRequest findFirst
   */
  export interface ClientPasswordResetRequestFindFirstArgs extends ClientPasswordResetRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientPasswordResetRequest findFirstOrThrow
   */
  export type ClientPasswordResetRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * Filter, which ClientPasswordResetRequest to fetch.
     */
    where?: ClientPasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPasswordResetRequests to fetch.
     */
    orderBy?: Enumerable<ClientPasswordResetRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPasswordResetRequests.
     */
    cursor?: ClientPasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPasswordResetRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPasswordResetRequests.
     */
    distinct?: Enumerable<ClientPasswordResetRequestScalarFieldEnum>
  }


  /**
   * ClientPasswordResetRequest findMany
   */
  export type ClientPasswordResetRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * Filter, which ClientPasswordResetRequests to fetch.
     */
    where?: ClientPasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPasswordResetRequests to fetch.
     */
    orderBy?: Enumerable<ClientPasswordResetRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientPasswordResetRequests.
     */
    cursor?: ClientPasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPasswordResetRequests.
     */
    skip?: number
    distinct?: Enumerable<ClientPasswordResetRequestScalarFieldEnum>
  }


  /**
   * ClientPasswordResetRequest create
   */
  export type ClientPasswordResetRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * The data needed to create a ClientPasswordResetRequest.
     */
    data: XOR<ClientPasswordResetRequestCreateInput, ClientPasswordResetRequestUncheckedCreateInput>
  }


  /**
   * ClientPasswordResetRequest createMany
   */
  export type ClientPasswordResetRequestCreateManyArgs = {
    /**
     * The data used to create many ClientPasswordResetRequests.
     */
    data: Enumerable<ClientPasswordResetRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClientPasswordResetRequest update
   */
  export type ClientPasswordResetRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * The data needed to update a ClientPasswordResetRequest.
     */
    data: XOR<ClientPasswordResetRequestUpdateInput, ClientPasswordResetRequestUncheckedUpdateInput>
    /**
     * Choose, which ClientPasswordResetRequest to update.
     */
    where: ClientPasswordResetRequestWhereUniqueInput
  }


  /**
   * ClientPasswordResetRequest updateMany
   */
  export type ClientPasswordResetRequestUpdateManyArgs = {
    /**
     * The data used to update ClientPasswordResetRequests.
     */
    data: XOR<ClientPasswordResetRequestUpdateManyMutationInput, ClientPasswordResetRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClientPasswordResetRequests to update
     */
    where?: ClientPasswordResetRequestWhereInput
  }


  /**
   * ClientPasswordResetRequest upsert
   */
  export type ClientPasswordResetRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * The filter to search for the ClientPasswordResetRequest to update in case it exists.
     */
    where: ClientPasswordResetRequestWhereUniqueInput
    /**
     * In case the ClientPasswordResetRequest found by the `where` argument doesn't exist, create a new ClientPasswordResetRequest with this data.
     */
    create: XOR<ClientPasswordResetRequestCreateInput, ClientPasswordResetRequestUncheckedCreateInput>
    /**
     * In case the ClientPasswordResetRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientPasswordResetRequestUpdateInput, ClientPasswordResetRequestUncheckedUpdateInput>
  }


  /**
   * ClientPasswordResetRequest delete
   */
  export type ClientPasswordResetRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
    /**
     * Filter which ClientPasswordResetRequest to delete.
     */
    where: ClientPasswordResetRequestWhereUniqueInput
  }


  /**
   * ClientPasswordResetRequest deleteMany
   */
  export type ClientPasswordResetRequestDeleteManyArgs = {
    /**
     * Filter which ClientPasswordResetRequests to delete
     */
    where?: ClientPasswordResetRequestWhereInput
  }


  /**
   * ClientPasswordResetRequest without action
   */
  export type ClientPasswordResetRequestArgs = {
    /**
     * Select specific fields to fetch from the ClientPasswordResetRequest
     */
    select?: ClientPasswordResetRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPasswordResetRequestInclude | null
  }



  /**
   * Model ClientEmailChangeRequest
   */


  export type AggregateClientEmailChangeRequest = {
    _count: ClientEmailChangeRequestCountAggregateOutputType | null
    _min: ClientEmailChangeRequestMinAggregateOutputType | null
    _max: ClientEmailChangeRequestMaxAggregateOutputType | null
  }

  export type ClientEmailChangeRequestMinAggregateOutputType = {
    id: string | null
    status: ClientEmailChangeRequestStatus | null
    clientId: string | null
  }

  export type ClientEmailChangeRequestMaxAggregateOutputType = {
    id: string | null
    status: ClientEmailChangeRequestStatus | null
    clientId: string | null
  }

  export type ClientEmailChangeRequestCountAggregateOutputType = {
    id: number
    status: number
    clientId: number
    _all: number
  }


  export type ClientEmailChangeRequestMinAggregateInputType = {
    id?: true
    status?: true
    clientId?: true
  }

  export type ClientEmailChangeRequestMaxAggregateInputType = {
    id?: true
    status?: true
    clientId?: true
  }

  export type ClientEmailChangeRequestCountAggregateInputType = {
    id?: true
    status?: true
    clientId?: true
    _all?: true
  }

  export type ClientEmailChangeRequestAggregateArgs = {
    /**
     * Filter which ClientEmailChangeRequest to aggregate.
     */
    where?: ClientEmailChangeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientEmailChangeRequests to fetch.
     */
    orderBy?: Enumerable<ClientEmailChangeRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientEmailChangeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientEmailChangeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientEmailChangeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientEmailChangeRequests
    **/
    _count?: true | ClientEmailChangeRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientEmailChangeRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientEmailChangeRequestMaxAggregateInputType
  }

  export type GetClientEmailChangeRequestAggregateType<T extends ClientEmailChangeRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateClientEmailChangeRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientEmailChangeRequest[P]>
      : GetScalarType<T[P], AggregateClientEmailChangeRequest[P]>
  }




  export type ClientEmailChangeRequestGroupByArgs = {
    where?: ClientEmailChangeRequestWhereInput
    orderBy?: Enumerable<ClientEmailChangeRequestOrderByWithAggregationInput>
    by: ClientEmailChangeRequestScalarFieldEnum[]
    having?: ClientEmailChangeRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientEmailChangeRequestCountAggregateInputType | true
    _min?: ClientEmailChangeRequestMinAggregateInputType
    _max?: ClientEmailChangeRequestMaxAggregateInputType
  }


  export type ClientEmailChangeRequestGroupByOutputType = {
    id: string
    status: ClientEmailChangeRequestStatus
    clientId: string
    _count: ClientEmailChangeRequestCountAggregateOutputType | null
    _min: ClientEmailChangeRequestMinAggregateOutputType | null
    _max: ClientEmailChangeRequestMaxAggregateOutputType | null
  }

  type GetClientEmailChangeRequestGroupByPayload<T extends ClientEmailChangeRequestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientEmailChangeRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientEmailChangeRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientEmailChangeRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ClientEmailChangeRequestGroupByOutputType[P]>
        }
      >
    >


  export type ClientEmailChangeRequestSelect = {
    id?: boolean
    status?: boolean
    client?: boolean | ClientArgs
    clientId?: boolean
  }


  export type ClientEmailChangeRequestInclude = {
    client?: boolean | ClientArgs
  }

  export type ClientEmailChangeRequestGetPayload<S extends boolean | null | undefined | ClientEmailChangeRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClientEmailChangeRequest :
    S extends undefined ? never :
    S extends { include: any } & (ClientEmailChangeRequestArgs | ClientEmailChangeRequestFindManyArgs)
    ? ClientEmailChangeRequest  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'client' ? ClientGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClientEmailChangeRequestArgs | ClientEmailChangeRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'client' ? ClientGetPayload<S['select'][P]> :  P extends keyof ClientEmailChangeRequest ? ClientEmailChangeRequest[P] : never
  } 
      : ClientEmailChangeRequest


  type ClientEmailChangeRequestCountArgs = 
    Omit<ClientEmailChangeRequestFindManyArgs, 'select' | 'include'> & {
      select?: ClientEmailChangeRequestCountAggregateInputType | true
    }

  export interface ClientEmailChangeRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ClientEmailChangeRequest that matches the filter.
     * @param {ClientEmailChangeRequestFindUniqueArgs} args - Arguments to find a ClientEmailChangeRequest
     * @example
     * // Get one ClientEmailChangeRequest
     * const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientEmailChangeRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientEmailChangeRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClientEmailChangeRequest'> extends True ? Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>> : Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T> | null, null>

    /**
     * Find one ClientEmailChangeRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientEmailChangeRequestFindUniqueOrThrowArgs} args - Arguments to find a ClientEmailChangeRequest
     * @example
     * // Get one ClientEmailChangeRequest
     * const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientEmailChangeRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClientEmailChangeRequestFindUniqueOrThrowArgs>
    ): Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>>

    /**
     * Find the first ClientEmailChangeRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientEmailChangeRequestFindFirstArgs} args - Arguments to find a ClientEmailChangeRequest
     * @example
     * // Get one ClientEmailChangeRequest
     * const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientEmailChangeRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientEmailChangeRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClientEmailChangeRequest'> extends True ? Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>> : Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T> | null, null>

    /**
     * Find the first ClientEmailChangeRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientEmailChangeRequestFindFirstOrThrowArgs} args - Arguments to find a ClientEmailChangeRequest
     * @example
     * // Get one ClientEmailChangeRequest
     * const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientEmailChangeRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientEmailChangeRequestFindFirstOrThrowArgs>
    ): Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>>

    /**
     * Find zero or more ClientEmailChangeRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientEmailChangeRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientEmailChangeRequests
     * const clientEmailChangeRequests = await prisma.clientEmailChangeRequest.findMany()
     * 
     * // Get first 10 ClientEmailChangeRequests
     * const clientEmailChangeRequests = await prisma.clientEmailChangeRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientEmailChangeRequestWithIdOnly = await prisma.clientEmailChangeRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientEmailChangeRequestFindManyArgs>(
      args?: SelectSubset<T, ClientEmailChangeRequestFindManyArgs>
    ): PrismaPromise<Array<ClientEmailChangeRequestGetPayload<T>>>

    /**
     * Create a ClientEmailChangeRequest.
     * @param {ClientEmailChangeRequestCreateArgs} args - Arguments to create a ClientEmailChangeRequest.
     * @example
     * // Create one ClientEmailChangeRequest
     * const ClientEmailChangeRequest = await prisma.clientEmailChangeRequest.create({
     *   data: {
     *     // ... data to create a ClientEmailChangeRequest
     *   }
     * })
     * 
    **/
    create<T extends ClientEmailChangeRequestCreateArgs>(
      args: SelectSubset<T, ClientEmailChangeRequestCreateArgs>
    ): Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>>

    /**
     * Create many ClientEmailChangeRequests.
     *     @param {ClientEmailChangeRequestCreateManyArgs} args - Arguments to create many ClientEmailChangeRequests.
     *     @example
     *     // Create many ClientEmailChangeRequests
     *     const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientEmailChangeRequestCreateManyArgs>(
      args?: SelectSubset<T, ClientEmailChangeRequestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClientEmailChangeRequest.
     * @param {ClientEmailChangeRequestDeleteArgs} args - Arguments to delete one ClientEmailChangeRequest.
     * @example
     * // Delete one ClientEmailChangeRequest
     * const ClientEmailChangeRequest = await prisma.clientEmailChangeRequest.delete({
     *   where: {
     *     // ... filter to delete one ClientEmailChangeRequest
     *   }
     * })
     * 
    **/
    delete<T extends ClientEmailChangeRequestDeleteArgs>(
      args: SelectSubset<T, ClientEmailChangeRequestDeleteArgs>
    ): Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>>

    /**
     * Update one ClientEmailChangeRequest.
     * @param {ClientEmailChangeRequestUpdateArgs} args - Arguments to update one ClientEmailChangeRequest.
     * @example
     * // Update one ClientEmailChangeRequest
     * const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientEmailChangeRequestUpdateArgs>(
      args: SelectSubset<T, ClientEmailChangeRequestUpdateArgs>
    ): Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>>

    /**
     * Delete zero or more ClientEmailChangeRequests.
     * @param {ClientEmailChangeRequestDeleteManyArgs} args - Arguments to filter ClientEmailChangeRequests to delete.
     * @example
     * // Delete a few ClientEmailChangeRequests
     * const { count } = await prisma.clientEmailChangeRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientEmailChangeRequestDeleteManyArgs>(
      args?: SelectSubset<T, ClientEmailChangeRequestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientEmailChangeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientEmailChangeRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientEmailChangeRequests
     * const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientEmailChangeRequestUpdateManyArgs>(
      args: SelectSubset<T, ClientEmailChangeRequestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientEmailChangeRequest.
     * @param {ClientEmailChangeRequestUpsertArgs} args - Arguments to update or create a ClientEmailChangeRequest.
     * @example
     * // Update or create a ClientEmailChangeRequest
     * const clientEmailChangeRequest = await prisma.clientEmailChangeRequest.upsert({
     *   create: {
     *     // ... data to create a ClientEmailChangeRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientEmailChangeRequest we want to update
     *   }
     * })
    **/
    upsert<T extends ClientEmailChangeRequestUpsertArgs>(
      args: SelectSubset<T, ClientEmailChangeRequestUpsertArgs>
    ): Prisma__ClientEmailChangeRequestClient<ClientEmailChangeRequestGetPayload<T>>

    /**
     * Count the number of ClientEmailChangeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientEmailChangeRequestCountArgs} args - Arguments to filter ClientEmailChangeRequests to count.
     * @example
     * // Count the number of ClientEmailChangeRequests
     * const count = await prisma.clientEmailChangeRequest.count({
     *   where: {
     *     // ... the filter for the ClientEmailChangeRequests we want to count
     *   }
     * })
    **/
    count<T extends ClientEmailChangeRequestCountArgs>(
      args?: Subset<T, ClientEmailChangeRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientEmailChangeRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientEmailChangeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientEmailChangeRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientEmailChangeRequestAggregateArgs>(args: Subset<T, ClientEmailChangeRequestAggregateArgs>): PrismaPromise<GetClientEmailChangeRequestAggregateType<T>>

    /**
     * Group by ClientEmailChangeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientEmailChangeRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientEmailChangeRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientEmailChangeRequestGroupByArgs['orderBy'] }
        : { orderBy?: ClientEmailChangeRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientEmailChangeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientEmailChangeRequestGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientEmailChangeRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientEmailChangeRequestClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    client<T extends ClientArgs= {}>(args?: Subset<T, ClientArgs>): Prisma__ClientClient<ClientGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ClientEmailChangeRequest base type for findUnique actions
   */
  export type ClientEmailChangeRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * Filter, which ClientEmailChangeRequest to fetch.
     */
    where: ClientEmailChangeRequestWhereUniqueInput
  }

  /**
   * ClientEmailChangeRequest findUnique
   */
  export interface ClientEmailChangeRequestFindUniqueArgs extends ClientEmailChangeRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientEmailChangeRequest findUniqueOrThrow
   */
  export type ClientEmailChangeRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * Filter, which ClientEmailChangeRequest to fetch.
     */
    where: ClientEmailChangeRequestWhereUniqueInput
  }


  /**
   * ClientEmailChangeRequest base type for findFirst actions
   */
  export type ClientEmailChangeRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * Filter, which ClientEmailChangeRequest to fetch.
     */
    where?: ClientEmailChangeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientEmailChangeRequests to fetch.
     */
    orderBy?: Enumerable<ClientEmailChangeRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientEmailChangeRequests.
     */
    cursor?: ClientEmailChangeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientEmailChangeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientEmailChangeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientEmailChangeRequests.
     */
    distinct?: Enumerable<ClientEmailChangeRequestScalarFieldEnum>
  }

  /**
   * ClientEmailChangeRequest findFirst
   */
  export interface ClientEmailChangeRequestFindFirstArgs extends ClientEmailChangeRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientEmailChangeRequest findFirstOrThrow
   */
  export type ClientEmailChangeRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * Filter, which ClientEmailChangeRequest to fetch.
     */
    where?: ClientEmailChangeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientEmailChangeRequests to fetch.
     */
    orderBy?: Enumerable<ClientEmailChangeRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientEmailChangeRequests.
     */
    cursor?: ClientEmailChangeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientEmailChangeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientEmailChangeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientEmailChangeRequests.
     */
    distinct?: Enumerable<ClientEmailChangeRequestScalarFieldEnum>
  }


  /**
   * ClientEmailChangeRequest findMany
   */
  export type ClientEmailChangeRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * Filter, which ClientEmailChangeRequests to fetch.
     */
    where?: ClientEmailChangeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientEmailChangeRequests to fetch.
     */
    orderBy?: Enumerable<ClientEmailChangeRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientEmailChangeRequests.
     */
    cursor?: ClientEmailChangeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientEmailChangeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientEmailChangeRequests.
     */
    skip?: number
    distinct?: Enumerable<ClientEmailChangeRequestScalarFieldEnum>
  }


  /**
   * ClientEmailChangeRequest create
   */
  export type ClientEmailChangeRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * The data needed to create a ClientEmailChangeRequest.
     */
    data: XOR<ClientEmailChangeRequestCreateInput, ClientEmailChangeRequestUncheckedCreateInput>
  }


  /**
   * ClientEmailChangeRequest createMany
   */
  export type ClientEmailChangeRequestCreateManyArgs = {
    /**
     * The data used to create many ClientEmailChangeRequests.
     */
    data: Enumerable<ClientEmailChangeRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClientEmailChangeRequest update
   */
  export type ClientEmailChangeRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * The data needed to update a ClientEmailChangeRequest.
     */
    data: XOR<ClientEmailChangeRequestUpdateInput, ClientEmailChangeRequestUncheckedUpdateInput>
    /**
     * Choose, which ClientEmailChangeRequest to update.
     */
    where: ClientEmailChangeRequestWhereUniqueInput
  }


  /**
   * ClientEmailChangeRequest updateMany
   */
  export type ClientEmailChangeRequestUpdateManyArgs = {
    /**
     * The data used to update ClientEmailChangeRequests.
     */
    data: XOR<ClientEmailChangeRequestUpdateManyMutationInput, ClientEmailChangeRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClientEmailChangeRequests to update
     */
    where?: ClientEmailChangeRequestWhereInput
  }


  /**
   * ClientEmailChangeRequest upsert
   */
  export type ClientEmailChangeRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * The filter to search for the ClientEmailChangeRequest to update in case it exists.
     */
    where: ClientEmailChangeRequestWhereUniqueInput
    /**
     * In case the ClientEmailChangeRequest found by the `where` argument doesn't exist, create a new ClientEmailChangeRequest with this data.
     */
    create: XOR<ClientEmailChangeRequestCreateInput, ClientEmailChangeRequestUncheckedCreateInput>
    /**
     * In case the ClientEmailChangeRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientEmailChangeRequestUpdateInput, ClientEmailChangeRequestUncheckedUpdateInput>
  }


  /**
   * ClientEmailChangeRequest delete
   */
  export type ClientEmailChangeRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
    /**
     * Filter which ClientEmailChangeRequest to delete.
     */
    where: ClientEmailChangeRequestWhereUniqueInput
  }


  /**
   * ClientEmailChangeRequest deleteMany
   */
  export type ClientEmailChangeRequestDeleteManyArgs = {
    /**
     * Filter which ClientEmailChangeRequests to delete
     */
    where?: ClientEmailChangeRequestWhereInput
  }


  /**
   * ClientEmailChangeRequest without action
   */
  export type ClientEmailChangeRequestArgs = {
    /**
     * Select specific fields to fetch from the ClientEmailChangeRequest
     */
    select?: ClientEmailChangeRequestSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientEmailChangeRequestInclude | null
  }



  /**
   * Model ClientPushToken
   */


  export type AggregateClientPushToken = {
    _count: ClientPushTokenCountAggregateOutputType | null
    _min: ClientPushTokenMinAggregateOutputType | null
    _max: ClientPushTokenMaxAggregateOutputType | null
  }

  export type ClientPushTokenMinAggregateOutputType = {
    token: string | null
    clientId: string | null
  }

  export type ClientPushTokenMaxAggregateOutputType = {
    token: string | null
    clientId: string | null
  }

  export type ClientPushTokenCountAggregateOutputType = {
    token: number
    clientId: number
    _all: number
  }


  export type ClientPushTokenMinAggregateInputType = {
    token?: true
    clientId?: true
  }

  export type ClientPushTokenMaxAggregateInputType = {
    token?: true
    clientId?: true
  }

  export type ClientPushTokenCountAggregateInputType = {
    token?: true
    clientId?: true
    _all?: true
  }

  export type ClientPushTokenAggregateArgs = {
    /**
     * Filter which ClientPushToken to aggregate.
     */
    where?: ClientPushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPushTokens to fetch.
     */
    orderBy?: Enumerable<ClientPushTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientPushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientPushTokens
    **/
    _count?: true | ClientPushTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientPushTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientPushTokenMaxAggregateInputType
  }

  export type GetClientPushTokenAggregateType<T extends ClientPushTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateClientPushToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientPushToken[P]>
      : GetScalarType<T[P], AggregateClientPushToken[P]>
  }




  export type ClientPushTokenGroupByArgs = {
    where?: ClientPushTokenWhereInput
    orderBy?: Enumerable<ClientPushTokenOrderByWithAggregationInput>
    by: ClientPushTokenScalarFieldEnum[]
    having?: ClientPushTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientPushTokenCountAggregateInputType | true
    _min?: ClientPushTokenMinAggregateInputType
    _max?: ClientPushTokenMaxAggregateInputType
  }


  export type ClientPushTokenGroupByOutputType = {
    token: string
    clientId: string
    _count: ClientPushTokenCountAggregateOutputType | null
    _min: ClientPushTokenMinAggregateOutputType | null
    _max: ClientPushTokenMaxAggregateOutputType | null
  }

  type GetClientPushTokenGroupByPayload<T extends ClientPushTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientPushTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientPushTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientPushTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ClientPushTokenGroupByOutputType[P]>
        }
      >
    >


  export type ClientPushTokenSelect = {
    token?: boolean
    client?: boolean | ClientArgs
    clientId?: boolean
  }


  export type ClientPushTokenInclude = {
    client?: boolean | ClientArgs
  }

  export type ClientPushTokenGetPayload<S extends boolean | null | undefined | ClientPushTokenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ClientPushToken :
    S extends undefined ? never :
    S extends { include: any } & (ClientPushTokenArgs | ClientPushTokenFindManyArgs)
    ? ClientPushToken  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'client' ? ClientGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ClientPushTokenArgs | ClientPushTokenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'client' ? ClientGetPayload<S['select'][P]> :  P extends keyof ClientPushToken ? ClientPushToken[P] : never
  } 
      : ClientPushToken


  type ClientPushTokenCountArgs = 
    Omit<ClientPushTokenFindManyArgs, 'select' | 'include'> & {
      select?: ClientPushTokenCountAggregateInputType | true
    }

  export interface ClientPushTokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ClientPushToken that matches the filter.
     * @param {ClientPushTokenFindUniqueArgs} args - Arguments to find a ClientPushToken
     * @example
     * // Get one ClientPushToken
     * const clientPushToken = await prisma.clientPushToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientPushTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientPushTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClientPushToken'> extends True ? Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>> : Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T> | null, null>

    /**
     * Find one ClientPushToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientPushTokenFindUniqueOrThrowArgs} args - Arguments to find a ClientPushToken
     * @example
     * // Get one ClientPushToken
     * const clientPushToken = await prisma.clientPushToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientPushTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ClientPushTokenFindUniqueOrThrowArgs>
    ): Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>>

    /**
     * Find the first ClientPushToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPushTokenFindFirstArgs} args - Arguments to find a ClientPushToken
     * @example
     * // Get one ClientPushToken
     * const clientPushToken = await prisma.clientPushToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientPushTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientPushTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClientPushToken'> extends True ? Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>> : Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T> | null, null>

    /**
     * Find the first ClientPushToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPushTokenFindFirstOrThrowArgs} args - Arguments to find a ClientPushToken
     * @example
     * // Get one ClientPushToken
     * const clientPushToken = await prisma.clientPushToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientPushTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ClientPushTokenFindFirstOrThrowArgs>
    ): Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>>

    /**
     * Find zero or more ClientPushTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPushTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientPushTokens
     * const clientPushTokens = await prisma.clientPushToken.findMany()
     * 
     * // Get first 10 ClientPushTokens
     * const clientPushTokens = await prisma.clientPushToken.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const clientPushTokenWithTokenOnly = await prisma.clientPushToken.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends ClientPushTokenFindManyArgs>(
      args?: SelectSubset<T, ClientPushTokenFindManyArgs>
    ): PrismaPromise<Array<ClientPushTokenGetPayload<T>>>

    /**
     * Create a ClientPushToken.
     * @param {ClientPushTokenCreateArgs} args - Arguments to create a ClientPushToken.
     * @example
     * // Create one ClientPushToken
     * const ClientPushToken = await prisma.clientPushToken.create({
     *   data: {
     *     // ... data to create a ClientPushToken
     *   }
     * })
     * 
    **/
    create<T extends ClientPushTokenCreateArgs>(
      args: SelectSubset<T, ClientPushTokenCreateArgs>
    ): Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>>

    /**
     * Create many ClientPushTokens.
     *     @param {ClientPushTokenCreateManyArgs} args - Arguments to create many ClientPushTokens.
     *     @example
     *     // Create many ClientPushTokens
     *     const clientPushToken = await prisma.clientPushToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientPushTokenCreateManyArgs>(
      args?: SelectSubset<T, ClientPushTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClientPushToken.
     * @param {ClientPushTokenDeleteArgs} args - Arguments to delete one ClientPushToken.
     * @example
     * // Delete one ClientPushToken
     * const ClientPushToken = await prisma.clientPushToken.delete({
     *   where: {
     *     // ... filter to delete one ClientPushToken
     *   }
     * })
     * 
    **/
    delete<T extends ClientPushTokenDeleteArgs>(
      args: SelectSubset<T, ClientPushTokenDeleteArgs>
    ): Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>>

    /**
     * Update one ClientPushToken.
     * @param {ClientPushTokenUpdateArgs} args - Arguments to update one ClientPushToken.
     * @example
     * // Update one ClientPushToken
     * const clientPushToken = await prisma.clientPushToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientPushTokenUpdateArgs>(
      args: SelectSubset<T, ClientPushTokenUpdateArgs>
    ): Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>>

    /**
     * Delete zero or more ClientPushTokens.
     * @param {ClientPushTokenDeleteManyArgs} args - Arguments to filter ClientPushTokens to delete.
     * @example
     * // Delete a few ClientPushTokens
     * const { count } = await prisma.clientPushToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientPushTokenDeleteManyArgs>(
      args?: SelectSubset<T, ClientPushTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientPushTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPushTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientPushTokens
     * const clientPushToken = await prisma.clientPushToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientPushTokenUpdateManyArgs>(
      args: SelectSubset<T, ClientPushTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientPushToken.
     * @param {ClientPushTokenUpsertArgs} args - Arguments to update or create a ClientPushToken.
     * @example
     * // Update or create a ClientPushToken
     * const clientPushToken = await prisma.clientPushToken.upsert({
     *   create: {
     *     // ... data to create a ClientPushToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientPushToken we want to update
     *   }
     * })
    **/
    upsert<T extends ClientPushTokenUpsertArgs>(
      args: SelectSubset<T, ClientPushTokenUpsertArgs>
    ): Prisma__ClientPushTokenClient<ClientPushTokenGetPayload<T>>

    /**
     * Count the number of ClientPushTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPushTokenCountArgs} args - Arguments to filter ClientPushTokens to count.
     * @example
     * // Count the number of ClientPushTokens
     * const count = await prisma.clientPushToken.count({
     *   where: {
     *     // ... the filter for the ClientPushTokens we want to count
     *   }
     * })
    **/
    count<T extends ClientPushTokenCountArgs>(
      args?: Subset<T, ClientPushTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientPushTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientPushToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPushTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientPushTokenAggregateArgs>(args: Subset<T, ClientPushTokenAggregateArgs>): PrismaPromise<GetClientPushTokenAggregateType<T>>

    /**
     * Group by ClientPushToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPushTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientPushTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientPushTokenGroupByArgs['orderBy'] }
        : { orderBy?: ClientPushTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientPushTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientPushTokenGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientPushToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientPushTokenClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    client<T extends ClientArgs= {}>(args?: Subset<T, ClientArgs>): Prisma__ClientClient<ClientGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ClientPushToken base type for findUnique actions
   */
  export type ClientPushTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * Filter, which ClientPushToken to fetch.
     */
    where: ClientPushTokenWhereUniqueInput
  }

  /**
   * ClientPushToken findUnique
   */
  export interface ClientPushTokenFindUniqueArgs extends ClientPushTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientPushToken findUniqueOrThrow
   */
  export type ClientPushTokenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * Filter, which ClientPushToken to fetch.
     */
    where: ClientPushTokenWhereUniqueInput
  }


  /**
   * ClientPushToken base type for findFirst actions
   */
  export type ClientPushTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * Filter, which ClientPushToken to fetch.
     */
    where?: ClientPushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPushTokens to fetch.
     */
    orderBy?: Enumerable<ClientPushTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPushTokens.
     */
    cursor?: ClientPushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPushTokens.
     */
    distinct?: Enumerable<ClientPushTokenScalarFieldEnum>
  }

  /**
   * ClientPushToken findFirst
   */
  export interface ClientPushTokenFindFirstArgs extends ClientPushTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ClientPushToken findFirstOrThrow
   */
  export type ClientPushTokenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * Filter, which ClientPushToken to fetch.
     */
    where?: ClientPushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPushTokens to fetch.
     */
    orderBy?: Enumerable<ClientPushTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPushTokens.
     */
    cursor?: ClientPushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPushTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPushTokens.
     */
    distinct?: Enumerable<ClientPushTokenScalarFieldEnum>
  }


  /**
   * ClientPushToken findMany
   */
  export type ClientPushTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * Filter, which ClientPushTokens to fetch.
     */
    where?: ClientPushTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPushTokens to fetch.
     */
    orderBy?: Enumerable<ClientPushTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientPushTokens.
     */
    cursor?: ClientPushTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPushTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPushTokens.
     */
    skip?: number
    distinct?: Enumerable<ClientPushTokenScalarFieldEnum>
  }


  /**
   * ClientPushToken create
   */
  export type ClientPushTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * The data needed to create a ClientPushToken.
     */
    data: XOR<ClientPushTokenCreateInput, ClientPushTokenUncheckedCreateInput>
  }


  /**
   * ClientPushToken createMany
   */
  export type ClientPushTokenCreateManyArgs = {
    /**
     * The data used to create many ClientPushTokens.
     */
    data: Enumerable<ClientPushTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClientPushToken update
   */
  export type ClientPushTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * The data needed to update a ClientPushToken.
     */
    data: XOR<ClientPushTokenUpdateInput, ClientPushTokenUncheckedUpdateInput>
    /**
     * Choose, which ClientPushToken to update.
     */
    where: ClientPushTokenWhereUniqueInput
  }


  /**
   * ClientPushToken updateMany
   */
  export type ClientPushTokenUpdateManyArgs = {
    /**
     * The data used to update ClientPushTokens.
     */
    data: XOR<ClientPushTokenUpdateManyMutationInput, ClientPushTokenUncheckedUpdateManyInput>
    /**
     * Filter which ClientPushTokens to update
     */
    where?: ClientPushTokenWhereInput
  }


  /**
   * ClientPushToken upsert
   */
  export type ClientPushTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * The filter to search for the ClientPushToken to update in case it exists.
     */
    where: ClientPushTokenWhereUniqueInput
    /**
     * In case the ClientPushToken found by the `where` argument doesn't exist, create a new ClientPushToken with this data.
     */
    create: XOR<ClientPushTokenCreateInput, ClientPushTokenUncheckedCreateInput>
    /**
     * In case the ClientPushToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientPushTokenUpdateInput, ClientPushTokenUncheckedUpdateInput>
  }


  /**
   * ClientPushToken delete
   */
  export type ClientPushTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
    /**
     * Filter which ClientPushToken to delete.
     */
    where: ClientPushTokenWhereUniqueInput
  }


  /**
   * ClientPushToken deleteMany
   */
  export type ClientPushTokenDeleteManyArgs = {
    /**
     * Filter which ClientPushTokens to delete
     */
    where?: ClientPushTokenWhereInput
  }


  /**
   * ClientPushToken without action
   */
  export type ClientPushTokenArgs = {
    /**
     * Select specific fields to fetch from the ClientPushToken
     */
    select?: ClientPushTokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientPushTokenInclude | null
  }



  /**
   * Model ContractWithdrawRequest
   */


  export type AggregateContractWithdrawRequest = {
    _count: ContractWithdrawRequestCountAggregateOutputType | null
    _avg: ContractWithdrawRequestAvgAggregateOutputType | null
    _sum: ContractWithdrawRequestSumAggregateOutputType | null
    _min: ContractWithdrawRequestMinAggregateOutputType | null
    _max: ContractWithdrawRequestMaxAggregateOutputType | null
  }

  export type ContractWithdrawRequestAvgAggregateOutputType = {
    value: Decimal | null
  }

  export type ContractWithdrawRequestSumAggregateOutputType = {
    value: Decimal | null
  }

  export type ContractWithdrawRequestMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    contractId: string | null
    value: Decimal | null
    status: ContractWithdrawRequestStatus | null
  }

  export type ContractWithdrawRequestMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    contractId: string | null
    value: Decimal | null
    status: ContractWithdrawRequestStatus | null
  }

  export type ContractWithdrawRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    contractId: number
    value: number
    status: number
    _all: number
  }


  export type ContractWithdrawRequestAvgAggregateInputType = {
    value?: true
  }

  export type ContractWithdrawRequestSumAggregateInputType = {
    value?: true
  }

  export type ContractWithdrawRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    contractId?: true
    value?: true
    status?: true
  }

  export type ContractWithdrawRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    contractId?: true
    value?: true
    status?: true
  }

  export type ContractWithdrawRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    contractId?: true
    value?: true
    status?: true
    _all?: true
  }

  export type ContractWithdrawRequestAggregateArgs = {
    /**
     * Filter which ContractWithdrawRequest to aggregate.
     */
    where?: ContractWithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractWithdrawRequests to fetch.
     */
    orderBy?: Enumerable<ContractWithdrawRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractWithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractWithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContractWithdrawRequests
    **/
    _count?: true | ContractWithdrawRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractWithdrawRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractWithdrawRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractWithdrawRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractWithdrawRequestMaxAggregateInputType
  }

  export type GetContractWithdrawRequestAggregateType<T extends ContractWithdrawRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateContractWithdrawRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractWithdrawRequest[P]>
      : GetScalarType<T[P], AggregateContractWithdrawRequest[P]>
  }




  export type ContractWithdrawRequestGroupByArgs = {
    where?: ContractWithdrawRequestWhereInput
    orderBy?: Enumerable<ContractWithdrawRequestOrderByWithAggregationInput>
    by: ContractWithdrawRequestScalarFieldEnum[]
    having?: ContractWithdrawRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractWithdrawRequestCountAggregateInputType | true
    _avg?: ContractWithdrawRequestAvgAggregateInputType
    _sum?: ContractWithdrawRequestSumAggregateInputType
    _min?: ContractWithdrawRequestMinAggregateInputType
    _max?: ContractWithdrawRequestMaxAggregateInputType
  }


  export type ContractWithdrawRequestGroupByOutputType = {
    id: string
    createdAt: Date
    contractId: string
    value: Decimal
    status: ContractWithdrawRequestStatus
    _count: ContractWithdrawRequestCountAggregateOutputType | null
    _avg: ContractWithdrawRequestAvgAggregateOutputType | null
    _sum: ContractWithdrawRequestSumAggregateOutputType | null
    _min: ContractWithdrawRequestMinAggregateOutputType | null
    _max: ContractWithdrawRequestMaxAggregateOutputType | null
  }

  type GetContractWithdrawRequestGroupByPayload<T extends ContractWithdrawRequestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ContractWithdrawRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractWithdrawRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractWithdrawRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ContractWithdrawRequestGroupByOutputType[P]>
        }
      >
    >


  export type ContractWithdrawRequestSelect = {
    id?: boolean
    createdAt?: boolean
    contractId?: boolean
    value?: boolean
    status?: boolean
  }


  export type ContractWithdrawRequestGetPayload<S extends boolean | null | undefined | ContractWithdrawRequestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ContractWithdrawRequest :
    S extends undefined ? never :
    S extends { include: any } & (ContractWithdrawRequestArgs | ContractWithdrawRequestFindManyArgs)
    ? ContractWithdrawRequest 
    : S extends { select: any } & (ContractWithdrawRequestArgs | ContractWithdrawRequestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ContractWithdrawRequest ? ContractWithdrawRequest[P] : never
  } 
      : ContractWithdrawRequest


  type ContractWithdrawRequestCountArgs = 
    Omit<ContractWithdrawRequestFindManyArgs, 'select' | 'include'> & {
      select?: ContractWithdrawRequestCountAggregateInputType | true
    }

  export interface ContractWithdrawRequestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ContractWithdrawRequest that matches the filter.
     * @param {ContractWithdrawRequestFindUniqueArgs} args - Arguments to find a ContractWithdrawRequest
     * @example
     * // Get one ContractWithdrawRequest
     * const contractWithdrawRequest = await prisma.contractWithdrawRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractWithdrawRequestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContractWithdrawRequestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ContractWithdrawRequest'> extends True ? Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>> : Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T> | null, null>

    /**
     * Find one ContractWithdrawRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractWithdrawRequestFindUniqueOrThrowArgs} args - Arguments to find a ContractWithdrawRequest
     * @example
     * // Get one ContractWithdrawRequest
     * const contractWithdrawRequest = await prisma.contractWithdrawRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractWithdrawRequestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContractWithdrawRequestFindUniqueOrThrowArgs>
    ): Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>>

    /**
     * Find the first ContractWithdrawRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractWithdrawRequestFindFirstArgs} args - Arguments to find a ContractWithdrawRequest
     * @example
     * // Get one ContractWithdrawRequest
     * const contractWithdrawRequest = await prisma.contractWithdrawRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractWithdrawRequestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContractWithdrawRequestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ContractWithdrawRequest'> extends True ? Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>> : Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T> | null, null>

    /**
     * Find the first ContractWithdrawRequest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractWithdrawRequestFindFirstOrThrowArgs} args - Arguments to find a ContractWithdrawRequest
     * @example
     * // Get one ContractWithdrawRequest
     * const contractWithdrawRequest = await prisma.contractWithdrawRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractWithdrawRequestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContractWithdrawRequestFindFirstOrThrowArgs>
    ): Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>>

    /**
     * Find zero or more ContractWithdrawRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractWithdrawRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractWithdrawRequests
     * const contractWithdrawRequests = await prisma.contractWithdrawRequest.findMany()
     * 
     * // Get first 10 ContractWithdrawRequests
     * const contractWithdrawRequests = await prisma.contractWithdrawRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithdrawRequestWithIdOnly = await prisma.contractWithdrawRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractWithdrawRequestFindManyArgs>(
      args?: SelectSubset<T, ContractWithdrawRequestFindManyArgs>
    ): PrismaPromise<Array<ContractWithdrawRequestGetPayload<T>>>

    /**
     * Create a ContractWithdrawRequest.
     * @param {ContractWithdrawRequestCreateArgs} args - Arguments to create a ContractWithdrawRequest.
     * @example
     * // Create one ContractWithdrawRequest
     * const ContractWithdrawRequest = await prisma.contractWithdrawRequest.create({
     *   data: {
     *     // ... data to create a ContractWithdrawRequest
     *   }
     * })
     * 
    **/
    create<T extends ContractWithdrawRequestCreateArgs>(
      args: SelectSubset<T, ContractWithdrawRequestCreateArgs>
    ): Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>>

    /**
     * Create many ContractWithdrawRequests.
     *     @param {ContractWithdrawRequestCreateManyArgs} args - Arguments to create many ContractWithdrawRequests.
     *     @example
     *     // Create many ContractWithdrawRequests
     *     const contractWithdrawRequest = await prisma.contractWithdrawRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractWithdrawRequestCreateManyArgs>(
      args?: SelectSubset<T, ContractWithdrawRequestCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ContractWithdrawRequest.
     * @param {ContractWithdrawRequestDeleteArgs} args - Arguments to delete one ContractWithdrawRequest.
     * @example
     * // Delete one ContractWithdrawRequest
     * const ContractWithdrawRequest = await prisma.contractWithdrawRequest.delete({
     *   where: {
     *     // ... filter to delete one ContractWithdrawRequest
     *   }
     * })
     * 
    **/
    delete<T extends ContractWithdrawRequestDeleteArgs>(
      args: SelectSubset<T, ContractWithdrawRequestDeleteArgs>
    ): Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>>

    /**
     * Update one ContractWithdrawRequest.
     * @param {ContractWithdrawRequestUpdateArgs} args - Arguments to update one ContractWithdrawRequest.
     * @example
     * // Update one ContractWithdrawRequest
     * const contractWithdrawRequest = await prisma.contractWithdrawRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractWithdrawRequestUpdateArgs>(
      args: SelectSubset<T, ContractWithdrawRequestUpdateArgs>
    ): Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>>

    /**
     * Delete zero or more ContractWithdrawRequests.
     * @param {ContractWithdrawRequestDeleteManyArgs} args - Arguments to filter ContractWithdrawRequests to delete.
     * @example
     * // Delete a few ContractWithdrawRequests
     * const { count } = await prisma.contractWithdrawRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractWithdrawRequestDeleteManyArgs>(
      args?: SelectSubset<T, ContractWithdrawRequestDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractWithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractWithdrawRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractWithdrawRequests
     * const contractWithdrawRequest = await prisma.contractWithdrawRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractWithdrawRequestUpdateManyArgs>(
      args: SelectSubset<T, ContractWithdrawRequestUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ContractWithdrawRequest.
     * @param {ContractWithdrawRequestUpsertArgs} args - Arguments to update or create a ContractWithdrawRequest.
     * @example
     * // Update or create a ContractWithdrawRequest
     * const contractWithdrawRequest = await prisma.contractWithdrawRequest.upsert({
     *   create: {
     *     // ... data to create a ContractWithdrawRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractWithdrawRequest we want to update
     *   }
     * })
    **/
    upsert<T extends ContractWithdrawRequestUpsertArgs>(
      args: SelectSubset<T, ContractWithdrawRequestUpsertArgs>
    ): Prisma__ContractWithdrawRequestClient<ContractWithdrawRequestGetPayload<T>>

    /**
     * Count the number of ContractWithdrawRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractWithdrawRequestCountArgs} args - Arguments to filter ContractWithdrawRequests to count.
     * @example
     * // Count the number of ContractWithdrawRequests
     * const count = await prisma.contractWithdrawRequest.count({
     *   where: {
     *     // ... the filter for the ContractWithdrawRequests we want to count
     *   }
     * })
    **/
    count<T extends ContractWithdrawRequestCountArgs>(
      args?: Subset<T, ContractWithdrawRequestCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractWithdrawRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractWithdrawRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractWithdrawRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractWithdrawRequestAggregateArgs>(args: Subset<T, ContractWithdrawRequestAggregateArgs>): PrismaPromise<GetContractWithdrawRequestAggregateType<T>>

    /**
     * Group by ContractWithdrawRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractWithdrawRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractWithdrawRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractWithdrawRequestGroupByArgs['orderBy'] }
        : { orderBy?: ContractWithdrawRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractWithdrawRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractWithdrawRequestGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ContractWithdrawRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContractWithdrawRequestClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ContractWithdrawRequest base type for findUnique actions
   */
  export type ContractWithdrawRequestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * Filter, which ContractWithdrawRequest to fetch.
     */
    where: ContractWithdrawRequestWhereUniqueInput
  }

  /**
   * ContractWithdrawRequest findUnique
   */
  export interface ContractWithdrawRequestFindUniqueArgs extends ContractWithdrawRequestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ContractWithdrawRequest findUniqueOrThrow
   */
  export type ContractWithdrawRequestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * Filter, which ContractWithdrawRequest to fetch.
     */
    where: ContractWithdrawRequestWhereUniqueInput
  }


  /**
   * ContractWithdrawRequest base type for findFirst actions
   */
  export type ContractWithdrawRequestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * Filter, which ContractWithdrawRequest to fetch.
     */
    where?: ContractWithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractWithdrawRequests to fetch.
     */
    orderBy?: Enumerable<ContractWithdrawRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractWithdrawRequests.
     */
    cursor?: ContractWithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractWithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractWithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractWithdrawRequests.
     */
    distinct?: Enumerable<ContractWithdrawRequestScalarFieldEnum>
  }

  /**
   * ContractWithdrawRequest findFirst
   */
  export interface ContractWithdrawRequestFindFirstArgs extends ContractWithdrawRequestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ContractWithdrawRequest findFirstOrThrow
   */
  export type ContractWithdrawRequestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * Filter, which ContractWithdrawRequest to fetch.
     */
    where?: ContractWithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractWithdrawRequests to fetch.
     */
    orderBy?: Enumerable<ContractWithdrawRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContractWithdrawRequests.
     */
    cursor?: ContractWithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractWithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractWithdrawRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContractWithdrawRequests.
     */
    distinct?: Enumerable<ContractWithdrawRequestScalarFieldEnum>
  }


  /**
   * ContractWithdrawRequest findMany
   */
  export type ContractWithdrawRequestFindManyArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * Filter, which ContractWithdrawRequests to fetch.
     */
    where?: ContractWithdrawRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContractWithdrawRequests to fetch.
     */
    orderBy?: Enumerable<ContractWithdrawRequestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContractWithdrawRequests.
     */
    cursor?: ContractWithdrawRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContractWithdrawRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContractWithdrawRequests.
     */
    skip?: number
    distinct?: Enumerable<ContractWithdrawRequestScalarFieldEnum>
  }


  /**
   * ContractWithdrawRequest create
   */
  export type ContractWithdrawRequestCreateArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * The data needed to create a ContractWithdrawRequest.
     */
    data: XOR<ContractWithdrawRequestCreateInput, ContractWithdrawRequestUncheckedCreateInput>
  }


  /**
   * ContractWithdrawRequest createMany
   */
  export type ContractWithdrawRequestCreateManyArgs = {
    /**
     * The data used to create many ContractWithdrawRequests.
     */
    data: Enumerable<ContractWithdrawRequestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ContractWithdrawRequest update
   */
  export type ContractWithdrawRequestUpdateArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * The data needed to update a ContractWithdrawRequest.
     */
    data: XOR<ContractWithdrawRequestUpdateInput, ContractWithdrawRequestUncheckedUpdateInput>
    /**
     * Choose, which ContractWithdrawRequest to update.
     */
    where: ContractWithdrawRequestWhereUniqueInput
  }


  /**
   * ContractWithdrawRequest updateMany
   */
  export type ContractWithdrawRequestUpdateManyArgs = {
    /**
     * The data used to update ContractWithdrawRequests.
     */
    data: XOR<ContractWithdrawRequestUpdateManyMutationInput, ContractWithdrawRequestUncheckedUpdateManyInput>
    /**
     * Filter which ContractWithdrawRequests to update
     */
    where?: ContractWithdrawRequestWhereInput
  }


  /**
   * ContractWithdrawRequest upsert
   */
  export type ContractWithdrawRequestUpsertArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * The filter to search for the ContractWithdrawRequest to update in case it exists.
     */
    where: ContractWithdrawRequestWhereUniqueInput
    /**
     * In case the ContractWithdrawRequest found by the `where` argument doesn't exist, create a new ContractWithdrawRequest with this data.
     */
    create: XOR<ContractWithdrawRequestCreateInput, ContractWithdrawRequestUncheckedCreateInput>
    /**
     * In case the ContractWithdrawRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractWithdrawRequestUpdateInput, ContractWithdrawRequestUncheckedUpdateInput>
  }


  /**
   * ContractWithdrawRequest delete
   */
  export type ContractWithdrawRequestDeleteArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
    /**
     * Filter which ContractWithdrawRequest to delete.
     */
    where: ContractWithdrawRequestWhereUniqueInput
  }


  /**
   * ContractWithdrawRequest deleteMany
   */
  export type ContractWithdrawRequestDeleteManyArgs = {
    /**
     * Filter which ContractWithdrawRequests to delete
     */
    where?: ContractWithdrawRequestWhereInput
  }


  /**
   * ContractWithdrawRequest without action
   */
  export type ContractWithdrawRequestArgs = {
    /**
     * Select specific fields to fetch from the ContractWithdrawRequest
     */
    select?: ContractWithdrawRequestSelect | null
  }



  /**
   * Model Notification
   */


  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: NotificationType | null
    title: string | null
    body: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: NotificationType | null
    title: string | null
    body: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    title: number
    body: number
    createdAt: number
    payload: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    body?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    body?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    body?: true
    createdAt?: true
    payload?: true
    _all?: true
  }

  export type NotificationAggregateArgs = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs = {
    where?: NotificationWhereInput
    orderBy?: Enumerable<NotificationOrderByWithAggregationInput>
    by: NotificationScalarFieldEnum[]
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }


  export type NotificationGroupByOutputType = {
    id: string
    type: NotificationType
    title: string
    body: string
    createdAt: Date
    payload: JsonValue | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect = {
    id?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    payload?: boolean
    clients?: boolean | Notification$clientsArgs
    _count?: boolean | NotificationCountOutputTypeArgs
  }


  export type NotificationInclude = {
    clients?: boolean | Notification$clientsArgs
    _count?: boolean | NotificationCountOutputTypeArgs
  }

  export type NotificationGetPayload<S extends boolean | null | undefined | NotificationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Notification :
    S extends undefined ? never :
    S extends { include: any } & (NotificationArgs | NotificationFindManyArgs)
    ? Notification  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'clients' ? Array < NotificationsClientsGetPayload<S['include'][P]>>  :
        P extends '_count' ? NotificationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NotificationArgs | NotificationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'clients' ? Array < NotificationsClientsGetPayload<S['select'][P]>>  :
        P extends '_count' ? NotificationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Notification ? Notification[P] : never
  } 
      : Notification


  type NotificationCountArgs = 
    Omit<NotificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notification'> extends True ? Prisma__NotificationClient<NotificationGetPayload<T>> : Prisma__NotificationClient<NotificationGetPayload<T> | null, null>

    /**
     * Find the first Notification that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs>(
      args?: SelectSubset<T, NotificationFindManyArgs>
    ): PrismaPromise<Array<NotificationGetPayload<T>>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs>(
      args: SelectSubset<T, NotificationCreateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs>(
      args?: SelectSubset<T, NotificationCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs>(
      args: SelectSubset<T, NotificationDeleteArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs>(
      args: SelectSubset<T, NotificationUpdateArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs>(
      args?: SelectSubset<T, NotificationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs>(
      args: SelectSubset<T, NotificationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs>(
      args: SelectSubset<T, NotificationUpsertArgs>
    ): Prisma__NotificationClient<NotificationGetPayload<T>>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    clients<T extends Notification$clientsArgs= {}>(args?: Subset<T, Notification$clientsArgs>): PrismaPromise<Array<NotificationsClientsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Notification base type for findUnique actions
   */
  export type NotificationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUnique
   */
  export interface NotificationFindUniqueArgs extends NotificationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification base type for findFirst actions
   */
  export type NotificationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }

  /**
   * Notification findFirst
   */
  export interface NotificationFindFirstArgs extends NotificationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Enumerable<NotificationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: Enumerable<NotificationScalarFieldEnum>
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs = {
    /**
     * The data used to create many Notifications.
     */
    data: Enumerable<NotificationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification.clients
   */
  export type Notification$clientsArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    where?: NotificationsClientsWhereInput
    orderBy?: Enumerable<NotificationsClientsOrderByWithRelationInput>
    cursor?: NotificationsClientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NotificationsClientsScalarFieldEnum>
  }


  /**
   * Notification without action
   */
  export type NotificationArgs = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude | null
  }



  /**
   * Model NotificationsClients
   */


  export type AggregateNotificationsClients = {
    _count: NotificationsClientsCountAggregateOutputType | null
    _min: NotificationsClientsMinAggregateOutputType | null
    _max: NotificationsClientsMaxAggregateOutputType | null
  }

  export type NotificationsClientsMinAggregateOutputType = {
    isViewed: boolean | null
    notificationId: string | null
    clientId: string | null
  }

  export type NotificationsClientsMaxAggregateOutputType = {
    isViewed: boolean | null
    notificationId: string | null
    clientId: string | null
  }

  export type NotificationsClientsCountAggregateOutputType = {
    isViewed: number
    notificationId: number
    clientId: number
    _all: number
  }


  export type NotificationsClientsMinAggregateInputType = {
    isViewed?: true
    notificationId?: true
    clientId?: true
  }

  export type NotificationsClientsMaxAggregateInputType = {
    isViewed?: true
    notificationId?: true
    clientId?: true
  }

  export type NotificationsClientsCountAggregateInputType = {
    isViewed?: true
    notificationId?: true
    clientId?: true
    _all?: true
  }

  export type NotificationsClientsAggregateArgs = {
    /**
     * Filter which NotificationsClients to aggregate.
     */
    where?: NotificationsClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsClients to fetch.
     */
    orderBy?: Enumerable<NotificationsClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationsClients
    **/
    _count?: true | NotificationsClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsClientsMaxAggregateInputType
  }

  export type GetNotificationsClientsAggregateType<T extends NotificationsClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationsClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationsClients[P]>
      : GetScalarType<T[P], AggregateNotificationsClients[P]>
  }




  export type NotificationsClientsGroupByArgs = {
    where?: NotificationsClientsWhereInput
    orderBy?: Enumerable<NotificationsClientsOrderByWithAggregationInput>
    by: NotificationsClientsScalarFieldEnum[]
    having?: NotificationsClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsClientsCountAggregateInputType | true
    _min?: NotificationsClientsMinAggregateInputType
    _max?: NotificationsClientsMaxAggregateInputType
  }


  export type NotificationsClientsGroupByOutputType = {
    isViewed: boolean
    notificationId: string
    clientId: string
    _count: NotificationsClientsCountAggregateOutputType | null
    _min: NotificationsClientsMinAggregateOutputType | null
    _max: NotificationsClientsMaxAggregateOutputType | null
  }

  type GetNotificationsClientsGroupByPayload<T extends NotificationsClientsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NotificationsClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsClientsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsClientsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsClientsSelect = {
    isViewed?: boolean
    notification?: boolean | NotificationArgs
    notificationId?: boolean
    client?: boolean | ClientArgs
    clientId?: boolean
  }


  export type NotificationsClientsInclude = {
    notification?: boolean | NotificationArgs
    client?: boolean | ClientArgs
  }

  export type NotificationsClientsGetPayload<S extends boolean | null | undefined | NotificationsClientsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? NotificationsClients :
    S extends undefined ? never :
    S extends { include: any } & (NotificationsClientsArgs | NotificationsClientsFindManyArgs)
    ? NotificationsClients  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'notification' ? NotificationGetPayload<S['include'][P]> :
        P extends 'client' ? ClientGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (NotificationsClientsArgs | NotificationsClientsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'notification' ? NotificationGetPayload<S['select'][P]> :
        P extends 'client' ? ClientGetPayload<S['select'][P]> :  P extends keyof NotificationsClients ? NotificationsClients[P] : never
  } 
      : NotificationsClients


  type NotificationsClientsCountArgs = 
    Omit<NotificationsClientsFindManyArgs, 'select' | 'include'> & {
      select?: NotificationsClientsCountAggregateInputType | true
    }

  export interface NotificationsClientsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one NotificationsClients that matches the filter.
     * @param {NotificationsClientsFindUniqueArgs} args - Arguments to find a NotificationsClients
     * @example
     * // Get one NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationsClientsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NotificationsClientsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NotificationsClients'> extends True ? Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>> : Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T> | null, null>

    /**
     * Find one NotificationsClients that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationsClientsFindUniqueOrThrowArgs} args - Arguments to find a NotificationsClients
     * @example
     * // Get one NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationsClientsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, NotificationsClientsFindUniqueOrThrowArgs>
    ): Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>>

    /**
     * Find the first NotificationsClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsClientsFindFirstArgs} args - Arguments to find a NotificationsClients
     * @example
     * // Get one NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationsClientsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NotificationsClientsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NotificationsClients'> extends True ? Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>> : Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T> | null, null>

    /**
     * Find the first NotificationsClients that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsClientsFindFirstOrThrowArgs} args - Arguments to find a NotificationsClients
     * @example
     * // Get one NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationsClientsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, NotificationsClientsFindFirstOrThrowArgs>
    ): Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>>

    /**
     * Find zero or more NotificationsClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsClientsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.findMany()
     * 
     * // Get first 10 NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.findMany({ take: 10 })
     * 
     * // Only select the `isViewed`
     * const notificationsClientsWithIsViewedOnly = await prisma.notificationsClients.findMany({ select: { isViewed: true } })
     * 
    **/
    findMany<T extends NotificationsClientsFindManyArgs>(
      args?: SelectSubset<T, NotificationsClientsFindManyArgs>
    ): PrismaPromise<Array<NotificationsClientsGetPayload<T>>>

    /**
     * Create a NotificationsClients.
     * @param {NotificationsClientsCreateArgs} args - Arguments to create a NotificationsClients.
     * @example
     * // Create one NotificationsClients
     * const NotificationsClients = await prisma.notificationsClients.create({
     *   data: {
     *     // ... data to create a NotificationsClients
     *   }
     * })
     * 
    **/
    create<T extends NotificationsClientsCreateArgs>(
      args: SelectSubset<T, NotificationsClientsCreateArgs>
    ): Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>>

    /**
     * Create many NotificationsClients.
     *     @param {NotificationsClientsCreateManyArgs} args - Arguments to create many NotificationsClients.
     *     @example
     *     // Create many NotificationsClients
     *     const notificationsClients = await prisma.notificationsClients.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationsClientsCreateManyArgs>(
      args?: SelectSubset<T, NotificationsClientsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationsClients.
     * @param {NotificationsClientsDeleteArgs} args - Arguments to delete one NotificationsClients.
     * @example
     * // Delete one NotificationsClients
     * const NotificationsClients = await prisma.notificationsClients.delete({
     *   where: {
     *     // ... filter to delete one NotificationsClients
     *   }
     * })
     * 
    **/
    delete<T extends NotificationsClientsDeleteArgs>(
      args: SelectSubset<T, NotificationsClientsDeleteArgs>
    ): Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>>

    /**
     * Update one NotificationsClients.
     * @param {NotificationsClientsUpdateArgs} args - Arguments to update one NotificationsClients.
     * @example
     * // Update one NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationsClientsUpdateArgs>(
      args: SelectSubset<T, NotificationsClientsUpdateArgs>
    ): Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>>

    /**
     * Delete zero or more NotificationsClients.
     * @param {NotificationsClientsDeleteManyArgs} args - Arguments to filter NotificationsClients to delete.
     * @example
     * // Delete a few NotificationsClients
     * const { count } = await prisma.notificationsClients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationsClientsDeleteManyArgs>(
      args?: SelectSubset<T, NotificationsClientsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationsClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationsClientsUpdateManyArgs>(
      args: SelectSubset<T, NotificationsClientsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationsClients.
     * @param {NotificationsClientsUpsertArgs} args - Arguments to update or create a NotificationsClients.
     * @example
     * // Update or create a NotificationsClients
     * const notificationsClients = await prisma.notificationsClients.upsert({
     *   create: {
     *     // ... data to create a NotificationsClients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationsClients we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationsClientsUpsertArgs>(
      args: SelectSubset<T, NotificationsClientsUpsertArgs>
    ): Prisma__NotificationsClientsClient<NotificationsClientsGetPayload<T>>

    /**
     * Count the number of NotificationsClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsClientsCountArgs} args - Arguments to filter NotificationsClients to count.
     * @example
     * // Count the number of NotificationsClients
     * const count = await prisma.notificationsClients.count({
     *   where: {
     *     // ... the filter for the NotificationsClients we want to count
     *   }
     * })
    **/
    count<T extends NotificationsClientsCountArgs>(
      args?: Subset<T, NotificationsClientsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationsClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsClientsAggregateArgs>(args: Subset<T, NotificationsClientsAggregateArgs>): PrismaPromise<GetNotificationsClientsAggregateType<T>>

    /**
     * Group by NotificationsClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsClientsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsClientsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationsClients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NotificationsClientsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    notification<T extends NotificationArgs= {}>(args?: Subset<T, NotificationArgs>): Prisma__NotificationClient<NotificationGetPayload<T> | Null>;

    client<T extends ClientArgs= {}>(args?: Subset<T, ClientArgs>): Prisma__ClientClient<ClientGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * NotificationsClients base type for findUnique actions
   */
  export type NotificationsClientsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * Filter, which NotificationsClients to fetch.
     */
    where: NotificationsClientsWhereUniqueInput
  }

  /**
   * NotificationsClients findUnique
   */
  export interface NotificationsClientsFindUniqueArgs extends NotificationsClientsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NotificationsClients findUniqueOrThrow
   */
  export type NotificationsClientsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * Filter, which NotificationsClients to fetch.
     */
    where: NotificationsClientsWhereUniqueInput
  }


  /**
   * NotificationsClients base type for findFirst actions
   */
  export type NotificationsClientsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * Filter, which NotificationsClients to fetch.
     */
    where?: NotificationsClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsClients to fetch.
     */
    orderBy?: Enumerable<NotificationsClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationsClients.
     */
    cursor?: NotificationsClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationsClients.
     */
    distinct?: Enumerable<NotificationsClientsScalarFieldEnum>
  }

  /**
   * NotificationsClients findFirst
   */
  export interface NotificationsClientsFindFirstArgs extends NotificationsClientsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NotificationsClients findFirstOrThrow
   */
  export type NotificationsClientsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * Filter, which NotificationsClients to fetch.
     */
    where?: NotificationsClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsClients to fetch.
     */
    orderBy?: Enumerable<NotificationsClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationsClients.
     */
    cursor?: NotificationsClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationsClients.
     */
    distinct?: Enumerable<NotificationsClientsScalarFieldEnum>
  }


  /**
   * NotificationsClients findMany
   */
  export type NotificationsClientsFindManyArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * Filter, which NotificationsClients to fetch.
     */
    where?: NotificationsClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationsClients to fetch.
     */
    orderBy?: Enumerable<NotificationsClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationsClients.
     */
    cursor?: NotificationsClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationsClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationsClients.
     */
    skip?: number
    distinct?: Enumerable<NotificationsClientsScalarFieldEnum>
  }


  /**
   * NotificationsClients create
   */
  export type NotificationsClientsCreateArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * The data needed to create a NotificationsClients.
     */
    data: XOR<NotificationsClientsCreateInput, NotificationsClientsUncheckedCreateInput>
  }


  /**
   * NotificationsClients createMany
   */
  export type NotificationsClientsCreateManyArgs = {
    /**
     * The data used to create many NotificationsClients.
     */
    data: Enumerable<NotificationsClientsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NotificationsClients update
   */
  export type NotificationsClientsUpdateArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * The data needed to update a NotificationsClients.
     */
    data: XOR<NotificationsClientsUpdateInput, NotificationsClientsUncheckedUpdateInput>
    /**
     * Choose, which NotificationsClients to update.
     */
    where: NotificationsClientsWhereUniqueInput
  }


  /**
   * NotificationsClients updateMany
   */
  export type NotificationsClientsUpdateManyArgs = {
    /**
     * The data used to update NotificationsClients.
     */
    data: XOR<NotificationsClientsUpdateManyMutationInput, NotificationsClientsUncheckedUpdateManyInput>
    /**
     * Filter which NotificationsClients to update
     */
    where?: NotificationsClientsWhereInput
  }


  /**
   * NotificationsClients upsert
   */
  export type NotificationsClientsUpsertArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * The filter to search for the NotificationsClients to update in case it exists.
     */
    where: NotificationsClientsWhereUniqueInput
    /**
     * In case the NotificationsClients found by the `where` argument doesn't exist, create a new NotificationsClients with this data.
     */
    create: XOR<NotificationsClientsCreateInput, NotificationsClientsUncheckedCreateInput>
    /**
     * In case the NotificationsClients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsClientsUpdateInput, NotificationsClientsUncheckedUpdateInput>
  }


  /**
   * NotificationsClients delete
   */
  export type NotificationsClientsDeleteArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
    /**
     * Filter which NotificationsClients to delete.
     */
    where: NotificationsClientsWhereUniqueInput
  }


  /**
   * NotificationsClients deleteMany
   */
  export type NotificationsClientsDeleteManyArgs = {
    /**
     * Filter which NotificationsClients to delete
     */
    where?: NotificationsClientsWhereInput
  }


  /**
   * NotificationsClients without action
   */
  export type NotificationsClientsArgs = {
    /**
     * Select specific fields to fetch from the NotificationsClients
     */
    select?: NotificationsClientsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationsClientsInclude | null
  }



  /**
   * Model CustomerService
   */


  export type AggregateCustomerService = {
    _count: CustomerServiceCountAggregateOutputType | null
    _min: CustomerServiceMinAggregateOutputType | null
    _max: CustomerServiceMaxAggregateOutputType | null
  }

  export type CustomerServiceMinAggregateOutputType = {
    id: string | null
    tel: string | null
    email: string | null
    whatsapp: string | null
    address: string | null
  }

  export type CustomerServiceMaxAggregateOutputType = {
    id: string | null
    tel: string | null
    email: string | null
    whatsapp: string | null
    address: string | null
  }

  export type CustomerServiceCountAggregateOutputType = {
    id: number
    tel: number
    email: number
    whatsapp: number
    address: number
    _all: number
  }


  export type CustomerServiceMinAggregateInputType = {
    id?: true
    tel?: true
    email?: true
    whatsapp?: true
    address?: true
  }

  export type CustomerServiceMaxAggregateInputType = {
    id?: true
    tel?: true
    email?: true
    whatsapp?: true
    address?: true
  }

  export type CustomerServiceCountAggregateInputType = {
    id?: true
    tel?: true
    email?: true
    whatsapp?: true
    address?: true
    _all?: true
  }

  export type CustomerServiceAggregateArgs = {
    /**
     * Filter which CustomerService to aggregate.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: Enumerable<CustomerServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerServices
    **/
    _count?: true | CustomerServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerServiceMaxAggregateInputType
  }

  export type GetCustomerServiceAggregateType<T extends CustomerServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerService[P]>
      : GetScalarType<T[P], AggregateCustomerService[P]>
  }




  export type CustomerServiceGroupByArgs = {
    where?: CustomerServiceWhereInput
    orderBy?: Enumerable<CustomerServiceOrderByWithAggregationInput>
    by: CustomerServiceScalarFieldEnum[]
    having?: CustomerServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerServiceCountAggregateInputType | true
    _min?: CustomerServiceMinAggregateInputType
    _max?: CustomerServiceMaxAggregateInputType
  }


  export type CustomerServiceGroupByOutputType = {
    id: string
    tel: string
    email: string
    whatsapp: string
    address: string
    _count: CustomerServiceCountAggregateOutputType | null
    _min: CustomerServiceMinAggregateOutputType | null
    _max: CustomerServiceMaxAggregateOutputType | null
  }

  type GetCustomerServiceGroupByPayload<T extends CustomerServiceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CustomerServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerServiceGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerServiceGroupByOutputType[P]>
        }
      >
    >


  export type CustomerServiceSelect = {
    id?: boolean
    tel?: boolean
    email?: boolean
    whatsapp?: boolean
    address?: boolean
  }


  export type CustomerServiceGetPayload<S extends boolean | null | undefined | CustomerServiceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CustomerService :
    S extends undefined ? never :
    S extends { include: any } & (CustomerServiceArgs | CustomerServiceFindManyArgs)
    ? CustomerService 
    : S extends { select: any } & (CustomerServiceArgs | CustomerServiceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CustomerService ? CustomerService[P] : never
  } 
      : CustomerService


  type CustomerServiceCountArgs = 
    Omit<CustomerServiceFindManyArgs, 'select' | 'include'> & {
      select?: CustomerServiceCountAggregateInputType | true
    }

  export interface CustomerServiceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CustomerService that matches the filter.
     * @param {CustomerServiceFindUniqueArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerServiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CustomerServiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CustomerService'> extends True ? Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>> : Prisma__CustomerServiceClient<CustomerServiceGetPayload<T> | null, null>

    /**
     * Find one CustomerService that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerServiceFindUniqueOrThrowArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerServiceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CustomerServiceFindUniqueOrThrowArgs>
    ): Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>>

    /**
     * Find the first CustomerService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceFindFirstArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerServiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CustomerServiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CustomerService'> extends True ? Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>> : Prisma__CustomerServiceClient<CustomerServiceGetPayload<T> | null, null>

    /**
     * Find the first CustomerService that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceFindFirstOrThrowArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerServiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CustomerServiceFindFirstOrThrowArgs>
    ): Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>>

    /**
     * Find zero or more CustomerServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerServices
     * const customerServices = await prisma.customerService.findMany()
     * 
     * // Get first 10 CustomerServices
     * const customerServices = await prisma.customerService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerServiceWithIdOnly = await prisma.customerService.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerServiceFindManyArgs>(
      args?: SelectSubset<T, CustomerServiceFindManyArgs>
    ): PrismaPromise<Array<CustomerServiceGetPayload<T>>>

    /**
     * Create a CustomerService.
     * @param {CustomerServiceCreateArgs} args - Arguments to create a CustomerService.
     * @example
     * // Create one CustomerService
     * const CustomerService = await prisma.customerService.create({
     *   data: {
     *     // ... data to create a CustomerService
     *   }
     * })
     * 
    **/
    create<T extends CustomerServiceCreateArgs>(
      args: SelectSubset<T, CustomerServiceCreateArgs>
    ): Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>>

    /**
     * Create many CustomerServices.
     *     @param {CustomerServiceCreateManyArgs} args - Arguments to create many CustomerServices.
     *     @example
     *     // Create many CustomerServices
     *     const customerService = await prisma.customerService.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerServiceCreateManyArgs>(
      args?: SelectSubset<T, CustomerServiceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerService.
     * @param {CustomerServiceDeleteArgs} args - Arguments to delete one CustomerService.
     * @example
     * // Delete one CustomerService
     * const CustomerService = await prisma.customerService.delete({
     *   where: {
     *     // ... filter to delete one CustomerService
     *   }
     * })
     * 
    **/
    delete<T extends CustomerServiceDeleteArgs>(
      args: SelectSubset<T, CustomerServiceDeleteArgs>
    ): Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>>

    /**
     * Update one CustomerService.
     * @param {CustomerServiceUpdateArgs} args - Arguments to update one CustomerService.
     * @example
     * // Update one CustomerService
     * const customerService = await prisma.customerService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerServiceUpdateArgs>(
      args: SelectSubset<T, CustomerServiceUpdateArgs>
    ): Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>>

    /**
     * Delete zero or more CustomerServices.
     * @param {CustomerServiceDeleteManyArgs} args - Arguments to filter CustomerServices to delete.
     * @example
     * // Delete a few CustomerServices
     * const { count } = await prisma.customerService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerServiceDeleteManyArgs>(
      args?: SelectSubset<T, CustomerServiceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerServices
     * const customerService = await prisma.customerService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerServiceUpdateManyArgs>(
      args: SelectSubset<T, CustomerServiceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerService.
     * @param {CustomerServiceUpsertArgs} args - Arguments to update or create a CustomerService.
     * @example
     * // Update or create a CustomerService
     * const customerService = await prisma.customerService.upsert({
     *   create: {
     *     // ... data to create a CustomerService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerService we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerServiceUpsertArgs>(
      args: SelectSubset<T, CustomerServiceUpsertArgs>
    ): Prisma__CustomerServiceClient<CustomerServiceGetPayload<T>>

    /**
     * Count the number of CustomerServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceCountArgs} args - Arguments to filter CustomerServices to count.
     * @example
     * // Count the number of CustomerServices
     * const count = await prisma.customerService.count({
     *   where: {
     *     // ... the filter for the CustomerServices we want to count
     *   }
     * })
    **/
    count<T extends CustomerServiceCountArgs>(
      args?: Subset<T, CustomerServiceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerServiceAggregateArgs>(args: Subset<T, CustomerServiceAggregateArgs>): PrismaPromise<GetCustomerServiceAggregateType<T>>

    /**
     * Group by CustomerService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerServiceGroupByArgs['orderBy'] }
        : { orderBy?: CustomerServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerServiceGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CustomerServiceClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * CustomerService base type for findUnique actions
   */
  export type CustomerServiceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where: CustomerServiceWhereUniqueInput
  }

  /**
   * CustomerService findUnique
   */
  export interface CustomerServiceFindUniqueArgs extends CustomerServiceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomerService findUniqueOrThrow
   */
  export type CustomerServiceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where: CustomerServiceWhereUniqueInput
  }


  /**
   * CustomerService base type for findFirst actions
   */
  export type CustomerServiceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: Enumerable<CustomerServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerServices.
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerServices.
     */
    distinct?: Enumerable<CustomerServiceScalarFieldEnum>
  }

  /**
   * CustomerService findFirst
   */
  export interface CustomerServiceFindFirstArgs extends CustomerServiceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CustomerService findFirstOrThrow
   */
  export type CustomerServiceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: Enumerable<CustomerServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerServices.
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerServices.
     */
    distinct?: Enumerable<CustomerServiceScalarFieldEnum>
  }


  /**
   * CustomerService findMany
   */
  export type CustomerServiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * Filter, which CustomerServices to fetch.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: Enumerable<CustomerServiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerServices.
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    distinct?: Enumerable<CustomerServiceScalarFieldEnum>
  }


  /**
   * CustomerService create
   */
  export type CustomerServiceCreateArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * The data needed to create a CustomerService.
     */
    data: XOR<CustomerServiceCreateInput, CustomerServiceUncheckedCreateInput>
  }


  /**
   * CustomerService createMany
   */
  export type CustomerServiceCreateManyArgs = {
    /**
     * The data used to create many CustomerServices.
     */
    data: Enumerable<CustomerServiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CustomerService update
   */
  export type CustomerServiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * The data needed to update a CustomerService.
     */
    data: XOR<CustomerServiceUpdateInput, CustomerServiceUncheckedUpdateInput>
    /**
     * Choose, which CustomerService to update.
     */
    where: CustomerServiceWhereUniqueInput
  }


  /**
   * CustomerService updateMany
   */
  export type CustomerServiceUpdateManyArgs = {
    /**
     * The data used to update CustomerServices.
     */
    data: XOR<CustomerServiceUpdateManyMutationInput, CustomerServiceUncheckedUpdateManyInput>
    /**
     * Filter which CustomerServices to update
     */
    where?: CustomerServiceWhereInput
  }


  /**
   * CustomerService upsert
   */
  export type CustomerServiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * The filter to search for the CustomerService to update in case it exists.
     */
    where: CustomerServiceWhereUniqueInput
    /**
     * In case the CustomerService found by the `where` argument doesn't exist, create a new CustomerService with this data.
     */
    create: XOR<CustomerServiceCreateInput, CustomerServiceUncheckedCreateInput>
    /**
     * In case the CustomerService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerServiceUpdateInput, CustomerServiceUncheckedUpdateInput>
  }


  /**
   * CustomerService delete
   */
  export type CustomerServiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
    /**
     * Filter which CustomerService to delete.
     */
    where: CustomerServiceWhereUniqueInput
  }


  /**
   * CustomerService deleteMany
   */
  export type CustomerServiceDeleteManyArgs = {
    /**
     * Filter which CustomerServices to delete
     */
    where?: CustomerServiceWhereInput
  }


  /**
   * CustomerService without action
   */
  export type CustomerServiceArgs = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    description: string | null
    tel: string | null
    whatsapp: string | null
    email: string | null
    name: string | null
    shortDescription: string | null
    imageSrc: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    description: string | null
    tel: string | null
    whatsapp: string | null
    email: string | null
    name: string | null
    shortDescription: string | null
    imageSrc: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    description: number
    tel: number
    whatsapp: number
    email: number
    name: number
    shortDescription: number
    imageSrc: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    description?: true
    tel?: true
    whatsapp?: true
    email?: true
    name?: true
    shortDescription?: true
    imageSrc?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    description?: true
    tel?: true
    whatsapp?: true
    email?: true
    name?: true
    shortDescription?: true
    imageSrc?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    description?: true
    tel?: true
    whatsapp?: true
    email?: true
    name?: true
    shortDescription?: true
    imageSrc?: true
    _all?: true
  }

  export type ProductAggregateArgs = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: string
    description: string
    tel: string
    whatsapp: string
    email: string
    name: string
    shortDescription: string
    imageSrc: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect = {
    id?: boolean
    description?: boolean
    tel?: boolean
    whatsapp?: boolean
    email?: boolean
    name?: boolean
    shortDescription?: boolean
    imageSrc?: boolean
  }


  export type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Product :
    S extends undefined ? never :
    S extends { include: any } & (ProductArgs | ProductFindManyArgs)
    ? Product 
    : S extends { select: any } & (ProductArgs | ProductFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Product ? Product[P] : never
  } 
      : Product


  type ProductCountArgs = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<ProductGetPayload<T>> : Prisma__ProductClient<ProductGetPayload<T> | null, null>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs>
    ): PrismaPromise<Array<ProductGetPayload<T>>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs>
    ): Prisma__ProductClient<ProductGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs extends ProductFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs extends ProductFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs = {
    /**
     * The data used to create many Products.
     */
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductArgs = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ClientEmailChangeRequestScalarFieldEnum: {
    id: 'id',
    status: 'status',
    clientId: 'clientId'
  };

  export type ClientEmailChangeRequestScalarFieldEnum = (typeof ClientEmailChangeRequestScalarFieldEnum)[keyof typeof ClientEmailChangeRequestScalarFieldEnum]


  export const ClientPasswordResetRequestScalarFieldEnum: {
    token: 'token',
    createdAt: 'createdAt',
    email: 'email',
    wasUsed: 'wasUsed',
    clientId: 'clientId'
  };

  export type ClientPasswordResetRequestScalarFieldEnum = (typeof ClientPasswordResetRequestScalarFieldEnum)[keyof typeof ClientPasswordResetRequestScalarFieldEnum]


  export const ClientPushTokenScalarFieldEnum: {
    token: 'token',
    clientId: 'clientId'
  };

  export type ClientPushTokenScalarFieldEnum = (typeof ClientPushTokenScalarFieldEnum)[keyof typeof ClientPushTokenScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    numericPasswordHash: 'numericPasswordHash',
    name: 'name',
    notifyAnnouncements: 'notifyAnnouncements',
    notifyNewProducts: 'notifyNewProducts',
    notifyEventsAndActions: 'notifyEventsAndActions'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ClientSessionScalarFieldEnum: {
    token: 'token',
    clientId: 'clientId'
  };

  export type ClientSessionScalarFieldEnum = (typeof ClientSessionScalarFieldEnum)[keyof typeof ClientSessionScalarFieldEnum]


  export const ContractWithdrawRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    contractId: 'contractId',
    value: 'value',
    status: 'status'
  };

  export type ContractWithdrawRequestScalarFieldEnum = (typeof ContractWithdrawRequestScalarFieldEnum)[keyof typeof ContractWithdrawRequestScalarFieldEnum]


  export const CustomerServiceScalarFieldEnum: {
    id: 'id',
    tel: 'tel',
    email: 'email',
    whatsapp: 'whatsapp',
    address: 'address'
  };

  export type CustomerServiceScalarFieldEnum = (typeof CustomerServiceScalarFieldEnum)[keyof typeof CustomerServiceScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    body: 'body',
    createdAt: 'createdAt',
    payload: 'payload'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationsClientsScalarFieldEnum: {
    isViewed: 'isViewed',
    notificationId: 'notificationId',
    clientId: 'clientId'
  };

  export type NotificationsClientsScalarFieldEnum = (typeof NotificationsClientsScalarFieldEnum)[keyof typeof NotificationsClientsScalarFieldEnum]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const PanelUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name'
  };

  export type PanelUserScalarFieldEnum = (typeof PanelUserScalarFieldEnum)[keyof typeof PanelUserScalarFieldEnum]


  export const PanelUserSessionScalarFieldEnum: {
    token: 'token',
    panelUserId: 'panelUserId'
  };

  export type PanelUserSessionScalarFieldEnum = (typeof PanelUserSessionScalarFieldEnum)[keyof typeof PanelUserSessionScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    description: 'description',
    tel: 'tel',
    whatsapp: 'whatsapp',
    email: 'email',
    name: 'name',
    shortDescription: 'shortDescription',
    imageSrc: 'imageSrc'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type PanelUserWhereInput = {
    AND?: Enumerable<PanelUserWhereInput>
    OR?: Enumerable<PanelUserWhereInput>
    NOT?: Enumerable<PanelUserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    passwordHash?: StringFilter | string
    name?: StringFilter | string
    sessions?: PanelUserSessionListRelationFilter
  }

  export type PanelUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    sessions?: PanelUserSessionOrderByRelationAggregateInput
  }

  export type PanelUserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type PanelUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    _count?: PanelUserCountOrderByAggregateInput
    _max?: PanelUserMaxOrderByAggregateInput
    _min?: PanelUserMinOrderByAggregateInput
  }

  export type PanelUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PanelUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<PanelUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PanelUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    passwordHash?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type PanelUserSessionWhereInput = {
    AND?: Enumerable<PanelUserSessionWhereInput>
    OR?: Enumerable<PanelUserSessionWhereInput>
    NOT?: Enumerable<PanelUserSessionWhereInput>
    token?: StringFilter | string
    panelUser?: XOR<PanelUserRelationFilter, PanelUserWhereInput>
    panelUserId?: StringFilter | string
  }

  export type PanelUserSessionOrderByWithRelationInput = {
    token?: SortOrder
    panelUser?: PanelUserOrderByWithRelationInput
    panelUserId?: SortOrder
  }

  export type PanelUserSessionWhereUniqueInput = {
    token?: string
  }

  export type PanelUserSessionOrderByWithAggregationInput = {
    token?: SortOrder
    panelUserId?: SortOrder
    _count?: PanelUserSessionCountOrderByAggregateInput
    _max?: PanelUserSessionMaxOrderByAggregateInput
    _min?: PanelUserSessionMinOrderByAggregateInput
  }

  export type PanelUserSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PanelUserSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PanelUserSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PanelUserSessionScalarWhereWithAggregatesInput>
    token?: StringWithAggregatesFilter | string
    panelUserId?: StringWithAggregatesFilter | string
  }

  export type ClientWhereInput = {
    AND?: Enumerable<ClientWhereInput>
    OR?: Enumerable<ClientWhereInput>
    NOT?: Enumerable<ClientWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    passwordHash?: StringFilter | string
    numericPasswordHash?: StringFilter | string
    name?: StringFilter | string
    passwordResetRequests?: ClientPasswordResetRequestListRelationFilter
    emailChangeRequests?: ClientEmailChangeRequestListRelationFilter
    pushTokens?: ClientPushTokenListRelationFilter
    sessions?: ClientSessionListRelationFilter
    notifyAnnouncements?: BoolFilter | boolean
    notifyNewProducts?: BoolFilter | boolean
    notifyEventsAndActions?: BoolFilter | boolean
    notifications?: NotificationsClientsListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    numericPasswordHash?: SortOrder
    name?: SortOrder
    passwordResetRequests?: ClientPasswordResetRequestOrderByRelationAggregateInput
    emailChangeRequests?: ClientEmailChangeRequestOrderByRelationAggregateInput
    pushTokens?: ClientPushTokenOrderByRelationAggregateInput
    sessions?: ClientSessionOrderByRelationAggregateInput
    notifyAnnouncements?: SortOrder
    notifyNewProducts?: SortOrder
    notifyEventsAndActions?: SortOrder
    notifications?: NotificationsClientsOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    numericPasswordHash?: SortOrder
    name?: SortOrder
    notifyAnnouncements?: SortOrder
    notifyNewProducts?: SortOrder
    notifyEventsAndActions?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    passwordHash?: StringWithAggregatesFilter | string
    numericPasswordHash?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    notifyAnnouncements?: BoolWithAggregatesFilter | boolean
    notifyNewProducts?: BoolWithAggregatesFilter | boolean
    notifyEventsAndActions?: BoolWithAggregatesFilter | boolean
  }

  export type ClientSessionWhereInput = {
    AND?: Enumerable<ClientSessionWhereInput>
    OR?: Enumerable<ClientSessionWhereInput>
    NOT?: Enumerable<ClientSessionWhereInput>
    token?: StringFilter | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    clientId?: StringFilter | string
  }

  export type ClientSessionOrderByWithRelationInput = {
    token?: SortOrder
    client?: ClientOrderByWithRelationInput
    clientId?: SortOrder
  }

  export type ClientSessionWhereUniqueInput = {
    token?: string
  }

  export type ClientSessionOrderByWithAggregationInput = {
    token?: SortOrder
    clientId?: SortOrder
    _count?: ClientSessionCountOrderByAggregateInput
    _max?: ClientSessionMaxOrderByAggregateInput
    _min?: ClientSessionMinOrderByAggregateInput
  }

  export type ClientSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientSessionScalarWhereWithAggregatesInput>
    token?: StringWithAggregatesFilter | string
    clientId?: StringWithAggregatesFilter | string
  }

  export type ClientPasswordResetRequestWhereInput = {
    AND?: Enumerable<ClientPasswordResetRequestWhereInput>
    OR?: Enumerable<ClientPasswordResetRequestWhereInput>
    NOT?: Enumerable<ClientPasswordResetRequestWhereInput>
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    wasUsed?: BoolFilter | boolean
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    clientId?: StringFilter | string
  }

  export type ClientPasswordResetRequestOrderByWithRelationInput = {
    token?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    wasUsed?: SortOrder
    client?: ClientOrderByWithRelationInput
    clientId?: SortOrder
  }

  export type ClientPasswordResetRequestWhereUniqueInput = {
    token?: string
  }

  export type ClientPasswordResetRequestOrderByWithAggregationInput = {
    token?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    wasUsed?: SortOrder
    clientId?: SortOrder
    _count?: ClientPasswordResetRequestCountOrderByAggregateInput
    _max?: ClientPasswordResetRequestMaxOrderByAggregateInput
    _min?: ClientPasswordResetRequestMinOrderByAggregateInput
  }

  export type ClientPasswordResetRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientPasswordResetRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientPasswordResetRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientPasswordResetRequestScalarWhereWithAggregatesInput>
    token?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    wasUsed?: BoolWithAggregatesFilter | boolean
    clientId?: StringWithAggregatesFilter | string
  }

  export type ClientEmailChangeRequestWhereInput = {
    AND?: Enumerable<ClientEmailChangeRequestWhereInput>
    OR?: Enumerable<ClientEmailChangeRequestWhereInput>
    NOT?: Enumerable<ClientEmailChangeRequestWhereInput>
    id?: StringFilter | string
    status?: EnumClientEmailChangeRequestStatusFilter | ClientEmailChangeRequestStatus
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    clientId?: StringFilter | string
  }

  export type ClientEmailChangeRequestOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    client?: ClientOrderByWithRelationInput
    clientId?: SortOrder
  }

  export type ClientEmailChangeRequestWhereUniqueInput = {
    id?: string
  }

  export type ClientEmailChangeRequestOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    _count?: ClientEmailChangeRequestCountOrderByAggregateInput
    _max?: ClientEmailChangeRequestMaxOrderByAggregateInput
    _min?: ClientEmailChangeRequestMinOrderByAggregateInput
  }

  export type ClientEmailChangeRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientEmailChangeRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientEmailChangeRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientEmailChangeRequestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    status?: EnumClientEmailChangeRequestStatusWithAggregatesFilter | ClientEmailChangeRequestStatus
    clientId?: StringWithAggregatesFilter | string
  }

  export type ClientPushTokenWhereInput = {
    AND?: Enumerable<ClientPushTokenWhereInput>
    OR?: Enumerable<ClientPushTokenWhereInput>
    NOT?: Enumerable<ClientPushTokenWhereInput>
    token?: StringFilter | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    clientId?: StringFilter | string
  }

  export type ClientPushTokenOrderByWithRelationInput = {
    token?: SortOrder
    client?: ClientOrderByWithRelationInput
    clientId?: SortOrder
  }

  export type ClientPushTokenWhereUniqueInput = {
    token?: string
  }

  export type ClientPushTokenOrderByWithAggregationInput = {
    token?: SortOrder
    clientId?: SortOrder
    _count?: ClientPushTokenCountOrderByAggregateInput
    _max?: ClientPushTokenMaxOrderByAggregateInput
    _min?: ClientPushTokenMinOrderByAggregateInput
  }

  export type ClientPushTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientPushTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientPushTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientPushTokenScalarWhereWithAggregatesInput>
    token?: StringWithAggregatesFilter | string
    clientId?: StringWithAggregatesFilter | string
  }

  export type ContractWithdrawRequestWhereInput = {
    AND?: Enumerable<ContractWithdrawRequestWhereInput>
    OR?: Enumerable<ContractWithdrawRequestWhereInput>
    NOT?: Enumerable<ContractWithdrawRequestWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    contractId?: StringFilter | string
    value?: DecimalFilter | Decimal | DecimalJsLike | number | string
    status?: EnumContractWithdrawRequestStatusFilter | ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    status?: SortOrder
  }

  export type ContractWithdrawRequestWhereUniqueInput = {
    id?: string
  }

  export type ContractWithdrawRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    status?: SortOrder
    _count?: ContractWithdrawRequestCountOrderByAggregateInput
    _avg?: ContractWithdrawRequestAvgOrderByAggregateInput
    _max?: ContractWithdrawRequestMaxOrderByAggregateInput
    _min?: ContractWithdrawRequestMinOrderByAggregateInput
    _sum?: ContractWithdrawRequestSumOrderByAggregateInput
  }

  export type ContractWithdrawRequestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContractWithdrawRequestScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContractWithdrawRequestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContractWithdrawRequestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    contractId?: StringWithAggregatesFilter | string
    value?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    status?: EnumContractWithdrawRequestStatusWithAggregatesFilter | ContractWithdrawRequestStatus
  }

  export type NotificationWhereInput = {
    AND?: Enumerable<NotificationWhereInput>
    OR?: Enumerable<NotificationWhereInput>
    NOT?: Enumerable<NotificationWhereInput>
    id?: StringFilter | string
    type?: EnumNotificationTypeFilter | NotificationType
    title?: StringFilter | string
    body?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    payload?: JsonNullableFilter
    clients?: NotificationsClientsListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    payload?: SortOrder
    clients?: NotificationsClientsOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = {
    id?: string
  }

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    payload?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: EnumNotificationTypeWithAggregatesFilter | NotificationType
    title?: StringWithAggregatesFilter | string
    body?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    payload?: JsonNullableWithAggregatesFilter
  }

  export type NotificationsClientsWhereInput = {
    AND?: Enumerable<NotificationsClientsWhereInput>
    OR?: Enumerable<NotificationsClientsWhereInput>
    NOT?: Enumerable<NotificationsClientsWhereInput>
    isViewed?: BoolFilter | boolean
    notification?: XOR<NotificationRelationFilter, NotificationWhereInput>
    notificationId?: StringFilter | string
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    clientId?: StringFilter | string
  }

  export type NotificationsClientsOrderByWithRelationInput = {
    isViewed?: SortOrder
    notification?: NotificationOrderByWithRelationInput
    notificationId?: SortOrder
    client?: ClientOrderByWithRelationInput
    clientId?: SortOrder
  }

  export type NotificationsClientsWhereUniqueInput = {
    notificationId_clientId?: NotificationsClientsNotificationIdClientIdCompoundUniqueInput
  }

  export type NotificationsClientsOrderByWithAggregationInput = {
    isViewed?: SortOrder
    notificationId?: SortOrder
    clientId?: SortOrder
    _count?: NotificationsClientsCountOrderByAggregateInput
    _max?: NotificationsClientsMaxOrderByAggregateInput
    _min?: NotificationsClientsMinOrderByAggregateInput
  }

  export type NotificationsClientsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NotificationsClientsScalarWhereWithAggregatesInput>
    OR?: Enumerable<NotificationsClientsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NotificationsClientsScalarWhereWithAggregatesInput>
    isViewed?: BoolWithAggregatesFilter | boolean
    notificationId?: StringWithAggregatesFilter | string
    clientId?: StringWithAggregatesFilter | string
  }

  export type CustomerServiceWhereInput = {
    AND?: Enumerable<CustomerServiceWhereInput>
    OR?: Enumerable<CustomerServiceWhereInput>
    NOT?: Enumerable<CustomerServiceWhereInput>
    id?: StringFilter | string
    tel?: StringFilter | string
    email?: StringFilter | string
    whatsapp?: StringFilter | string
    address?: StringFilter | string
  }

  export type CustomerServiceOrderByWithRelationInput = {
    id?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
  }

  export type CustomerServiceWhereUniqueInput = {
    id?: string
  }

  export type CustomerServiceOrderByWithAggregationInput = {
    id?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    _count?: CustomerServiceCountOrderByAggregateInput
    _max?: CustomerServiceMaxOrderByAggregateInput
    _min?: CustomerServiceMinOrderByAggregateInput
  }

  export type CustomerServiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CustomerServiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<CustomerServiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CustomerServiceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    whatsapp?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    description?: StringFilter | string
    tel?: StringFilter | string
    whatsapp?: StringFilter | string
    email?: StringFilter | string
    name?: StringFilter | string
    shortDescription?: StringFilter | string
    imageSrc?: StringFilter | string
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    tel?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shortDescription?: SortOrder
    imageSrc?: SortOrder
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    tel?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shortDescription?: SortOrder
    imageSrc?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    tel?: StringWithAggregatesFilter | string
    whatsapp?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    shortDescription?: StringWithAggregatesFilter | string
    imageSrc?: StringWithAggregatesFilter | string
  }

  export type PanelUserCreateInput = {
    id: string
    email: string
    passwordHash: string
    name: string
    sessions?: PanelUserSessionCreateNestedManyWithoutPanelUserInput
  }

  export type PanelUserUncheckedCreateInput = {
    id: string
    email: string
    passwordHash: string
    name: string
    sessions?: PanelUserSessionUncheckedCreateNestedManyWithoutPanelUserInput
  }

  export type PanelUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sessions?: PanelUserSessionUpdateManyWithoutPanelUserNestedInput
  }

  export type PanelUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sessions?: PanelUserSessionUncheckedUpdateManyWithoutPanelUserNestedInput
  }

  export type PanelUserCreateManyInput = {
    id: string
    email: string
    passwordHash: string
    name: string
  }

  export type PanelUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PanelUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PanelUserSessionCreateInput = {
    token: string
    panelUser: PanelUserCreateNestedOneWithoutSessionsInput
  }

  export type PanelUserSessionUncheckedCreateInput = {
    token: string
    panelUserId: string
  }

  export type PanelUserSessionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    panelUser?: PanelUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type PanelUserSessionUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    panelUserId?: StringFieldUpdateOperationsInput | string
  }

  export type PanelUserSessionCreateManyInput = {
    token: string
    panelUserId: string
  }

  export type PanelUserSessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PanelUserSessionUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    panelUserId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenCreateNestedManyWithoutClientInput
    sessions?: ClientSessionCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenUncheckedCreateNestedManyWithoutClientInput
    sessions?: ClientSessionUncheckedCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUncheckedUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUncheckedUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientSessionCreateInput = {
    token: string
    client: ClientCreateNestedOneWithoutSessionsInput
  }

  export type ClientSessionUncheckedCreateInput = {
    token: string
    clientId: string
  }

  export type ClientSessionUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ClientSessionUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientSessionCreateManyInput = {
    token: string
    clientId: string
  }

  export type ClientSessionUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientSessionUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPasswordResetRequestCreateInput = {
    token: string
    createdAt: Date | string
    email: string
    wasUsed: boolean
    client: ClientCreateNestedOneWithoutPasswordResetRequestsInput
  }

  export type ClientPasswordResetRequestUncheckedCreateInput = {
    token: string
    createdAt: Date | string
    email: string
    wasUsed: boolean
    clientId: string
  }

  export type ClientPasswordResetRequestUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    wasUsed?: BoolFieldUpdateOperationsInput | boolean
    client?: ClientUpdateOneRequiredWithoutPasswordResetRequestsNestedInput
  }

  export type ClientPasswordResetRequestUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    wasUsed?: BoolFieldUpdateOperationsInput | boolean
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPasswordResetRequestCreateManyInput = {
    token: string
    createdAt: Date | string
    email: string
    wasUsed: boolean
    clientId: string
  }

  export type ClientPasswordResetRequestUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    wasUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientPasswordResetRequestUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    wasUsed?: BoolFieldUpdateOperationsInput | boolean
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientEmailChangeRequestCreateInput = {
    id: string
    status: ClientEmailChangeRequestStatus
    client: ClientCreateNestedOneWithoutEmailChangeRequestsInput
  }

  export type ClientEmailChangeRequestUncheckedCreateInput = {
    id: string
    status: ClientEmailChangeRequestStatus
    clientId: string
  }

  export type ClientEmailChangeRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput | ClientEmailChangeRequestStatus
    client?: ClientUpdateOneRequiredWithoutEmailChangeRequestsNestedInput
  }

  export type ClientEmailChangeRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput | ClientEmailChangeRequestStatus
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientEmailChangeRequestCreateManyInput = {
    id: string
    status: ClientEmailChangeRequestStatus
    clientId: string
  }

  export type ClientEmailChangeRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput | ClientEmailChangeRequestStatus
  }

  export type ClientEmailChangeRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput | ClientEmailChangeRequestStatus
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPushTokenCreateInput = {
    token: string
    client: ClientCreateNestedOneWithoutPushTokensInput
  }

  export type ClientPushTokenUncheckedCreateInput = {
    token: string
    clientId: string
  }

  export type ClientPushTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutPushTokensNestedInput
  }

  export type ClientPushTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPushTokenCreateManyInput = {
    token: string
    clientId: string
  }

  export type ClientPushTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPushTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ContractWithdrawRequestCreateInput = {
    id: string
    createdAt: Date | string
    contractId: string
    value: Decimal | DecimalJsLike | number | string
    status: ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestUncheckedCreateInput = {
    id: string
    createdAt: Date | string
    contractId: string
    value: Decimal | DecimalJsLike | number | string
    status: ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractWithdrawRequestStatusFieldUpdateOperationsInput | ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractWithdrawRequestStatusFieldUpdateOperationsInput | ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestCreateManyInput = {
    id: string
    createdAt: Date | string
    contractId: string
    value: Decimal | DecimalJsLike | number | string
    status: ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractWithdrawRequestStatusFieldUpdateOperationsInput | ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contractId?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumContractWithdrawRequestStatusFieldUpdateOperationsInput | ContractWithdrawRequestStatus
  }

  export type NotificationCreateInput = {
    id: string
    type: NotificationType
    title: string
    body: string
    createdAt: Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    clients?: NotificationsClientsCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id: string
    type: NotificationType
    title: string
    body: string
    createdAt: Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    clients?: NotificationsClientsUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    clients?: NotificationsClientsUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    clients?: NotificationsClientsUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id: string
    type: NotificationType
    title: string
    body: string
    createdAt: Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NotificationsClientsCreateInput = {
    isViewed: boolean
    notification: NotificationCreateNestedOneWithoutClientsInput
    client: ClientCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsClientsUncheckedCreateInput = {
    isViewed: boolean
    notificationId: string
    clientId: string
  }

  export type NotificationsClientsUpdateInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    notification?: NotificationUpdateOneRequiredWithoutClientsNestedInput
    client?: ClientUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsClientsUncheckedUpdateInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    notificationId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsClientsCreateManyInput = {
    isViewed: boolean
    notificationId: string
    clientId: string
  }

  export type NotificationsClientsUpdateManyMutationInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsClientsUncheckedUpdateManyInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    notificationId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerServiceCreateInput = {
    id: string
    tel: string
    email: string
    whatsapp: string
    address: string
  }

  export type CustomerServiceUncheckedCreateInput = {
    id: string
    tel: string
    email: string
    whatsapp: string
    address: string
  }

  export type CustomerServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerServiceCreateManyInput = {
    id: string
    tel: string
    email: string
    whatsapp: string
    address: string
  }

  export type CustomerServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id: string
    description: string
    tel: string
    whatsapp: string
    email: string
    name: string
    shortDescription: string
    imageSrc: string
  }

  export type ProductUncheckedCreateInput = {
    id: string
    description: string
    tel: string
    whatsapp: string
    email: string
    name: string
    shortDescription: string
    imageSrc: string
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyInput = {
    id: string
    description: string
    tel: string
    whatsapp: string
    email: string
    name: string
    shortDescription: string
    imageSrc: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type PanelUserSessionListRelationFilter = {
    every?: PanelUserSessionWhereInput
    some?: PanelUserSessionWhereInput
    none?: PanelUserSessionWhereInput
  }

  export type PanelUserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PanelUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
  }

  export type PanelUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
  }

  export type PanelUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type PanelUserRelationFilter = {
    is?: PanelUserWhereInput
    isNot?: PanelUserWhereInput
  }

  export type PanelUserSessionCountOrderByAggregateInput = {
    token?: SortOrder
    panelUserId?: SortOrder
  }

  export type PanelUserSessionMaxOrderByAggregateInput = {
    token?: SortOrder
    panelUserId?: SortOrder
  }

  export type PanelUserSessionMinOrderByAggregateInput = {
    token?: SortOrder
    panelUserId?: SortOrder
  }

  export type ClientPasswordResetRequestListRelationFilter = {
    every?: ClientPasswordResetRequestWhereInput
    some?: ClientPasswordResetRequestWhereInput
    none?: ClientPasswordResetRequestWhereInput
  }

  export type ClientEmailChangeRequestListRelationFilter = {
    every?: ClientEmailChangeRequestWhereInput
    some?: ClientEmailChangeRequestWhereInput
    none?: ClientEmailChangeRequestWhereInput
  }

  export type ClientPushTokenListRelationFilter = {
    every?: ClientPushTokenWhereInput
    some?: ClientPushTokenWhereInput
    none?: ClientPushTokenWhereInput
  }

  export type ClientSessionListRelationFilter = {
    every?: ClientSessionWhereInput
    some?: ClientSessionWhereInput
    none?: ClientSessionWhereInput
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NotificationsClientsListRelationFilter = {
    every?: NotificationsClientsWhereInput
    some?: NotificationsClientsWhereInput
    none?: NotificationsClientsWhereInput
  }

  export type ClientPasswordResetRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientEmailChangeRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientPushTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsClientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    numericPasswordHash?: SortOrder
    name?: SortOrder
    notifyAnnouncements?: SortOrder
    notifyNewProducts?: SortOrder
    notifyEventsAndActions?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    numericPasswordHash?: SortOrder
    name?: SortOrder
    notifyAnnouncements?: SortOrder
    notifyNewProducts?: SortOrder
    notifyEventsAndActions?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    numericPasswordHash?: SortOrder
    name?: SortOrder
    notifyAnnouncements?: SortOrder
    notifyNewProducts?: SortOrder
    notifyEventsAndActions?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ClientSessionCountOrderByAggregateInput = {
    token?: SortOrder
    clientId?: SortOrder
  }

  export type ClientSessionMaxOrderByAggregateInput = {
    token?: SortOrder
    clientId?: SortOrder
  }

  export type ClientSessionMinOrderByAggregateInput = {
    token?: SortOrder
    clientId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ClientPasswordResetRequestCountOrderByAggregateInput = {
    token?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    wasUsed?: SortOrder
    clientId?: SortOrder
  }

  export type ClientPasswordResetRequestMaxOrderByAggregateInput = {
    token?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    wasUsed?: SortOrder
    clientId?: SortOrder
  }

  export type ClientPasswordResetRequestMinOrderByAggregateInput = {
    token?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    wasUsed?: SortOrder
    clientId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumClientEmailChangeRequestStatusFilter = {
    equals?: ClientEmailChangeRequestStatus
    in?: Enumerable<ClientEmailChangeRequestStatus>
    notIn?: Enumerable<ClientEmailChangeRequestStatus>
    not?: NestedEnumClientEmailChangeRequestStatusFilter | ClientEmailChangeRequestStatus
  }

  export type ClientEmailChangeRequestCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
  }

  export type ClientEmailChangeRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
  }

  export type ClientEmailChangeRequestMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
  }

  export type EnumClientEmailChangeRequestStatusWithAggregatesFilter = {
    equals?: ClientEmailChangeRequestStatus
    in?: Enumerable<ClientEmailChangeRequestStatus>
    notIn?: Enumerable<ClientEmailChangeRequestStatus>
    not?: NestedEnumClientEmailChangeRequestStatusWithAggregatesFilter | ClientEmailChangeRequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumClientEmailChangeRequestStatusFilter
    _max?: NestedEnumClientEmailChangeRequestStatusFilter
  }

  export type ClientPushTokenCountOrderByAggregateInput = {
    token?: SortOrder
    clientId?: SortOrder
  }

  export type ClientPushTokenMaxOrderByAggregateInput = {
    token?: SortOrder
    clientId?: SortOrder
  }

  export type ClientPushTokenMinOrderByAggregateInput = {
    token?: SortOrder
    clientId?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type EnumContractWithdrawRequestStatusFilter = {
    equals?: ContractWithdrawRequestStatus
    in?: Enumerable<ContractWithdrawRequestStatus>
    notIn?: Enumerable<ContractWithdrawRequestStatus>
    not?: NestedEnumContractWithdrawRequestStatusFilter | ContractWithdrawRequestStatus
  }

  export type ContractWithdrawRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    status?: SortOrder
  }

  export type ContractWithdrawRequestAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ContractWithdrawRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    status?: SortOrder
  }

  export type ContractWithdrawRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    contractId?: SortOrder
    value?: SortOrder
    status?: SortOrder
  }

  export type ContractWithdrawRequestSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type EnumContractWithdrawRequestStatusWithAggregatesFilter = {
    equals?: ContractWithdrawRequestStatus
    in?: Enumerable<ContractWithdrawRequestStatus>
    notIn?: Enumerable<ContractWithdrawRequestStatus>
    not?: NestedEnumContractWithdrawRequestStatusWithAggregatesFilter | ContractWithdrawRequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumContractWithdrawRequestStatusFilter
    _max?: NestedEnumContractWithdrawRequestStatusFilter
  }

  export type EnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    payload?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type NotificationRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type NotificationsClientsNotificationIdClientIdCompoundUniqueInput = {
    notificationId: string
    clientId: string
  }

  export type NotificationsClientsCountOrderByAggregateInput = {
    isViewed?: SortOrder
    notificationId?: SortOrder
    clientId?: SortOrder
  }

  export type NotificationsClientsMaxOrderByAggregateInput = {
    isViewed?: SortOrder
    notificationId?: SortOrder
    clientId?: SortOrder
  }

  export type NotificationsClientsMinOrderByAggregateInput = {
    isViewed?: SortOrder
    notificationId?: SortOrder
    clientId?: SortOrder
  }

  export type CustomerServiceCountOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
  }

  export type CustomerServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
  }

  export type CustomerServiceMinOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tel?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shortDescription?: SortOrder
    imageSrc?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tel?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shortDescription?: SortOrder
    imageSrc?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tel?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    name?: SortOrder
    shortDescription?: SortOrder
    imageSrc?: SortOrder
  }

  export type PanelUserSessionCreateNestedManyWithoutPanelUserInput = {
    create?: XOR<Enumerable<PanelUserSessionCreateWithoutPanelUserInput>, Enumerable<PanelUserSessionUncheckedCreateWithoutPanelUserInput>>
    connectOrCreate?: Enumerable<PanelUserSessionCreateOrConnectWithoutPanelUserInput>
    createMany?: PanelUserSessionCreateManyPanelUserInputEnvelope
    connect?: Enumerable<PanelUserSessionWhereUniqueInput>
  }

  export type PanelUserSessionUncheckedCreateNestedManyWithoutPanelUserInput = {
    create?: XOR<Enumerable<PanelUserSessionCreateWithoutPanelUserInput>, Enumerable<PanelUserSessionUncheckedCreateWithoutPanelUserInput>>
    connectOrCreate?: Enumerable<PanelUserSessionCreateOrConnectWithoutPanelUserInput>
    createMany?: PanelUserSessionCreateManyPanelUserInputEnvelope
    connect?: Enumerable<PanelUserSessionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PanelUserSessionUpdateManyWithoutPanelUserNestedInput = {
    create?: XOR<Enumerable<PanelUserSessionCreateWithoutPanelUserInput>, Enumerable<PanelUserSessionUncheckedCreateWithoutPanelUserInput>>
    connectOrCreate?: Enumerable<PanelUserSessionCreateOrConnectWithoutPanelUserInput>
    upsert?: Enumerable<PanelUserSessionUpsertWithWhereUniqueWithoutPanelUserInput>
    createMany?: PanelUserSessionCreateManyPanelUserInputEnvelope
    set?: Enumerable<PanelUserSessionWhereUniqueInput>
    disconnect?: Enumerable<PanelUserSessionWhereUniqueInput>
    delete?: Enumerable<PanelUserSessionWhereUniqueInput>
    connect?: Enumerable<PanelUserSessionWhereUniqueInput>
    update?: Enumerable<PanelUserSessionUpdateWithWhereUniqueWithoutPanelUserInput>
    updateMany?: Enumerable<PanelUserSessionUpdateManyWithWhereWithoutPanelUserInput>
    deleteMany?: Enumerable<PanelUserSessionScalarWhereInput>
  }

  export type PanelUserSessionUncheckedUpdateManyWithoutPanelUserNestedInput = {
    create?: XOR<Enumerable<PanelUserSessionCreateWithoutPanelUserInput>, Enumerable<PanelUserSessionUncheckedCreateWithoutPanelUserInput>>
    connectOrCreate?: Enumerable<PanelUserSessionCreateOrConnectWithoutPanelUserInput>
    upsert?: Enumerable<PanelUserSessionUpsertWithWhereUniqueWithoutPanelUserInput>
    createMany?: PanelUserSessionCreateManyPanelUserInputEnvelope
    set?: Enumerable<PanelUserSessionWhereUniqueInput>
    disconnect?: Enumerable<PanelUserSessionWhereUniqueInput>
    delete?: Enumerable<PanelUserSessionWhereUniqueInput>
    connect?: Enumerable<PanelUserSessionWhereUniqueInput>
    update?: Enumerable<PanelUserSessionUpdateWithWhereUniqueWithoutPanelUserInput>
    updateMany?: Enumerable<PanelUserSessionUpdateManyWithWhereWithoutPanelUserInput>
    deleteMany?: Enumerable<PanelUserSessionScalarWhereInput>
  }

  export type PanelUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PanelUserCreateWithoutSessionsInput, PanelUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PanelUserCreateOrConnectWithoutSessionsInput
    connect?: PanelUserWhereUniqueInput
  }

  export type PanelUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<PanelUserCreateWithoutSessionsInput, PanelUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PanelUserCreateOrConnectWithoutSessionsInput
    upsert?: PanelUserUpsertWithoutSessionsInput
    connect?: PanelUserWhereUniqueInput
    update?: XOR<PanelUserUpdateWithoutSessionsInput, PanelUserUncheckedUpdateWithoutSessionsInput>
  }

  export type ClientPasswordResetRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientPasswordResetRequestCreateWithoutClientInput>, Enumerable<ClientPasswordResetRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPasswordResetRequestCreateOrConnectWithoutClientInput>
    createMany?: ClientPasswordResetRequestCreateManyClientInputEnvelope
    connect?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
  }

  export type ClientEmailChangeRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientEmailChangeRequestCreateWithoutClientInput>, Enumerable<ClientEmailChangeRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientEmailChangeRequestCreateOrConnectWithoutClientInput>
    createMany?: ClientEmailChangeRequestCreateManyClientInputEnvelope
    connect?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
  }

  export type ClientPushTokenCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientPushTokenCreateWithoutClientInput>, Enumerable<ClientPushTokenUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPushTokenCreateOrConnectWithoutClientInput>
    createMany?: ClientPushTokenCreateManyClientInputEnvelope
    connect?: Enumerable<ClientPushTokenWhereUniqueInput>
  }

  export type ClientSessionCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientSessionCreateWithoutClientInput>, Enumerable<ClientSessionUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientSessionCreateOrConnectWithoutClientInput>
    createMany?: ClientSessionCreateManyClientInputEnvelope
    connect?: Enumerable<ClientSessionWhereUniqueInput>
  }

  export type NotificationsClientsCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutClientInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutClientInput>
    createMany?: NotificationsClientsCreateManyClientInputEnvelope
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
  }

  export type ClientPasswordResetRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientPasswordResetRequestCreateWithoutClientInput>, Enumerable<ClientPasswordResetRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPasswordResetRequestCreateOrConnectWithoutClientInput>
    createMany?: ClientPasswordResetRequestCreateManyClientInputEnvelope
    connect?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
  }

  export type ClientEmailChangeRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientEmailChangeRequestCreateWithoutClientInput>, Enumerable<ClientEmailChangeRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientEmailChangeRequestCreateOrConnectWithoutClientInput>
    createMany?: ClientEmailChangeRequestCreateManyClientInputEnvelope
    connect?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
  }

  export type ClientPushTokenUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientPushTokenCreateWithoutClientInput>, Enumerable<ClientPushTokenUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPushTokenCreateOrConnectWithoutClientInput>
    createMany?: ClientPushTokenCreateManyClientInputEnvelope
    connect?: Enumerable<ClientPushTokenWhereUniqueInput>
  }

  export type ClientSessionUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<ClientSessionCreateWithoutClientInput>, Enumerable<ClientSessionUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientSessionCreateOrConnectWithoutClientInput>
    createMany?: ClientSessionCreateManyClientInputEnvelope
    connect?: Enumerable<ClientSessionWhereUniqueInput>
  }

  export type NotificationsClientsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutClientInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutClientInput>
    createMany?: NotificationsClientsCreateManyClientInputEnvelope
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
  }

  export type ClientPasswordResetRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientPasswordResetRequestCreateWithoutClientInput>, Enumerable<ClientPasswordResetRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPasswordResetRequestCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientPasswordResetRequestUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientPasswordResetRequestCreateManyClientInputEnvelope
    set?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    disconnect?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    delete?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    connect?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    update?: Enumerable<ClientPasswordResetRequestUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientPasswordResetRequestUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientPasswordResetRequestScalarWhereInput>
  }

  export type ClientEmailChangeRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientEmailChangeRequestCreateWithoutClientInput>, Enumerable<ClientEmailChangeRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientEmailChangeRequestCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientEmailChangeRequestUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientEmailChangeRequestCreateManyClientInputEnvelope
    set?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    disconnect?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    delete?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    connect?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    update?: Enumerable<ClientEmailChangeRequestUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientEmailChangeRequestUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientEmailChangeRequestScalarWhereInput>
  }

  export type ClientPushTokenUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientPushTokenCreateWithoutClientInput>, Enumerable<ClientPushTokenUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPushTokenCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientPushTokenUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientPushTokenCreateManyClientInputEnvelope
    set?: Enumerable<ClientPushTokenWhereUniqueInput>
    disconnect?: Enumerable<ClientPushTokenWhereUniqueInput>
    delete?: Enumerable<ClientPushTokenWhereUniqueInput>
    connect?: Enumerable<ClientPushTokenWhereUniqueInput>
    update?: Enumerable<ClientPushTokenUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientPushTokenUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientPushTokenScalarWhereInput>
  }

  export type ClientSessionUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientSessionCreateWithoutClientInput>, Enumerable<ClientSessionUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientSessionCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientSessionUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientSessionCreateManyClientInputEnvelope
    set?: Enumerable<ClientSessionWhereUniqueInput>
    disconnect?: Enumerable<ClientSessionWhereUniqueInput>
    delete?: Enumerable<ClientSessionWhereUniqueInput>
    connect?: Enumerable<ClientSessionWhereUniqueInput>
    update?: Enumerable<ClientSessionUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientSessionUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientSessionScalarWhereInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NotificationsClientsUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutClientInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<NotificationsClientsUpsertWithWhereUniqueWithoutClientInput>
    createMany?: NotificationsClientsCreateManyClientInputEnvelope
    set?: Enumerable<NotificationsClientsWhereUniqueInput>
    disconnect?: Enumerable<NotificationsClientsWhereUniqueInput>
    delete?: Enumerable<NotificationsClientsWhereUniqueInput>
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
    update?: Enumerable<NotificationsClientsUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<NotificationsClientsUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<NotificationsClientsScalarWhereInput>
  }

  export type ClientPasswordResetRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientPasswordResetRequestCreateWithoutClientInput>, Enumerable<ClientPasswordResetRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPasswordResetRequestCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientPasswordResetRequestUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientPasswordResetRequestCreateManyClientInputEnvelope
    set?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    disconnect?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    delete?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    connect?: Enumerable<ClientPasswordResetRequestWhereUniqueInput>
    update?: Enumerable<ClientPasswordResetRequestUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientPasswordResetRequestUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientPasswordResetRequestScalarWhereInput>
  }

  export type ClientEmailChangeRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientEmailChangeRequestCreateWithoutClientInput>, Enumerable<ClientEmailChangeRequestUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientEmailChangeRequestCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientEmailChangeRequestUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientEmailChangeRequestCreateManyClientInputEnvelope
    set?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    disconnect?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    delete?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    connect?: Enumerable<ClientEmailChangeRequestWhereUniqueInput>
    update?: Enumerable<ClientEmailChangeRequestUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientEmailChangeRequestUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientEmailChangeRequestScalarWhereInput>
  }

  export type ClientPushTokenUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientPushTokenCreateWithoutClientInput>, Enumerable<ClientPushTokenUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientPushTokenCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientPushTokenUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientPushTokenCreateManyClientInputEnvelope
    set?: Enumerable<ClientPushTokenWhereUniqueInput>
    disconnect?: Enumerable<ClientPushTokenWhereUniqueInput>
    delete?: Enumerable<ClientPushTokenWhereUniqueInput>
    connect?: Enumerable<ClientPushTokenWhereUniqueInput>
    update?: Enumerable<ClientPushTokenUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientPushTokenUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientPushTokenScalarWhereInput>
  }

  export type ClientSessionUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<ClientSessionCreateWithoutClientInput>, Enumerable<ClientSessionUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<ClientSessionCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<ClientSessionUpsertWithWhereUniqueWithoutClientInput>
    createMany?: ClientSessionCreateManyClientInputEnvelope
    set?: Enumerable<ClientSessionWhereUniqueInput>
    disconnect?: Enumerable<ClientSessionWhereUniqueInput>
    delete?: Enumerable<ClientSessionWhereUniqueInput>
    connect?: Enumerable<ClientSessionWhereUniqueInput>
    update?: Enumerable<ClientSessionUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<ClientSessionUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<ClientSessionScalarWhereInput>
  }

  export type NotificationsClientsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutClientInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<NotificationsClientsUpsertWithWhereUniqueWithoutClientInput>
    createMany?: NotificationsClientsCreateManyClientInputEnvelope
    set?: Enumerable<NotificationsClientsWhereUniqueInput>
    disconnect?: Enumerable<NotificationsClientsWhereUniqueInput>
    delete?: Enumerable<NotificationsClientsWhereUniqueInput>
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
    update?: Enumerable<NotificationsClientsUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<NotificationsClientsUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<NotificationsClientsScalarWhereInput>
  }

  export type ClientCreateNestedOneWithoutSessionsInput = {
    create?: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSessionsInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSessionsInput
    upsert?: ClientUpsertWithoutSessionsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<ClientUpdateWithoutSessionsInput, ClientUncheckedUpdateWithoutSessionsInput>
  }

  export type ClientCreateNestedOneWithoutPasswordResetRequestsInput = {
    create?: XOR<ClientCreateWithoutPasswordResetRequestsInput, ClientUncheckedCreateWithoutPasswordResetRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPasswordResetRequestsInput
    connect?: ClientWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutPasswordResetRequestsNestedInput = {
    create?: XOR<ClientCreateWithoutPasswordResetRequestsInput, ClientUncheckedCreateWithoutPasswordResetRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPasswordResetRequestsInput
    upsert?: ClientUpsertWithoutPasswordResetRequestsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<ClientUpdateWithoutPasswordResetRequestsInput, ClientUncheckedUpdateWithoutPasswordResetRequestsInput>
  }

  export type ClientCreateNestedOneWithoutEmailChangeRequestsInput = {
    create?: XOR<ClientCreateWithoutEmailChangeRequestsInput, ClientUncheckedCreateWithoutEmailChangeRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEmailChangeRequestsInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput = {
    set?: ClientEmailChangeRequestStatus
  }

  export type ClientUpdateOneRequiredWithoutEmailChangeRequestsNestedInput = {
    create?: XOR<ClientCreateWithoutEmailChangeRequestsInput, ClientUncheckedCreateWithoutEmailChangeRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEmailChangeRequestsInput
    upsert?: ClientUpsertWithoutEmailChangeRequestsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<ClientUpdateWithoutEmailChangeRequestsInput, ClientUncheckedUpdateWithoutEmailChangeRequestsInput>
  }

  export type ClientCreateNestedOneWithoutPushTokensInput = {
    create?: XOR<ClientCreateWithoutPushTokensInput, ClientUncheckedCreateWithoutPushTokensInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPushTokensInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutPushTokensNestedInput = {
    create?: XOR<ClientCreateWithoutPushTokensInput, ClientUncheckedCreateWithoutPushTokensInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPushTokensInput
    upsert?: ClientUpsertWithoutPushTokensInput
    connect?: ClientWhereUniqueInput
    update?: XOR<ClientUpdateWithoutPushTokensInput, ClientUncheckedUpdateWithoutPushTokensInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumContractWithdrawRequestStatusFieldUpdateOperationsInput = {
    set?: ContractWithdrawRequestStatus
  }

  export type NotificationsClientsCreateNestedManyWithoutNotificationInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutNotificationInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutNotificationInput>
    createMany?: NotificationsClientsCreateManyNotificationInputEnvelope
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
  }

  export type NotificationsClientsUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutNotificationInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutNotificationInput>
    createMany?: NotificationsClientsCreateManyNotificationInputEnvelope
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: NotificationType
  }

  export type NotificationsClientsUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutNotificationInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutNotificationInput>
    upsert?: Enumerable<NotificationsClientsUpsertWithWhereUniqueWithoutNotificationInput>
    createMany?: NotificationsClientsCreateManyNotificationInputEnvelope
    set?: Enumerable<NotificationsClientsWhereUniqueInput>
    disconnect?: Enumerable<NotificationsClientsWhereUniqueInput>
    delete?: Enumerable<NotificationsClientsWhereUniqueInput>
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
    update?: Enumerable<NotificationsClientsUpdateWithWhereUniqueWithoutNotificationInput>
    updateMany?: Enumerable<NotificationsClientsUpdateManyWithWhereWithoutNotificationInput>
    deleteMany?: Enumerable<NotificationsClientsScalarWhereInput>
  }

  export type NotificationsClientsUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<Enumerable<NotificationsClientsCreateWithoutNotificationInput>, Enumerable<NotificationsClientsUncheckedCreateWithoutNotificationInput>>
    connectOrCreate?: Enumerable<NotificationsClientsCreateOrConnectWithoutNotificationInput>
    upsert?: Enumerable<NotificationsClientsUpsertWithWhereUniqueWithoutNotificationInput>
    createMany?: NotificationsClientsCreateManyNotificationInputEnvelope
    set?: Enumerable<NotificationsClientsWhereUniqueInput>
    disconnect?: Enumerable<NotificationsClientsWhereUniqueInput>
    delete?: Enumerable<NotificationsClientsWhereUniqueInput>
    connect?: Enumerable<NotificationsClientsWhereUniqueInput>
    update?: Enumerable<NotificationsClientsUpdateWithWhereUniqueWithoutNotificationInput>
    updateMany?: Enumerable<NotificationsClientsUpdateManyWithWhereWithoutNotificationInput>
    deleteMany?: Enumerable<NotificationsClientsScalarWhereInput>
  }

  export type NotificationCreateNestedOneWithoutClientsInput = {
    create?: XOR<NotificationCreateWithoutClientsInput, NotificationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutClientsInput
    connect?: NotificationWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ClientCreateWithoutNotificationsInput, ClientUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutNotificationsInput
    connect?: ClientWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<NotificationCreateWithoutClientsInput, NotificationUncheckedCreateWithoutClientsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutClientsInput
    upsert?: NotificationUpsertWithoutClientsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<NotificationUpdateWithoutClientsInput, NotificationUncheckedUpdateWithoutClientsInput>
  }

  export type ClientUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<ClientCreateWithoutNotificationsInput, ClientUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutNotificationsInput
    upsert?: ClientUpsertWithoutNotificationsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<ClientUpdateWithoutNotificationsInput, ClientUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumClientEmailChangeRequestStatusFilter = {
    equals?: ClientEmailChangeRequestStatus
    in?: Enumerable<ClientEmailChangeRequestStatus>
    notIn?: Enumerable<ClientEmailChangeRequestStatus>
    not?: NestedEnumClientEmailChangeRequestStatusFilter | ClientEmailChangeRequestStatus
  }

  export type NestedEnumClientEmailChangeRequestStatusWithAggregatesFilter = {
    equals?: ClientEmailChangeRequestStatus
    in?: Enumerable<ClientEmailChangeRequestStatus>
    notIn?: Enumerable<ClientEmailChangeRequestStatus>
    not?: NestedEnumClientEmailChangeRequestStatusWithAggregatesFilter | ClientEmailChangeRequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumClientEmailChangeRequestStatusFilter
    _max?: NestedEnumClientEmailChangeRequestStatusFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumContractWithdrawRequestStatusFilter = {
    equals?: ContractWithdrawRequestStatus
    in?: Enumerable<ContractWithdrawRequestStatus>
    notIn?: Enumerable<ContractWithdrawRequestStatus>
    not?: NestedEnumContractWithdrawRequestStatusFilter | ContractWithdrawRequestStatus
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type NestedEnumContractWithdrawRequestStatusWithAggregatesFilter = {
    equals?: ContractWithdrawRequestStatus
    in?: Enumerable<ContractWithdrawRequestStatus>
    notIn?: Enumerable<ContractWithdrawRequestStatus>
    not?: NestedEnumContractWithdrawRequestStatusWithAggregatesFilter | ContractWithdrawRequestStatus
    _count?: NestedIntFilter
    _min?: NestedEnumContractWithdrawRequestStatusFilter
    _max?: NestedEnumContractWithdrawRequestStatusFilter
  }

  export type NestedEnumNotificationTypeFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeFilter | NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter = {
    equals?: NotificationType
    in?: Enumerable<NotificationType>
    notIn?: Enumerable<NotificationType>
    not?: NestedEnumNotificationTypeWithAggregatesFilter | NotificationType
    _count?: NestedIntFilter
    _min?: NestedEnumNotificationTypeFilter
    _max?: NestedEnumNotificationTypeFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type PanelUserSessionCreateWithoutPanelUserInput = {
    token: string
  }

  export type PanelUserSessionUncheckedCreateWithoutPanelUserInput = {
    token: string
  }

  export type PanelUserSessionCreateOrConnectWithoutPanelUserInput = {
    where: PanelUserSessionWhereUniqueInput
    create: XOR<PanelUserSessionCreateWithoutPanelUserInput, PanelUserSessionUncheckedCreateWithoutPanelUserInput>
  }

  export type PanelUserSessionCreateManyPanelUserInputEnvelope = {
    data: Enumerable<PanelUserSessionCreateManyPanelUserInput>
    skipDuplicates?: boolean
  }

  export type PanelUserSessionUpsertWithWhereUniqueWithoutPanelUserInput = {
    where: PanelUserSessionWhereUniqueInput
    update: XOR<PanelUserSessionUpdateWithoutPanelUserInput, PanelUserSessionUncheckedUpdateWithoutPanelUserInput>
    create: XOR<PanelUserSessionCreateWithoutPanelUserInput, PanelUserSessionUncheckedCreateWithoutPanelUserInput>
  }

  export type PanelUserSessionUpdateWithWhereUniqueWithoutPanelUserInput = {
    where: PanelUserSessionWhereUniqueInput
    data: XOR<PanelUserSessionUpdateWithoutPanelUserInput, PanelUserSessionUncheckedUpdateWithoutPanelUserInput>
  }

  export type PanelUserSessionUpdateManyWithWhereWithoutPanelUserInput = {
    where: PanelUserSessionScalarWhereInput
    data: XOR<PanelUserSessionUpdateManyMutationInput, PanelUserSessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type PanelUserSessionScalarWhereInput = {
    AND?: Enumerable<PanelUserSessionScalarWhereInput>
    OR?: Enumerable<PanelUserSessionScalarWhereInput>
    NOT?: Enumerable<PanelUserSessionScalarWhereInput>
    token?: StringFilter | string
    panelUserId?: StringFilter | string
  }

  export type PanelUserCreateWithoutSessionsInput = {
    id: string
    email: string
    passwordHash: string
    name: string
  }

  export type PanelUserUncheckedCreateWithoutSessionsInput = {
    id: string
    email: string
    passwordHash: string
    name: string
  }

  export type PanelUserCreateOrConnectWithoutSessionsInput = {
    where: PanelUserWhereUniqueInput
    create: XOR<PanelUserCreateWithoutSessionsInput, PanelUserUncheckedCreateWithoutSessionsInput>
  }

  export type PanelUserUpsertWithoutSessionsInput = {
    update: XOR<PanelUserUpdateWithoutSessionsInput, PanelUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<PanelUserCreateWithoutSessionsInput, PanelUserUncheckedCreateWithoutSessionsInput>
  }

  export type PanelUserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PanelUserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPasswordResetRequestCreateWithoutClientInput = {
    token: string
    createdAt: Date | string
    email: string
    wasUsed: boolean
  }

  export type ClientPasswordResetRequestUncheckedCreateWithoutClientInput = {
    token: string
    createdAt: Date | string
    email: string
    wasUsed: boolean
  }

  export type ClientPasswordResetRequestCreateOrConnectWithoutClientInput = {
    where: ClientPasswordResetRequestWhereUniqueInput
    create: XOR<ClientPasswordResetRequestCreateWithoutClientInput, ClientPasswordResetRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientPasswordResetRequestCreateManyClientInputEnvelope = {
    data: Enumerable<ClientPasswordResetRequestCreateManyClientInput>
    skipDuplicates?: boolean
  }

  export type ClientEmailChangeRequestCreateWithoutClientInput = {
    id: string
    status: ClientEmailChangeRequestStatus
  }

  export type ClientEmailChangeRequestUncheckedCreateWithoutClientInput = {
    id: string
    status: ClientEmailChangeRequestStatus
  }

  export type ClientEmailChangeRequestCreateOrConnectWithoutClientInput = {
    where: ClientEmailChangeRequestWhereUniqueInput
    create: XOR<ClientEmailChangeRequestCreateWithoutClientInput, ClientEmailChangeRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientEmailChangeRequestCreateManyClientInputEnvelope = {
    data: Enumerable<ClientEmailChangeRequestCreateManyClientInput>
    skipDuplicates?: boolean
  }

  export type ClientPushTokenCreateWithoutClientInput = {
    token: string
  }

  export type ClientPushTokenUncheckedCreateWithoutClientInput = {
    token: string
  }

  export type ClientPushTokenCreateOrConnectWithoutClientInput = {
    where: ClientPushTokenWhereUniqueInput
    create: XOR<ClientPushTokenCreateWithoutClientInput, ClientPushTokenUncheckedCreateWithoutClientInput>
  }

  export type ClientPushTokenCreateManyClientInputEnvelope = {
    data: Enumerable<ClientPushTokenCreateManyClientInput>
    skipDuplicates?: boolean
  }

  export type ClientSessionCreateWithoutClientInput = {
    token: string
  }

  export type ClientSessionUncheckedCreateWithoutClientInput = {
    token: string
  }

  export type ClientSessionCreateOrConnectWithoutClientInput = {
    where: ClientSessionWhereUniqueInput
    create: XOR<ClientSessionCreateWithoutClientInput, ClientSessionUncheckedCreateWithoutClientInput>
  }

  export type ClientSessionCreateManyClientInputEnvelope = {
    data: Enumerable<ClientSessionCreateManyClientInput>
    skipDuplicates?: boolean
  }

  export type NotificationsClientsCreateWithoutClientInput = {
    isViewed: boolean
    notification: NotificationCreateNestedOneWithoutClientsInput
  }

  export type NotificationsClientsUncheckedCreateWithoutClientInput = {
    isViewed: boolean
    notificationId: string
  }

  export type NotificationsClientsCreateOrConnectWithoutClientInput = {
    where: NotificationsClientsWhereUniqueInput
    create: XOR<NotificationsClientsCreateWithoutClientInput, NotificationsClientsUncheckedCreateWithoutClientInput>
  }

  export type NotificationsClientsCreateManyClientInputEnvelope = {
    data: Enumerable<NotificationsClientsCreateManyClientInput>
    skipDuplicates?: boolean
  }

  export type ClientPasswordResetRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientPasswordResetRequestWhereUniqueInput
    update: XOR<ClientPasswordResetRequestUpdateWithoutClientInput, ClientPasswordResetRequestUncheckedUpdateWithoutClientInput>
    create: XOR<ClientPasswordResetRequestCreateWithoutClientInput, ClientPasswordResetRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientPasswordResetRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientPasswordResetRequestWhereUniqueInput
    data: XOR<ClientPasswordResetRequestUpdateWithoutClientInput, ClientPasswordResetRequestUncheckedUpdateWithoutClientInput>
  }

  export type ClientPasswordResetRequestUpdateManyWithWhereWithoutClientInput = {
    where: ClientPasswordResetRequestScalarWhereInput
    data: XOR<ClientPasswordResetRequestUpdateManyMutationInput, ClientPasswordResetRequestUncheckedUpdateManyWithoutPasswordResetRequestsInput>
  }

  export type ClientPasswordResetRequestScalarWhereInput = {
    AND?: Enumerable<ClientPasswordResetRequestScalarWhereInput>
    OR?: Enumerable<ClientPasswordResetRequestScalarWhereInput>
    NOT?: Enumerable<ClientPasswordResetRequestScalarWhereInput>
    token?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    wasUsed?: BoolFilter | boolean
    clientId?: StringFilter | string
  }

  export type ClientEmailChangeRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientEmailChangeRequestWhereUniqueInput
    update: XOR<ClientEmailChangeRequestUpdateWithoutClientInput, ClientEmailChangeRequestUncheckedUpdateWithoutClientInput>
    create: XOR<ClientEmailChangeRequestCreateWithoutClientInput, ClientEmailChangeRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientEmailChangeRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientEmailChangeRequestWhereUniqueInput
    data: XOR<ClientEmailChangeRequestUpdateWithoutClientInput, ClientEmailChangeRequestUncheckedUpdateWithoutClientInput>
  }

  export type ClientEmailChangeRequestUpdateManyWithWhereWithoutClientInput = {
    where: ClientEmailChangeRequestScalarWhereInput
    data: XOR<ClientEmailChangeRequestUpdateManyMutationInput, ClientEmailChangeRequestUncheckedUpdateManyWithoutEmailChangeRequestsInput>
  }

  export type ClientEmailChangeRequestScalarWhereInput = {
    AND?: Enumerable<ClientEmailChangeRequestScalarWhereInput>
    OR?: Enumerable<ClientEmailChangeRequestScalarWhereInput>
    NOT?: Enumerable<ClientEmailChangeRequestScalarWhereInput>
    id?: StringFilter | string
    status?: EnumClientEmailChangeRequestStatusFilter | ClientEmailChangeRequestStatus
    clientId?: StringFilter | string
  }

  export type ClientPushTokenUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientPushTokenWhereUniqueInput
    update: XOR<ClientPushTokenUpdateWithoutClientInput, ClientPushTokenUncheckedUpdateWithoutClientInput>
    create: XOR<ClientPushTokenCreateWithoutClientInput, ClientPushTokenUncheckedCreateWithoutClientInput>
  }

  export type ClientPushTokenUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientPushTokenWhereUniqueInput
    data: XOR<ClientPushTokenUpdateWithoutClientInput, ClientPushTokenUncheckedUpdateWithoutClientInput>
  }

  export type ClientPushTokenUpdateManyWithWhereWithoutClientInput = {
    where: ClientPushTokenScalarWhereInput
    data: XOR<ClientPushTokenUpdateManyMutationInput, ClientPushTokenUncheckedUpdateManyWithoutPushTokensInput>
  }

  export type ClientPushTokenScalarWhereInput = {
    AND?: Enumerable<ClientPushTokenScalarWhereInput>
    OR?: Enumerable<ClientPushTokenScalarWhereInput>
    NOT?: Enumerable<ClientPushTokenScalarWhereInput>
    token?: StringFilter | string
    clientId?: StringFilter | string
  }

  export type ClientSessionUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientSessionWhereUniqueInput
    update: XOR<ClientSessionUpdateWithoutClientInput, ClientSessionUncheckedUpdateWithoutClientInput>
    create: XOR<ClientSessionCreateWithoutClientInput, ClientSessionUncheckedCreateWithoutClientInput>
  }

  export type ClientSessionUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientSessionWhereUniqueInput
    data: XOR<ClientSessionUpdateWithoutClientInput, ClientSessionUncheckedUpdateWithoutClientInput>
  }

  export type ClientSessionUpdateManyWithWhereWithoutClientInput = {
    where: ClientSessionScalarWhereInput
    data: XOR<ClientSessionUpdateManyMutationInput, ClientSessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type ClientSessionScalarWhereInput = {
    AND?: Enumerable<ClientSessionScalarWhereInput>
    OR?: Enumerable<ClientSessionScalarWhereInput>
    NOT?: Enumerable<ClientSessionScalarWhereInput>
    token?: StringFilter | string
    clientId?: StringFilter | string
  }

  export type NotificationsClientsUpsertWithWhereUniqueWithoutClientInput = {
    where: NotificationsClientsWhereUniqueInput
    update: XOR<NotificationsClientsUpdateWithoutClientInput, NotificationsClientsUncheckedUpdateWithoutClientInput>
    create: XOR<NotificationsClientsCreateWithoutClientInput, NotificationsClientsUncheckedCreateWithoutClientInput>
  }

  export type NotificationsClientsUpdateWithWhereUniqueWithoutClientInput = {
    where: NotificationsClientsWhereUniqueInput
    data: XOR<NotificationsClientsUpdateWithoutClientInput, NotificationsClientsUncheckedUpdateWithoutClientInput>
  }

  export type NotificationsClientsUpdateManyWithWhereWithoutClientInput = {
    where: NotificationsClientsScalarWhereInput
    data: XOR<NotificationsClientsUpdateManyMutationInput, NotificationsClientsUncheckedUpdateManyWithoutNotificationsInput>
  }

  export type NotificationsClientsScalarWhereInput = {
    AND?: Enumerable<NotificationsClientsScalarWhereInput>
    OR?: Enumerable<NotificationsClientsScalarWhereInput>
    NOT?: Enumerable<NotificationsClientsScalarWhereInput>
    isViewed?: BoolFilter | boolean
    notificationId?: StringFilter | string
    clientId?: StringFilter | string
  }

  export type ClientCreateWithoutSessionsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSessionsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenUncheckedCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSessionsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
  }

  export type ClientUpsertWithoutSessionsInput = {
    update: XOR<ClientUpdateWithoutSessionsInput, ClientUncheckedUpdateWithoutSessionsInput>
    create: XOR<ClientCreateWithoutSessionsInput, ClientUncheckedCreateWithoutSessionsInput>
  }

  export type ClientUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUncheckedUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutPasswordResetRequestsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    emailChangeRequests?: ClientEmailChangeRequestCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenCreateNestedManyWithoutClientInput
    sessions?: ClientSessionCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPasswordResetRequestsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    emailChangeRequests?: ClientEmailChangeRequestUncheckedCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenUncheckedCreateNestedManyWithoutClientInput
    sessions?: ClientSessionUncheckedCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPasswordResetRequestsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPasswordResetRequestsInput, ClientUncheckedCreateWithoutPasswordResetRequestsInput>
  }

  export type ClientUpsertWithoutPasswordResetRequestsInput = {
    update: XOR<ClientUpdateWithoutPasswordResetRequestsInput, ClientUncheckedUpdateWithoutPasswordResetRequestsInput>
    create: XOR<ClientCreateWithoutPasswordResetRequestsInput, ClientUncheckedCreateWithoutPasswordResetRequestsInput>
  }

  export type ClientUpdateWithoutPasswordResetRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailChangeRequests?: ClientEmailChangeRequestUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPasswordResetRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emailChangeRequests?: ClientEmailChangeRequestUncheckedUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUncheckedUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUncheckedUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutEmailChangeRequestsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenCreateNestedManyWithoutClientInput
    sessions?: ClientSessionCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEmailChangeRequestsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenUncheckedCreateNestedManyWithoutClientInput
    sessions?: ClientSessionUncheckedCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEmailChangeRequestsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEmailChangeRequestsInput, ClientUncheckedCreateWithoutEmailChangeRequestsInput>
  }

  export type ClientUpsertWithoutEmailChangeRequestsInput = {
    update: XOR<ClientUpdateWithoutEmailChangeRequestsInput, ClientUncheckedUpdateWithoutEmailChangeRequestsInput>
    create: XOR<ClientCreateWithoutEmailChangeRequestsInput, ClientUncheckedCreateWithoutEmailChangeRequestsInput>
  }

  export type ClientUpdateWithoutEmailChangeRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEmailChangeRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUncheckedUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUncheckedUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutPushTokensInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestCreateNestedManyWithoutClientInput
    sessions?: ClientSessionCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPushTokensInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedCreateNestedManyWithoutClientInput
    sessions?: ClientSessionUncheckedCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
    notifications?: NotificationsClientsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPushTokensInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPushTokensInput, ClientUncheckedCreateWithoutPushTokensInput>
  }

  export type ClientUpsertWithoutPushTokensInput = {
    update: XOR<ClientUpdateWithoutPushTokensInput, ClientUncheckedUpdateWithoutPushTokensInput>
    create: XOR<ClientCreateWithoutPushTokensInput, ClientUncheckedCreateWithoutPushTokensInput>
  }

  export type ClientUpdateWithoutPushTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPushTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUncheckedUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationsClientsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type NotificationsClientsCreateWithoutNotificationInput = {
    isViewed: boolean
    client: ClientCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsClientsUncheckedCreateWithoutNotificationInput = {
    isViewed: boolean
    clientId: string
  }

  export type NotificationsClientsCreateOrConnectWithoutNotificationInput = {
    where: NotificationsClientsWhereUniqueInput
    create: XOR<NotificationsClientsCreateWithoutNotificationInput, NotificationsClientsUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationsClientsCreateManyNotificationInputEnvelope = {
    data: Enumerable<NotificationsClientsCreateManyNotificationInput>
    skipDuplicates?: boolean
  }

  export type NotificationsClientsUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationsClientsWhereUniqueInput
    update: XOR<NotificationsClientsUpdateWithoutNotificationInput, NotificationsClientsUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationsClientsCreateWithoutNotificationInput, NotificationsClientsUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationsClientsUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationsClientsWhereUniqueInput
    data: XOR<NotificationsClientsUpdateWithoutNotificationInput, NotificationsClientsUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationsClientsUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationsClientsScalarWhereInput
    data: XOR<NotificationsClientsUpdateManyMutationInput, NotificationsClientsUncheckedUpdateManyWithoutClientsInput>
  }

  export type NotificationCreateWithoutClientsInput = {
    id: string
    type: NotificationType
    title: string
    body: string
    createdAt: Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedCreateWithoutClientsInput = {
    id: string
    type: NotificationType
    title: string
    body: string
    createdAt: Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NotificationCreateOrConnectWithoutClientsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutClientsInput, NotificationUncheckedCreateWithoutClientsInput>
  }

  export type ClientCreateWithoutNotificationsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenCreateNestedManyWithoutClientInput
    sessions?: ClientSessionCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
  }

  export type ClientUncheckedCreateWithoutNotificationsInput = {
    id: string
    email: string
    passwordHash: string
    numericPasswordHash: string
    name: string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedCreateNestedManyWithoutClientInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedCreateNestedManyWithoutClientInput
    pushTokens?: ClientPushTokenUncheckedCreateNestedManyWithoutClientInput
    sessions?: ClientSessionUncheckedCreateNestedManyWithoutClientInput
    notifyAnnouncements: boolean
    notifyNewProducts: boolean
    notifyEventsAndActions: boolean
  }

  export type ClientCreateOrConnectWithoutNotificationsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutNotificationsInput, ClientUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationUpsertWithoutClientsInput = {
    update: XOR<NotificationUpdateWithoutClientsInput, NotificationUncheckedUpdateWithoutClientsInput>
    create: XOR<NotificationCreateWithoutClientsInput, NotificationUncheckedCreateWithoutClientsInput>
  }

  export type NotificationUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
  }

  export type NotificationUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | NotificationType
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ClientUpsertWithoutNotificationsInput = {
    update: XOR<ClientUpdateWithoutNotificationsInput, ClientUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ClientCreateWithoutNotificationsInput, ClientUncheckedCreateWithoutNotificationsInput>
  }

  export type ClientUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    numericPasswordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordResetRequests?: ClientPasswordResetRequestUncheckedUpdateManyWithoutClientNestedInput
    emailChangeRequests?: ClientEmailChangeRequestUncheckedUpdateManyWithoutClientNestedInput
    pushTokens?: ClientPushTokenUncheckedUpdateManyWithoutClientNestedInput
    sessions?: ClientSessionUncheckedUpdateManyWithoutClientNestedInput
    notifyAnnouncements?: BoolFieldUpdateOperationsInput | boolean
    notifyNewProducts?: BoolFieldUpdateOperationsInput | boolean
    notifyEventsAndActions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PanelUserSessionCreateManyPanelUserInput = {
    token: string
  }

  export type PanelUserSessionUpdateWithoutPanelUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PanelUserSessionUncheckedUpdateWithoutPanelUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PanelUserSessionUncheckedUpdateManyWithoutSessionsInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPasswordResetRequestCreateManyClientInput = {
    token: string
    createdAt: Date | string
    email: string
    wasUsed: boolean
  }

  export type ClientEmailChangeRequestCreateManyClientInput = {
    id: string
    status: ClientEmailChangeRequestStatus
  }

  export type ClientPushTokenCreateManyClientInput = {
    token: string
  }

  export type ClientSessionCreateManyClientInput = {
    token: string
  }

  export type NotificationsClientsCreateManyClientInput = {
    isViewed: boolean
    notificationId: string
  }

  export type ClientPasswordResetRequestUpdateWithoutClientInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    wasUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientPasswordResetRequestUncheckedUpdateWithoutClientInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    wasUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientPasswordResetRequestUncheckedUpdateManyWithoutPasswordResetRequestsInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    wasUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClientEmailChangeRequestUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput | ClientEmailChangeRequestStatus
  }

  export type ClientEmailChangeRequestUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput | ClientEmailChangeRequestStatus
  }

  export type ClientEmailChangeRequestUncheckedUpdateManyWithoutEmailChangeRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumClientEmailChangeRequestStatusFieldUpdateOperationsInput | ClientEmailChangeRequestStatus
  }

  export type ClientPushTokenUpdateWithoutClientInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPushTokenUncheckedUpdateWithoutClientInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientPushTokenUncheckedUpdateManyWithoutPushTokensInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientSessionUpdateWithoutClientInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientSessionUncheckedUpdateWithoutClientInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ClientSessionUncheckedUpdateManyWithoutSessionsInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsClientsUpdateWithoutClientInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    notification?: NotificationUpdateOneRequiredWithoutClientsNestedInput
  }

  export type NotificationsClientsUncheckedUpdateWithoutClientInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsClientsUncheckedUpdateManyWithoutNotificationsInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    notificationId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsClientsCreateManyNotificationInput = {
    isViewed: boolean
    clientId: string
  }

  export type NotificationsClientsUpdateWithoutNotificationInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    client?: ClientUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsClientsUncheckedUpdateWithoutNotificationInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationsClientsUncheckedUpdateManyWithoutClientsInput = {
    isViewed?: BoolFieldUpdateOperationsInput | boolean
    clientId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}