
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model Battle
 * 
 */
export type Battle = $Result.DefaultSelection<Prisma.$BattlePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.battle`: Exposes CRUD operations for the **Battle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battles
    * const battles = await prisma.battle.findMany()
    * ```
    */
  get battle(): Prisma.BattleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Character: 'Character',
    Battle: 'Battle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "character" | "battle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      Battle: {
        payload: Prisma.$BattlePayload<ExtArgs>
        fields: Prisma.BattleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findFirst: {
            args: Prisma.BattleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findMany: {
            args: Prisma.BattleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          create: {
            args: Prisma.BattleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          createMany: {
            args: Prisma.BattleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BattleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          delete: {
            args: Prisma.BattleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          update: {
            args: Prisma.BattleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          deleteMany: {
            args: Prisma.BattleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BattleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          upsert: {
            args: Prisma.BattleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          aggregate: {
            args: Prisma.BattleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle>
          }
          groupBy: {
            args: Prisma.BattleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleCountArgs<ExtArgs>
            result: $Utils.Optional<BattleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    character?: CharacterOmit
    battle?: BattleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    battlesAsPlayer1: number
    battlesAsPlayer2: number
    wonBattles: number
    battlesAsTurn: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    battlesAsPlayer1?: boolean | UserCountOutputTypeCountBattlesAsPlayer1Args
    battlesAsPlayer2?: boolean | UserCountOutputTypeCountBattlesAsPlayer2Args
    wonBattles?: boolean | UserCountOutputTypeCountWonBattlesArgs
    battlesAsTurn?: boolean | UserCountOutputTypeCountBattlesAsTurnArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBattlesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBattlesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWonBattlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBattlesAsTurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    usedAsPlayer1: number
    usedAsPlayer2: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usedAsPlayer1?: boolean | CharacterCountOutputTypeCountUsedAsPlayer1Args
    usedAsPlayer2?: boolean | CharacterCountOutputTypeCountUsedAsPlayer2Args
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountUsedAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountUsedAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    wins: number | null
    losses: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    wins: number | null
    losses: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    level: number | null
    xp: number | null
    wins: number | null
    losses: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    level: number | null
    xp: number | null
    wins: number | null
    losses: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    level: number
    xp: number
    wins: number
    losses: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    wins?: true
    losses?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    wins?: true
    losses?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    level?: true
    xp?: true
    wins?: true
    losses?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    level?: true
    xp?: true
    wins?: true
    losses?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    level?: true
    xp?: true
    wins?: true
    losses?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    level: number
    xp: number
    wins: number
    losses: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    level?: boolean
    xp?: boolean
    wins?: boolean
    losses?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    battlesAsPlayer1?: boolean | User$battlesAsPlayer1Args<ExtArgs>
    battlesAsPlayer2?: boolean | User$battlesAsPlayer2Args<ExtArgs>
    wonBattles?: boolean | User$wonBattlesArgs<ExtArgs>
    battlesAsTurn?: boolean | User$battlesAsTurnArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    level?: boolean
    xp?: boolean
    wins?: boolean
    losses?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    level?: boolean
    xp?: boolean
    wins?: boolean
    losses?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    level?: boolean
    xp?: boolean
    wins?: boolean
    losses?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "level" | "xp" | "wins" | "losses", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    battlesAsPlayer1?: boolean | User$battlesAsPlayer1Args<ExtArgs>
    battlesAsPlayer2?: boolean | User$battlesAsPlayer2Args<ExtArgs>
    wonBattles?: boolean | User$wonBattlesArgs<ExtArgs>
    battlesAsTurn?: boolean | User$battlesAsTurnArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
      battlesAsPlayer1: Prisma.$BattlePayload<ExtArgs>[]
      battlesAsPlayer2: Prisma.$BattlePayload<ExtArgs>[]
      wonBattles: Prisma.$BattlePayload<ExtArgs>[]
      battlesAsTurn: Prisma.$BattlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      level: number
      xp: number
      wins: number
      losses: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsPlayer1<T extends User$battlesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, User$battlesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsPlayer2<T extends User$battlesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, User$battlesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wonBattles<T extends User$wonBattlesArgs<ExtArgs> = {}>(args?: Subset<T, User$wonBattlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    battlesAsTurn<T extends User$battlesAsTurnArgs<ExtArgs> = {}>(args?: Subset<T, User$battlesAsTurnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'Int'>
    readonly xp: FieldRef<"User", 'Int'>
    readonly wins: FieldRef<"User", 'Int'>
    readonly losses: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.battlesAsPlayer1
   */
  export type User$battlesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User.battlesAsPlayer2
   */
  export type User$battlesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User.wonBattles
   */
  export type User$wonBattlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User.battlesAsTurn
   */
  export type User$battlesAsTurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterAvgAggregateOutputType = {
    id: number | null
    hp: number | null
    attack: number | null
    level: number | null
  }

  export type CharacterSumAggregateOutputType = {
    id: number | null
    hp: number | null
    attack: number | null
    level: number | null
  }

  export type CharacterMinAggregateOutputType = {
    id: number | null
    name: string | null
    hp: number | null
    attack: number | null
    level: number | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    hp: number | null
    attack: number | null
    level: number | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    name: number
    hp: number
    attack: number
    level: number
    _all: number
  }


  export type CharacterAvgAggregateInputType = {
    id?: true
    hp?: true
    attack?: true
    level?: true
  }

  export type CharacterSumAggregateInputType = {
    id?: true
    hp?: true
    attack?: true
    level?: true
  }

  export type CharacterMinAggregateInputType = {
    id?: true
    name?: true
    hp?: true
    attack?: true
    level?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    name?: true
    hp?: true
    attack?: true
    level?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    name?: true
    hp?: true
    attack?: true
    level?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _avg?: CharacterAvgAggregateInputType
    _sum?: CharacterSumAggregateInputType
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: number
    name: string
    hp: number
    attack: number
    level: number
    _count: CharacterCountAggregateOutputType | null
    _avg: CharacterAvgAggregateOutputType | null
    _sum: CharacterSumAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hp?: boolean
    attack?: boolean
    level?: boolean
    usedAsPlayer1?: boolean | Character$usedAsPlayer1Args<ExtArgs>
    usedAsPlayer2?: boolean | Character$usedAsPlayer2Args<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hp?: boolean
    attack?: boolean
    level?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hp?: boolean
    attack?: boolean
    level?: boolean
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    name?: boolean
    hp?: boolean
    attack?: boolean
    level?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "hp" | "attack" | "level", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usedAsPlayer1?: boolean | Character$usedAsPlayer1Args<ExtArgs>
    usedAsPlayer2?: boolean | Character$usedAsPlayer2Args<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      usedAsPlayer1: Prisma.$BattlePayload<ExtArgs>[]
      usedAsPlayer2: Prisma.$BattlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      hp: number
      attack: number
      level: number
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
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
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usedAsPlayer1<T extends Character$usedAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, Character$usedAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usedAsPlayer2<T extends Character$usedAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, Character$usedAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'Int'>
    readonly name: FieldRef<"Character", 'String'>
    readonly hp: FieldRef<"Character", 'Int'>
    readonly attack: FieldRef<"Character", 'Int'>
    readonly level: FieldRef<"Character", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.usedAsPlayer1
   */
  export type Character$usedAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Character.usedAsPlayer2
   */
  export type Character$usedAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    cursor?: BattleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model Battle
   */

  export type AggregateBattle = {
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  export type BattleAvgAggregateOutputType = {
    id: number | null
    player1Id: number | null
    player2Id: number | null
    player1CharId: number | null
    player2CharId: number | null
    player1CurrentHp: number | null
    player2CurrentHp: number | null
    turnUserId: number | null
    winnerId: number | null
  }

  export type BattleSumAggregateOutputType = {
    id: number | null
    player1Id: number | null
    player2Id: number | null
    player1CharId: number | null
    player2CharId: number | null
    player1CurrentHp: number | null
    player2CurrentHp: number | null
    turnUserId: number | null
    winnerId: number | null
  }

  export type BattleMinAggregateOutputType = {
    id: number | null
    status: string | null
    player1Id: number | null
    player2Id: number | null
    player1CharId: number | null
    player2CharId: number | null
    player1CurrentHp: number | null
    player2CurrentHp: number | null
    turnUserId: number | null
    winnerId: number | null
    createdAt: Date | null
  }

  export type BattleMaxAggregateOutputType = {
    id: number | null
    status: string | null
    player1Id: number | null
    player2Id: number | null
    player1CharId: number | null
    player2CharId: number | null
    player1CurrentHp: number | null
    player2CurrentHp: number | null
    turnUserId: number | null
    winnerId: number | null
    createdAt: Date | null
  }

  export type BattleCountAggregateOutputType = {
    id: number
    status: number
    player1Id: number
    player2Id: number
    player1CharId: number
    player2CharId: number
    player1CurrentHp: number
    player2CurrentHp: number
    turnUserId: number
    winnerId: number
    createdAt: number
    _all: number
  }


  export type BattleAvgAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    player1CharId?: true
    player2CharId?: true
    player1CurrentHp?: true
    player2CurrentHp?: true
    turnUserId?: true
    winnerId?: true
  }

  export type BattleSumAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    player1CharId?: true
    player2CharId?: true
    player1CurrentHp?: true
    player2CurrentHp?: true
    turnUserId?: true
    winnerId?: true
  }

  export type BattleMinAggregateInputType = {
    id?: true
    status?: true
    player1Id?: true
    player2Id?: true
    player1CharId?: true
    player2CharId?: true
    player1CurrentHp?: true
    player2CurrentHp?: true
    turnUserId?: true
    winnerId?: true
    createdAt?: true
  }

  export type BattleMaxAggregateInputType = {
    id?: true
    status?: true
    player1Id?: true
    player2Id?: true
    player1CharId?: true
    player2CharId?: true
    player1CurrentHp?: true
    player2CurrentHp?: true
    turnUserId?: true
    winnerId?: true
    createdAt?: true
  }

  export type BattleCountAggregateInputType = {
    id?: true
    status?: true
    player1Id?: true
    player2Id?: true
    player1CharId?: true
    player2CharId?: true
    player1CurrentHp?: true
    player2CurrentHp?: true
    turnUserId?: true
    winnerId?: true
    createdAt?: true
    _all?: true
  }

  export type BattleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battle to aggregate.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Battles
    **/
    _count?: true | BattleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleMaxAggregateInputType
  }

  export type GetBattleAggregateType<T extends BattleAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle[P]>
      : GetScalarType<T[P], AggregateBattle[P]>
  }




  export type BattleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithAggregationInput | BattleOrderByWithAggregationInput[]
    by: BattleScalarFieldEnum[] | BattleScalarFieldEnum
    having?: BattleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleCountAggregateInputType | true
    _avg?: BattleAvgAggregateInputType
    _sum?: BattleSumAggregateInputType
    _min?: BattleMinAggregateInputType
    _max?: BattleMaxAggregateInputType
  }

  export type BattleGroupByOutputType = {
    id: number
    status: string
    player1Id: number
    player2Id: number | null
    player1CharId: number
    player2CharId: number | null
    player1CurrentHp: number
    player2CurrentHp: number | null
    turnUserId: number | null
    winnerId: number | null
    createdAt: Date
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  type GetBattleGroupByPayload<T extends BattleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleGroupByOutputType[P]>
            : GetScalarType<T[P], BattleGroupByOutputType[P]>
        }
      >
    >


  export type BattleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1CharId?: boolean
    player2CharId?: boolean
    player1CurrentHp?: boolean
    player2CurrentHp?: boolean
    turnUserId?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    turnUser?: boolean | Battle$turnUserArgs<ExtArgs>
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1Char?: boolean | CharacterDefaultArgs<ExtArgs>
    player2Char?: boolean | Battle$player2CharArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1CharId?: boolean
    player2CharId?: boolean
    player1CurrentHp?: boolean
    player2CurrentHp?: boolean
    turnUserId?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    turnUser?: boolean | Battle$turnUserArgs<ExtArgs>
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1Char?: boolean | CharacterDefaultArgs<ExtArgs>
    player2Char?: boolean | Battle$player2CharArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1CharId?: boolean
    player2CharId?: boolean
    player1CurrentHp?: boolean
    player2CurrentHp?: boolean
    turnUserId?: boolean
    winnerId?: boolean
    createdAt?: boolean
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    turnUser?: boolean | Battle$turnUserArgs<ExtArgs>
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1Char?: boolean | CharacterDefaultArgs<ExtArgs>
    player2Char?: boolean | Battle$player2CharArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectScalar = {
    id?: boolean
    status?: boolean
    player1Id?: boolean
    player2Id?: boolean
    player1CharId?: boolean
    player2CharId?: boolean
    player1CurrentHp?: boolean
    player2CurrentHp?: boolean
    turnUserId?: boolean
    winnerId?: boolean
    createdAt?: boolean
  }

  export type BattleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "player1Id" | "player2Id" | "player1CharId" | "player2CharId" | "player1CurrentHp" | "player2CurrentHp" | "turnUserId" | "winnerId" | "createdAt", ExtArgs["result"]["battle"]>
  export type BattleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    turnUser?: boolean | Battle$turnUserArgs<ExtArgs>
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1Char?: boolean | CharacterDefaultArgs<ExtArgs>
    player2Char?: boolean | Battle$player2CharArgs<ExtArgs>
  }
  export type BattleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    turnUser?: boolean | Battle$turnUserArgs<ExtArgs>
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1Char?: boolean | CharacterDefaultArgs<ExtArgs>
    player2Char?: boolean | Battle$player2CharArgs<ExtArgs>
  }
  export type BattleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | UserDefaultArgs<ExtArgs>
    player2?: boolean | Battle$player2Args<ExtArgs>
    turnUser?: boolean | Battle$turnUserArgs<ExtArgs>
    winner?: boolean | Battle$winnerArgs<ExtArgs>
    player1Char?: boolean | CharacterDefaultArgs<ExtArgs>
    player2Char?: boolean | Battle$player2CharArgs<ExtArgs>
  }

  export type $BattlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Battle"
    objects: {
      player1: Prisma.$UserPayload<ExtArgs>
      player2: Prisma.$UserPayload<ExtArgs> | null
      turnUser: Prisma.$UserPayload<ExtArgs> | null
      winner: Prisma.$UserPayload<ExtArgs> | null
      player1Char: Prisma.$CharacterPayload<ExtArgs>
      player2Char: Prisma.$CharacterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      player1Id: number
      player2Id: number | null
      player1CharId: number
      player2CharId: number | null
      player1CurrentHp: number
      player2CurrentHp: number | null
      turnUserId: number | null
      winnerId: number | null
      createdAt: Date
    }, ExtArgs["result"]["battle"]>
    composites: {}
  }

  type BattleGetPayload<S extends boolean | null | undefined | BattleDefaultArgs> = $Result.GetResult<Prisma.$BattlePayload, S>

  type BattleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BattleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BattleCountAggregateInputType | true
    }

  export interface BattleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Battle'], meta: { name: 'Battle' } }
    /**
     * Find zero or one Battle that matches the filter.
     * @param {BattleFindUniqueArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleFindUniqueArgs>(args: SelectSubset<T, BattleFindUniqueArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Battle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BattleFindUniqueOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleFindFirstArgs>(args?: SelectSubset<T, BattleFindFirstArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Battle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Battles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battles
     * const battles = await prisma.battle.findMany()
     * 
     * // Get first 10 Battles
     * const battles = await prisma.battle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleWithIdOnly = await prisma.battle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleFindManyArgs>(args?: SelectSubset<T, BattleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Battle.
     * @param {BattleCreateArgs} args - Arguments to create a Battle.
     * @example
     * // Create one Battle
     * const Battle = await prisma.battle.create({
     *   data: {
     *     // ... data to create a Battle
     *   }
     * })
     * 
     */
    create<T extends BattleCreateArgs>(args: SelectSubset<T, BattleCreateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Battles.
     * @param {BattleCreateManyArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleCreateManyArgs>(args?: SelectSubset<T, BattleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Battles and returns the data saved in the database.
     * @param {BattleCreateManyAndReturnArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Battles and only return the `id`
     * const battleWithIdOnly = await prisma.battle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BattleCreateManyAndReturnArgs>(args?: SelectSubset<T, BattleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Battle.
     * @param {BattleDeleteArgs} args - Arguments to delete one Battle.
     * @example
     * // Delete one Battle
     * const Battle = await prisma.battle.delete({
     *   where: {
     *     // ... filter to delete one Battle
     *   }
     * })
     * 
     */
    delete<T extends BattleDeleteArgs>(args: SelectSubset<T, BattleDeleteArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Battle.
     * @param {BattleUpdateArgs} args - Arguments to update one Battle.
     * @example
     * // Update one Battle
     * const battle = await prisma.battle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleUpdateArgs>(args: SelectSubset<T, BattleUpdateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Battles.
     * @param {BattleDeleteManyArgs} args - Arguments to filter Battles to delete.
     * @example
     * // Delete a few Battles
     * const { count } = await prisma.battle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleDeleteManyArgs>(args?: SelectSubset<T, BattleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleUpdateManyArgs>(args: SelectSubset<T, BattleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles and returns the data updated in the database.
     * @param {BattleUpdateManyAndReturnArgs} args - Arguments to update many Battles.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Battles and only return the `id`
     * const battleWithIdOnly = await prisma.battle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BattleUpdateManyAndReturnArgs>(args: SelectSubset<T, BattleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Battle.
     * @param {BattleUpsertArgs} args - Arguments to update or create a Battle.
     * @example
     * // Update or create a Battle
     * const battle = await prisma.battle.upsert({
     *   create: {
     *     // ... data to create a Battle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle we want to update
     *   }
     * })
     */
    upsert<T extends BattleUpsertArgs>(args: SelectSubset<T, BattleUpsertArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleCountArgs} args - Arguments to filter Battles to count.
     * @example
     * // Count the number of Battles
     * const count = await prisma.battle.count({
     *   where: {
     *     // ... the filter for the Battles we want to count
     *   }
     * })
    **/
    count<T extends BattleCountArgs>(
      args?: Subset<T, BattleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BattleAggregateArgs>(args: Subset<T, BattleAggregateArgs>): Prisma.PrismaPromise<GetBattleAggregateType<T>>

    /**
     * Group by Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupByArgs} args - Group by arguments.
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
      T extends BattleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleGroupByArgs['orderBy'] }
        : { orderBy?: BattleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BattleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Battle model
   */
  readonly fields: BattleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Battle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends Battle$player2Args<ExtArgs> = {}>(args?: Subset<T, Battle$player2Args<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    turnUser<T extends Battle$turnUserArgs<ExtArgs> = {}>(args?: Subset<T, Battle$turnUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winner<T extends Battle$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Battle$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    player1Char<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2Char<T extends Battle$player2CharArgs<ExtArgs> = {}>(args?: Subset<T, Battle$player2CharArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Battle model
   */
  interface BattleFieldRefs {
    readonly id: FieldRef<"Battle", 'Int'>
    readonly status: FieldRef<"Battle", 'String'>
    readonly player1Id: FieldRef<"Battle", 'Int'>
    readonly player2Id: FieldRef<"Battle", 'Int'>
    readonly player1CharId: FieldRef<"Battle", 'Int'>
    readonly player2CharId: FieldRef<"Battle", 'Int'>
    readonly player1CurrentHp: FieldRef<"Battle", 'Int'>
    readonly player2CurrentHp: FieldRef<"Battle", 'Int'>
    readonly turnUserId: FieldRef<"Battle", 'Int'>
    readonly winnerId: FieldRef<"Battle", 'Int'>
    readonly createdAt: FieldRef<"Battle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Battle findUnique
   */
  export type BattleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findUniqueOrThrow
   */
  export type BattleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findFirst
   */
  export type BattleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findFirstOrThrow
   */
  export type BattleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findMany
   */
  export type BattleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battles to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle create
   */
  export type BattleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to create a Battle.
     */
    data: XOR<BattleCreateInput, BattleUncheckedCreateInput>
  }

  /**
   * Battle createMany
   */
  export type BattleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Battle createManyAndReturn
   */
  export type BattleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Battle update
   */
  export type BattleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to update a Battle.
     */
    data: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
    /**
     * Choose, which Battle to update.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle updateMany
   */
  export type BattleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Battles.
     */
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyInput>
    /**
     * Filter which Battles to update
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to update.
     */
    limit?: number
  }

  /**
   * Battle updateManyAndReturn
   */
  export type BattleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * The data used to update Battles.
     */
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyInput>
    /**
     * Filter which Battles to update
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Battle upsert
   */
  export type BattleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The filter to search for the Battle to update in case it exists.
     */
    where: BattleWhereUniqueInput
    /**
     * In case the Battle found by the `where` argument doesn't exist, create a new Battle with this data.
     */
    create: XOR<BattleCreateInput, BattleUncheckedCreateInput>
    /**
     * In case the Battle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
  }

  /**
   * Battle delete
   */
  export type BattleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter which Battle to delete.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle deleteMany
   */
  export type BattleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battles to delete
     */
    where?: BattleWhereInput
    /**
     * Limit how many Battles to delete.
     */
    limit?: number
  }

  /**
   * Battle.player2
   */
  export type Battle$player2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Battle.turnUser
   */
  export type Battle$turnUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Battle.winner
   */
  export type Battle$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Battle.player2Char
   */
  export type Battle$player2CharArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
  }

  /**
   * Battle without action
   */
  export type BattleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Battle
     */
    omit?: BattleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    level: 'level',
    xp: 'xp',
    wins: 'wins',
    losses: 'losses'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hp: 'hp',
    attack: 'attack',
    level: 'level'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const BattleScalarFieldEnum: {
    id: 'id',
    status: 'status',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    player1CharId: 'player1CharId',
    player2CharId: 'player2CharId',
    player1CurrentHp: 'player1CurrentHp',
    player2CurrentHp: 'player2CurrentHp',
    turnUserId: 'turnUserId',
    winnerId: 'winnerId',
    createdAt: 'createdAt'
  };

  export type BattleScalarFieldEnum = (typeof BattleScalarFieldEnum)[keyof typeof BattleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    roles?: RoleListRelationFilter
    battlesAsPlayer1?: BattleListRelationFilter
    battlesAsPlayer2?: BattleListRelationFilter
    wonBattles?: BattleListRelationFilter
    battlesAsTurn?: BattleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
    battlesAsPlayer1?: BattleOrderByRelationAggregateInput
    battlesAsPlayer2?: BattleOrderByRelationAggregateInput
    wonBattles?: BattleOrderByRelationAggregateInput
    battlesAsTurn?: BattleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
    roles?: RoleListRelationFilter
    battlesAsPlayer1?: BattleListRelationFilter
    battlesAsPlayer2?: BattleListRelationFilter
    wonBattles?: BattleListRelationFilter
    battlesAsTurn?: BattleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    level?: IntWithAggregatesFilter<"User"> | number
    xp?: IntWithAggregatesFilter<"User"> | number
    wins?: IntWithAggregatesFilter<"User"> | number
    losses?: IntWithAggregatesFilter<"User"> | number
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: IntFilter<"Character"> | number
    name?: StringFilter<"Character"> | string
    hp?: IntFilter<"Character"> | number
    attack?: IntFilter<"Character"> | number
    level?: IntFilter<"Character"> | number
    usedAsPlayer1?: BattleListRelationFilter
    usedAsPlayer2?: BattleListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    level?: SortOrder
    usedAsPlayer1?: BattleOrderByRelationAggregateInput
    usedAsPlayer2?: BattleOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    hp?: IntFilter<"Character"> | number
    attack?: IntFilter<"Character"> | number
    level?: IntFilter<"Character"> | number
    usedAsPlayer1?: BattleListRelationFilter
    usedAsPlayer2?: BattleListRelationFilter
  }, "id" | "name">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    level?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _avg?: CharacterAvgOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
    _sum?: CharacterSumOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Character"> | number
    name?: StringWithAggregatesFilter<"Character"> | string
    hp?: IntWithAggregatesFilter<"Character"> | number
    attack?: IntWithAggregatesFilter<"Character"> | number
    level?: IntWithAggregatesFilter<"Character"> | number
  }

  export type BattleWhereInput = {
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    id?: IntFilter<"Battle"> | number
    status?: StringFilter<"Battle"> | string
    player1Id?: IntFilter<"Battle"> | number
    player2Id?: IntNullableFilter<"Battle"> | number | null
    player1CharId?: IntFilter<"Battle"> | number
    player2CharId?: IntNullableFilter<"Battle"> | number | null
    player1CurrentHp?: IntFilter<"Battle"> | number
    player2CurrentHp?: IntNullableFilter<"Battle"> | number | null
    turnUserId?: IntNullableFilter<"Battle"> | number | null
    winnerId?: IntNullableFilter<"Battle"> | number | null
    createdAt?: DateTimeFilter<"Battle"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    turnUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player1Char?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    player2Char?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }

  export type BattleOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrderInput | SortOrder
    player1CharId?: SortOrder
    player2CharId?: SortOrderInput | SortOrder
    player1CurrentHp?: SortOrder
    player2CurrentHp?: SortOrderInput | SortOrder
    turnUserId?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    player1?: UserOrderByWithRelationInput
    player2?: UserOrderByWithRelationInput
    turnUser?: UserOrderByWithRelationInput
    winner?: UserOrderByWithRelationInput
    player1Char?: CharacterOrderByWithRelationInput
    player2Char?: CharacterOrderByWithRelationInput
  }

  export type BattleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    status?: StringFilter<"Battle"> | string
    player1Id?: IntFilter<"Battle"> | number
    player2Id?: IntNullableFilter<"Battle"> | number | null
    player1CharId?: IntFilter<"Battle"> | number
    player2CharId?: IntNullableFilter<"Battle"> | number | null
    player1CurrentHp?: IntFilter<"Battle"> | number
    player2CurrentHp?: IntNullableFilter<"Battle"> | number | null
    turnUserId?: IntNullableFilter<"Battle"> | number | null
    winnerId?: IntNullableFilter<"Battle"> | number | null
    createdAt?: DateTimeFilter<"Battle"> | Date | string
    player1?: XOR<UserScalarRelationFilter, UserWhereInput>
    player2?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    turnUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    player1Char?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    player2Char?: XOR<CharacterNullableScalarRelationFilter, CharacterWhereInput> | null
  }, "id">

  export type BattleOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrderInput | SortOrder
    player1CharId?: SortOrder
    player2CharId?: SortOrderInput | SortOrder
    player1CurrentHp?: SortOrder
    player2CurrentHp?: SortOrderInput | SortOrder
    turnUserId?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BattleCountOrderByAggregateInput
    _avg?: BattleAvgOrderByAggregateInput
    _max?: BattleMaxOrderByAggregateInput
    _min?: BattleMinOrderByAggregateInput
    _sum?: BattleSumOrderByAggregateInput
  }

  export type BattleScalarWhereWithAggregatesInput = {
    AND?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    OR?: BattleScalarWhereWithAggregatesInput[]
    NOT?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Battle"> | number
    status?: StringWithAggregatesFilter<"Battle"> | string
    player1Id?: IntWithAggregatesFilter<"Battle"> | number
    player2Id?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player1CharId?: IntWithAggregatesFilter<"Battle"> | number
    player2CharId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    player1CurrentHp?: IntWithAggregatesFilter<"Battle"> | number
    player2CurrentHp?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    turnUserId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    winnerId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Battle"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleCreateNestedManyWithoutTurnUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleUncheckedCreateNestedManyWithoutTurnUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUncheckedUpdateManyWithoutTurnUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterCreateInput = {
    name: string
    hp: number
    attack: number
    level?: number
    usedAsPlayer1?: BattleCreateNestedManyWithoutPlayer1CharInput
    usedAsPlayer2?: BattleCreateNestedManyWithoutPlayer2CharInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: number
    name: string
    hp: number
    attack: number
    level?: number
    usedAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1CharInput
    usedAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2CharInput
  }

  export type CharacterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    usedAsPlayer1?: BattleUpdateManyWithoutPlayer1CharNestedInput
    usedAsPlayer2?: BattleUpdateManyWithoutPlayer2CharNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    usedAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1CharNestedInput
    usedAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2CharNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: number
    name: string
    hp: number
    attack: number
    level?: number
  }

  export type CharacterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
  }

  export type BattleCreateInput = {
    status?: string
    player1CurrentHp: number
    player2CurrentHp?: number | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    turnUser?: UserCreateNestedOneWithoutBattlesAsTurnInput
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1Char: CharacterCreateNestedOneWithoutUsedAsPlayer1Input
    player2Char?: CharacterCreateNestedOneWithoutUsedAsPlayer2Input
  }

  export type BattleUncheckedCreateInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    turnUser?: UserUpdateOneWithoutBattlesAsTurnNestedInput
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1Char?: CharacterUpdateOneRequiredWithoutUsedAsPlayer1NestedInput
    player2Char?: CharacterUpdateOneWithoutUsedAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleCreateManyInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type BattleListRelationFilter = {
    every?: BattleWhereInput
    some?: BattleWhereInput
    none?: BattleWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BattleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    level?: SortOrder
  }

  export type CharacterAvgOrderByAggregateInput = {
    id?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    level?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    level?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    level?: SortOrder
  }

  export type CharacterSumOrderByAggregateInput = {
    id?: SortOrder
    hp?: SortOrder
    attack?: SortOrder
    level?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type CharacterNullableScalarRelationFilter = {
    is?: CharacterWhereInput | null
    isNot?: CharacterWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BattleCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1CharId?: SortOrder
    player2CharId?: SortOrder
    player1CurrentHp?: SortOrder
    player2CurrentHp?: SortOrder
    turnUserId?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BattleAvgOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1CharId?: SortOrder
    player2CharId?: SortOrder
    player1CurrentHp?: SortOrder
    player2CurrentHp?: SortOrder
    turnUserId?: SortOrder
    winnerId?: SortOrder
  }

  export type BattleMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1CharId?: SortOrder
    player2CharId?: SortOrder
    player1CurrentHp?: SortOrder
    player2CurrentHp?: SortOrder
    turnUserId?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BattleMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1CharId?: SortOrder
    player2CharId?: SortOrder
    player1CurrentHp?: SortOrder
    player2CurrentHp?: SortOrder
    turnUserId?: SortOrder
    winnerId?: SortOrder
    createdAt?: SortOrder
  }

  export type BattleSumOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    player1CharId?: SortOrder
    player2CharId?: SortOrder
    player1CurrentHp?: SortOrder
    player2CurrentHp?: SortOrder
    turnUserId?: SortOrder
    winnerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutWinnerInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutTurnUserInput = {
    create?: XOR<BattleCreateWithoutTurnUserInput, BattleUncheckedCreateWithoutTurnUserInput> | BattleCreateWithoutTurnUserInput[] | BattleUncheckedCreateWithoutTurnUserInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutTurnUserInput | BattleCreateOrConnectWithoutTurnUserInput[]
    createMany?: BattleCreateManyTurnUserInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutTurnUserInput = {
    create?: XOR<BattleCreateWithoutTurnUserInput, BattleUncheckedCreateWithoutTurnUserInput> | BattleCreateWithoutTurnUserInput[] | BattleUncheckedCreateWithoutTurnUserInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutTurnUserInput | BattleCreateOrConnectWithoutTurnUserInput[]
    createMany?: BattleCreateManyTurnUserInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1Input | BattleUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1Input | BattleUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1Input | BattleUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2Input | BattleUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2Input | BattleUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2Input | BattleUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutWinnerInput | BattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutWinnerInput | BattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutWinnerInput | BattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutTurnUserNestedInput = {
    create?: XOR<BattleCreateWithoutTurnUserInput, BattleUncheckedCreateWithoutTurnUserInput> | BattleCreateWithoutTurnUserInput[] | BattleUncheckedCreateWithoutTurnUserInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutTurnUserInput | BattleCreateOrConnectWithoutTurnUserInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutTurnUserInput | BattleUpsertWithWhereUniqueWithoutTurnUserInput[]
    createMany?: BattleCreateManyTurnUserInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutTurnUserInput | BattleUpdateWithWhereUniqueWithoutTurnUserInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutTurnUserInput | BattleUpdateManyWithWhereWithoutTurnUserInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input> | BattleCreateWithoutPlayer1Input[] | BattleUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1Input | BattleCreateOrConnectWithoutPlayer1Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1Input | BattleUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: BattleCreateManyPlayer1InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1Input | BattleUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1Input | BattleUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input> | BattleCreateWithoutPlayer2Input[] | BattleUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2Input | BattleCreateOrConnectWithoutPlayer2Input[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2Input | BattleUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: BattleCreateManyPlayer2InputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2Input | BattleUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2Input | BattleUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput> | BattleCreateWithoutWinnerInput[] | BattleUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutWinnerInput | BattleCreateOrConnectWithoutWinnerInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutWinnerInput | BattleUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: BattleCreateManyWinnerInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutWinnerInput | BattleUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutWinnerInput | BattleUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutTurnUserNestedInput = {
    create?: XOR<BattleCreateWithoutTurnUserInput, BattleUncheckedCreateWithoutTurnUserInput> | BattleCreateWithoutTurnUserInput[] | BattleUncheckedCreateWithoutTurnUserInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutTurnUserInput | BattleCreateOrConnectWithoutTurnUserInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutTurnUserInput | BattleUpsertWithWhereUniqueWithoutTurnUserInput[]
    createMany?: BattleCreateManyTurnUserInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutTurnUserInput | BattleUpdateWithWhereUniqueWithoutTurnUserInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutTurnUserInput | BattleUpdateManyWithWhereWithoutTurnUserInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleCreateNestedManyWithoutPlayer1CharInput = {
    create?: XOR<BattleCreateWithoutPlayer1CharInput, BattleUncheckedCreateWithoutPlayer1CharInput> | BattleCreateWithoutPlayer1CharInput[] | BattleUncheckedCreateWithoutPlayer1CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1CharInput | BattleCreateOrConnectWithoutPlayer1CharInput[]
    createMany?: BattleCreateManyPlayer1CharInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleCreateNestedManyWithoutPlayer2CharInput = {
    create?: XOR<BattleCreateWithoutPlayer2CharInput, BattleUncheckedCreateWithoutPlayer2CharInput> | BattleCreateWithoutPlayer2CharInput[] | BattleUncheckedCreateWithoutPlayer2CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2CharInput | BattleCreateOrConnectWithoutPlayer2CharInput[]
    createMany?: BattleCreateManyPlayer2CharInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer1CharInput = {
    create?: XOR<BattleCreateWithoutPlayer1CharInput, BattleUncheckedCreateWithoutPlayer1CharInput> | BattleCreateWithoutPlayer1CharInput[] | BattleUncheckedCreateWithoutPlayer1CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1CharInput | BattleCreateOrConnectWithoutPlayer1CharInput[]
    createMany?: BattleCreateManyPlayer1CharInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUncheckedCreateNestedManyWithoutPlayer2CharInput = {
    create?: XOR<BattleCreateWithoutPlayer2CharInput, BattleUncheckedCreateWithoutPlayer2CharInput> | BattleCreateWithoutPlayer2CharInput[] | BattleUncheckedCreateWithoutPlayer2CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2CharInput | BattleCreateOrConnectWithoutPlayer2CharInput[]
    createMany?: BattleCreateManyPlayer2CharInputEnvelope
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
  }

  export type BattleUpdateManyWithoutPlayer1CharNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1CharInput, BattleUncheckedCreateWithoutPlayer1CharInput> | BattleCreateWithoutPlayer1CharInput[] | BattleUncheckedCreateWithoutPlayer1CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1CharInput | BattleCreateOrConnectWithoutPlayer1CharInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1CharInput | BattleUpsertWithWhereUniqueWithoutPlayer1CharInput[]
    createMany?: BattleCreateManyPlayer1CharInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1CharInput | BattleUpdateWithWhereUniqueWithoutPlayer1CharInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1CharInput | BattleUpdateManyWithWhereWithoutPlayer1CharInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUpdateManyWithoutPlayer2CharNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2CharInput, BattleUncheckedCreateWithoutPlayer2CharInput> | BattleCreateWithoutPlayer2CharInput[] | BattleUncheckedCreateWithoutPlayer2CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2CharInput | BattleCreateOrConnectWithoutPlayer2CharInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2CharInput | BattleUpsertWithWhereUniqueWithoutPlayer2CharInput[]
    createMany?: BattleCreateManyPlayer2CharInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2CharInput | BattleUpdateWithWhereUniqueWithoutPlayer2CharInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2CharInput | BattleUpdateManyWithWhereWithoutPlayer2CharInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1CharNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer1CharInput, BattleUncheckedCreateWithoutPlayer1CharInput> | BattleCreateWithoutPlayer1CharInput[] | BattleUncheckedCreateWithoutPlayer1CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer1CharInput | BattleCreateOrConnectWithoutPlayer1CharInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer1CharInput | BattleUpsertWithWhereUniqueWithoutPlayer1CharInput[]
    createMany?: BattleCreateManyPlayer1CharInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer1CharInput | BattleUpdateWithWhereUniqueWithoutPlayer1CharInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer1CharInput | BattleUpdateManyWithWhereWithoutPlayer1CharInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2CharNestedInput = {
    create?: XOR<BattleCreateWithoutPlayer2CharInput, BattleUncheckedCreateWithoutPlayer2CharInput> | BattleCreateWithoutPlayer2CharInput[] | BattleUncheckedCreateWithoutPlayer2CharInput[]
    connectOrCreate?: BattleCreateOrConnectWithoutPlayer2CharInput | BattleCreateOrConnectWithoutPlayer2CharInput[]
    upsert?: BattleUpsertWithWhereUniqueWithoutPlayer2CharInput | BattleUpsertWithWhereUniqueWithoutPlayer2CharInput[]
    createMany?: BattleCreateManyPlayer2CharInputEnvelope
    set?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    disconnect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    delete?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    connect?: BattleWhereUniqueInput | BattleWhereUniqueInput[]
    update?: BattleUpdateWithWhereUniqueWithoutPlayer2CharInput | BattleUpdateWithWhereUniqueWithoutPlayer2CharInput[]
    updateMany?: BattleUpdateManyWithWhereWithoutPlayer2CharInput | BattleUpdateManyWithWhereWithoutPlayer2CharInput[]
    deleteMany?: BattleScalarWhereInput | BattleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBattlesAsPlayer1Input = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBattlesAsPlayer2Input = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer2Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBattlesAsTurnInput = {
    create?: XOR<UserCreateWithoutBattlesAsTurnInput, UserUncheckedCreateWithoutBattlesAsTurnInput>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsTurnInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWonBattlesInput = {
    create?: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonBattlesInput
    connect?: UserWhereUniqueInput
  }

  export type CharacterCreateNestedOneWithoutUsedAsPlayer1Input = {
    create?: XOR<CharacterCreateWithoutUsedAsPlayer1Input, CharacterUncheckedCreateWithoutUsedAsPlayer1Input>
    connectOrCreate?: CharacterCreateOrConnectWithoutUsedAsPlayer1Input
    connect?: CharacterWhereUniqueInput
  }

  export type CharacterCreateNestedOneWithoutUsedAsPlayer2Input = {
    create?: XOR<CharacterCreateWithoutUsedAsPlayer2Input, CharacterUncheckedCreateWithoutUsedAsPlayer2Input>
    connectOrCreate?: CharacterCreateOrConnectWithoutUsedAsPlayer2Input
    connect?: CharacterWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutBattlesAsPlayer1NestedInput = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer1Input
    upsert?: UserUpsertWithoutBattlesAsPlayer1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBattlesAsPlayer1Input, UserUpdateWithoutBattlesAsPlayer1Input>, UserUncheckedUpdateWithoutBattlesAsPlayer1Input>
  }

  export type UserUpdateOneWithoutBattlesAsPlayer2NestedInput = {
    create?: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsPlayer2Input
    upsert?: UserUpsertWithoutBattlesAsPlayer2Input
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBattlesAsPlayer2Input, UserUpdateWithoutBattlesAsPlayer2Input>, UserUncheckedUpdateWithoutBattlesAsPlayer2Input>
  }

  export type UserUpdateOneWithoutBattlesAsTurnNestedInput = {
    create?: XOR<UserCreateWithoutBattlesAsTurnInput, UserUncheckedCreateWithoutBattlesAsTurnInput>
    connectOrCreate?: UserCreateOrConnectWithoutBattlesAsTurnInput
    upsert?: UserUpsertWithoutBattlesAsTurnInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBattlesAsTurnInput, UserUpdateWithoutBattlesAsTurnInput>, UserUncheckedUpdateWithoutBattlesAsTurnInput>
  }

  export type UserUpdateOneWithoutWonBattlesNestedInput = {
    create?: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonBattlesInput
    upsert?: UserUpsertWithoutWonBattlesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWonBattlesInput, UserUpdateWithoutWonBattlesInput>, UserUncheckedUpdateWithoutWonBattlesInput>
  }

  export type CharacterUpdateOneRequiredWithoutUsedAsPlayer1NestedInput = {
    create?: XOR<CharacterCreateWithoutUsedAsPlayer1Input, CharacterUncheckedCreateWithoutUsedAsPlayer1Input>
    connectOrCreate?: CharacterCreateOrConnectWithoutUsedAsPlayer1Input
    upsert?: CharacterUpsertWithoutUsedAsPlayer1Input
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutUsedAsPlayer1Input, CharacterUpdateWithoutUsedAsPlayer1Input>, CharacterUncheckedUpdateWithoutUsedAsPlayer1Input>
  }

  export type CharacterUpdateOneWithoutUsedAsPlayer2NestedInput = {
    create?: XOR<CharacterCreateWithoutUsedAsPlayer2Input, CharacterUncheckedCreateWithoutUsedAsPlayer2Input>
    connectOrCreate?: CharacterCreateOrConnectWithoutUsedAsPlayer2Input
    upsert?: CharacterUpsertWithoutUsedAsPlayer2Input
    disconnect?: CharacterWhereInput | boolean
    delete?: CharacterWhereInput | boolean
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutUsedAsPlayer2Input, CharacterUpdateWithoutUsedAsPlayer2Input>, CharacterUncheckedUpdateWithoutUsedAsPlayer2Input>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCreateWithoutRolesInput = {
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleCreateNestedManyWithoutTurnUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleUncheckedCreateNestedManyWithoutTurnUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    level?: IntFilter<"User"> | number
    xp?: IntFilter<"User"> | number
    wins?: IntFilter<"User"> | number
    losses?: IntFilter<"User"> | number
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type BattleCreateWithoutPlayer1Input = {
    status?: string
    player1CurrentHp: number
    player2CurrentHp?: number | null
    createdAt?: Date | string
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    turnUser?: UserCreateNestedOneWithoutBattlesAsTurnInput
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1Char: CharacterCreateNestedOneWithoutUsedAsPlayer1Input
    player2Char?: CharacterCreateNestedOneWithoutUsedAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutPlayer1Input = {
    id?: number
    status?: string
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer1Input = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input>
  }

  export type BattleCreateManyPlayer1InputEnvelope = {
    data: BattleCreateManyPlayer1Input | BattleCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutPlayer2Input = {
    status?: string
    player1CurrentHp: number
    player2CurrentHp?: number | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    turnUser?: UserCreateNestedOneWithoutBattlesAsTurnInput
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1Char: CharacterCreateNestedOneWithoutUsedAsPlayer1Input
    player2Char?: CharacterCreateNestedOneWithoutUsedAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutPlayer2Input = {
    id?: number
    status?: string
    player1Id: number
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer2Input = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input>
  }

  export type BattleCreateManyPlayer2InputEnvelope = {
    data: BattleCreateManyPlayer2Input | BattleCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutWinnerInput = {
    status?: string
    player1CurrentHp: number
    player2CurrentHp?: number | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    turnUser?: UserCreateNestedOneWithoutBattlesAsTurnInput
    player1Char: CharacterCreateNestedOneWithoutUsedAsPlayer1Input
    player2Char?: CharacterCreateNestedOneWithoutUsedAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutWinnerInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateOrConnectWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput>
  }

  export type BattleCreateManyWinnerInputEnvelope = {
    data: BattleCreateManyWinnerInput | BattleCreateManyWinnerInput[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutTurnUserInput = {
    status?: string
    player1CurrentHp: number
    player2CurrentHp?: number | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1Char: CharacterCreateNestedOneWithoutUsedAsPlayer1Input
    player2Char?: CharacterCreateNestedOneWithoutUsedAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutTurnUserInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateOrConnectWithoutTurnUserInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutTurnUserInput, BattleUncheckedCreateWithoutTurnUserInput>
  }

  export type BattleCreateManyTurnUserInputEnvelope = {
    data: BattleCreateManyTurnUserInput | BattleCreateManyTurnUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer1Input, BattleUncheckedUpdateWithoutPlayer1Input>
    create: XOR<BattleCreateWithoutPlayer1Input, BattleUncheckedCreateWithoutPlayer1Input>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer1Input, BattleUncheckedUpdateWithoutPlayer1Input>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer1Input = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type BattleScalarWhereInput = {
    AND?: BattleScalarWhereInput | BattleScalarWhereInput[]
    OR?: BattleScalarWhereInput[]
    NOT?: BattleScalarWhereInput | BattleScalarWhereInput[]
    id?: IntFilter<"Battle"> | number
    status?: StringFilter<"Battle"> | string
    player1Id?: IntFilter<"Battle"> | number
    player2Id?: IntNullableFilter<"Battle"> | number | null
    player1CharId?: IntFilter<"Battle"> | number
    player2CharId?: IntNullableFilter<"Battle"> | number | null
    player1CurrentHp?: IntFilter<"Battle"> | number
    player2CurrentHp?: IntNullableFilter<"Battle"> | number | null
    turnUserId?: IntNullableFilter<"Battle"> | number | null
    winnerId?: IntNullableFilter<"Battle"> | number | null
    createdAt?: DateTimeFilter<"Battle"> | Date | string
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer2Input, BattleUncheckedUpdateWithoutPlayer2Input>
    create: XOR<BattleCreateWithoutPlayer2Input, BattleUncheckedCreateWithoutPlayer2Input>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer2Input, BattleUncheckedUpdateWithoutPlayer2Input>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer2Input = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type BattleUpsertWithWhereUniqueWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutWinnerInput, BattleUncheckedUpdateWithoutWinnerInput>
    create: XOR<BattleCreateWithoutWinnerInput, BattleUncheckedCreateWithoutWinnerInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutWinnerInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutWinnerInput, BattleUncheckedUpdateWithoutWinnerInput>
  }

  export type BattleUpdateManyWithWhereWithoutWinnerInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutWinnerInput>
  }

  export type BattleUpsertWithWhereUniqueWithoutTurnUserInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutTurnUserInput, BattleUncheckedUpdateWithoutTurnUserInput>
    create: XOR<BattleCreateWithoutTurnUserInput, BattleUncheckedCreateWithoutTurnUserInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutTurnUserInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutTurnUserInput, BattleUncheckedUpdateWithoutTurnUserInput>
  }

  export type BattleUpdateManyWithWhereWithoutTurnUserInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutTurnUserInput>
  }

  export type BattleCreateWithoutPlayer1CharInput = {
    status?: string
    player1CurrentHp: number
    player2CurrentHp?: number | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    turnUser?: UserCreateNestedOneWithoutBattlesAsTurnInput
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player2Char?: CharacterCreateNestedOneWithoutUsedAsPlayer2Input
  }

  export type BattleUncheckedCreateWithoutPlayer1CharInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer1CharInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer1CharInput, BattleUncheckedCreateWithoutPlayer1CharInput>
  }

  export type BattleCreateManyPlayer1CharInputEnvelope = {
    data: BattleCreateManyPlayer1CharInput | BattleCreateManyPlayer1CharInput[]
    skipDuplicates?: boolean
  }

  export type BattleCreateWithoutPlayer2CharInput = {
    status?: string
    player1CurrentHp: number
    player2CurrentHp?: number | null
    createdAt?: Date | string
    player1: UserCreateNestedOneWithoutBattlesAsPlayer1Input
    player2?: UserCreateNestedOneWithoutBattlesAsPlayer2Input
    turnUser?: UserCreateNestedOneWithoutBattlesAsTurnInput
    winner?: UserCreateNestedOneWithoutWonBattlesInput
    player1Char: CharacterCreateNestedOneWithoutUsedAsPlayer1Input
  }

  export type BattleUncheckedCreateWithoutPlayer2CharInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateOrConnectWithoutPlayer2CharInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutPlayer2CharInput, BattleUncheckedCreateWithoutPlayer2CharInput>
  }

  export type BattleCreateManyPlayer2CharInputEnvelope = {
    data: BattleCreateManyPlayer2CharInput | BattleCreateManyPlayer2CharInput[]
    skipDuplicates?: boolean
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer1CharInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer1CharInput, BattleUncheckedUpdateWithoutPlayer1CharInput>
    create: XOR<BattleCreateWithoutPlayer1CharInput, BattleUncheckedCreateWithoutPlayer1CharInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer1CharInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer1CharInput, BattleUncheckedUpdateWithoutPlayer1CharInput>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer1CharInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer1CharInput>
  }

  export type BattleUpsertWithWhereUniqueWithoutPlayer2CharInput = {
    where: BattleWhereUniqueInput
    update: XOR<BattleUpdateWithoutPlayer2CharInput, BattleUncheckedUpdateWithoutPlayer2CharInput>
    create: XOR<BattleCreateWithoutPlayer2CharInput, BattleUncheckedCreateWithoutPlayer2CharInput>
  }

  export type BattleUpdateWithWhereUniqueWithoutPlayer2CharInput = {
    where: BattleWhereUniqueInput
    data: XOR<BattleUpdateWithoutPlayer2CharInput, BattleUncheckedUpdateWithoutPlayer2CharInput>
  }

  export type BattleUpdateManyWithWhereWithoutPlayer2CharInput = {
    where: BattleScalarWhereInput
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyWithoutPlayer2CharInput>
  }

  export type UserCreateWithoutBattlesAsPlayer1Input = {
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleCreateNestedManyWithoutUsersInput
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleCreateNestedManyWithoutTurnUserInput
  }

  export type UserUncheckedCreateWithoutBattlesAsPlayer1Input = {
    id?: number
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleUncheckedCreateNestedManyWithoutTurnUserInput
  }

  export type UserCreateOrConnectWithoutBattlesAsPlayer1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
  }

  export type UserCreateWithoutBattlesAsPlayer2Input = {
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleCreateNestedManyWithoutTurnUserInput
  }

  export type UserUncheckedCreateWithoutBattlesAsPlayer2Input = {
    id?: number
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
    battlesAsTurn?: BattleUncheckedCreateNestedManyWithoutTurnUserInput
  }

  export type UserCreateOrConnectWithoutBattlesAsPlayer2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
  }

  export type UserCreateWithoutBattlesAsTurnInput = {
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleCreateNestedManyWithoutWinnerInput
  }

  export type UserUncheckedCreateWithoutBattlesAsTurnInput = {
    id?: number
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    wonBattles?: BattleUncheckedCreateNestedManyWithoutWinnerInput
  }

  export type UserCreateOrConnectWithoutBattlesAsTurnInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBattlesAsTurnInput, UserUncheckedCreateWithoutBattlesAsTurnInput>
  }

  export type UserCreateWithoutWonBattlesInput = {
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleCreateNestedManyWithoutPlayer2Input
    battlesAsTurn?: BattleCreateNestedManyWithoutTurnUserInput
  }

  export type UserUncheckedCreateWithoutWonBattlesInput = {
    id?: number
    email: string
    password: string
    name: string
    level?: number
    xp?: number
    wins?: number
    losses?: number
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    battlesAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1Input
    battlesAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2Input
    battlesAsTurn?: BattleUncheckedCreateNestedManyWithoutTurnUserInput
  }

  export type UserCreateOrConnectWithoutWonBattlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
  }

  export type CharacterCreateWithoutUsedAsPlayer1Input = {
    name: string
    hp: number
    attack: number
    level?: number
    usedAsPlayer2?: BattleCreateNestedManyWithoutPlayer2CharInput
  }

  export type CharacterUncheckedCreateWithoutUsedAsPlayer1Input = {
    id?: number
    name: string
    hp: number
    attack: number
    level?: number
    usedAsPlayer2?: BattleUncheckedCreateNestedManyWithoutPlayer2CharInput
  }

  export type CharacterCreateOrConnectWithoutUsedAsPlayer1Input = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutUsedAsPlayer1Input, CharacterUncheckedCreateWithoutUsedAsPlayer1Input>
  }

  export type CharacterCreateWithoutUsedAsPlayer2Input = {
    name: string
    hp: number
    attack: number
    level?: number
    usedAsPlayer1?: BattleCreateNestedManyWithoutPlayer1CharInput
  }

  export type CharacterUncheckedCreateWithoutUsedAsPlayer2Input = {
    id?: number
    name: string
    hp: number
    attack: number
    level?: number
    usedAsPlayer1?: BattleUncheckedCreateNestedManyWithoutPlayer1CharInput
  }

  export type CharacterCreateOrConnectWithoutUsedAsPlayer2Input = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutUsedAsPlayer2Input, CharacterUncheckedCreateWithoutUsedAsPlayer2Input>
  }

  export type UserUpsertWithoutBattlesAsPlayer1Input = {
    update: XOR<UserUpdateWithoutBattlesAsPlayer1Input, UserUncheckedUpdateWithoutBattlesAsPlayer1Input>
    create: XOR<UserCreateWithoutBattlesAsPlayer1Input, UserUncheckedCreateWithoutBattlesAsPlayer1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBattlesAsPlayer1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBattlesAsPlayer1Input, UserUncheckedUpdateWithoutBattlesAsPlayer1Input>
  }

  export type UserUpdateWithoutBattlesAsPlayer1Input = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUpdateManyWithoutUsersNestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBattlesAsPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUncheckedUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUpsertWithoutBattlesAsPlayer2Input = {
    update: XOR<UserUpdateWithoutBattlesAsPlayer2Input, UserUncheckedUpdateWithoutBattlesAsPlayer2Input>
    create: XOR<UserCreateWithoutBattlesAsPlayer2Input, UserUncheckedCreateWithoutBattlesAsPlayer2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBattlesAsPlayer2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBattlesAsPlayer2Input, UserUncheckedUpdateWithoutBattlesAsPlayer2Input>
  }

  export type UserUpdateWithoutBattlesAsPlayer2Input = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBattlesAsPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUncheckedUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUpsertWithoutBattlesAsTurnInput = {
    update: XOR<UserUpdateWithoutBattlesAsTurnInput, UserUncheckedUpdateWithoutBattlesAsTurnInput>
    create: XOR<UserCreateWithoutBattlesAsTurnInput, UserUncheckedCreateWithoutBattlesAsTurnInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBattlesAsTurnInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBattlesAsTurnInput, UserUncheckedUpdateWithoutBattlesAsTurnInput>
  }

  export type UserUpdateWithoutBattlesAsTurnInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBattlesAsTurnInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
  }

  export type UserUpsertWithoutWonBattlesInput = {
    update: XOR<UserUpdateWithoutWonBattlesInput, UserUncheckedUpdateWithoutWonBattlesInput>
    create: XOR<UserCreateWithoutWonBattlesInput, UserUncheckedCreateWithoutWonBattlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWonBattlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWonBattlesInput, UserUncheckedUpdateWithoutWonBattlesInput>
  }

  export type UserUpdateWithoutWonBattlesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    battlesAsTurn?: BattleUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWonBattlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    battlesAsTurn?: BattleUncheckedUpdateManyWithoutTurnUserNestedInput
  }

  export type CharacterUpsertWithoutUsedAsPlayer1Input = {
    update: XOR<CharacterUpdateWithoutUsedAsPlayer1Input, CharacterUncheckedUpdateWithoutUsedAsPlayer1Input>
    create: XOR<CharacterCreateWithoutUsedAsPlayer1Input, CharacterUncheckedCreateWithoutUsedAsPlayer1Input>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutUsedAsPlayer1Input = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutUsedAsPlayer1Input, CharacterUncheckedUpdateWithoutUsedAsPlayer1Input>
  }

  export type CharacterUpdateWithoutUsedAsPlayer1Input = {
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    usedAsPlayer2?: BattleUpdateManyWithoutPlayer2CharNestedInput
  }

  export type CharacterUncheckedUpdateWithoutUsedAsPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    usedAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2CharNestedInput
  }

  export type CharacterUpsertWithoutUsedAsPlayer2Input = {
    update: XOR<CharacterUpdateWithoutUsedAsPlayer2Input, CharacterUncheckedUpdateWithoutUsedAsPlayer2Input>
    create: XOR<CharacterCreateWithoutUsedAsPlayer2Input, CharacterUncheckedCreateWithoutUsedAsPlayer2Input>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutUsedAsPlayer2Input = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutUsedAsPlayer2Input, CharacterUncheckedUpdateWithoutUsedAsPlayer2Input>
  }

  export type CharacterUpdateWithoutUsedAsPlayer2Input = {
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    usedAsPlayer1?: BattleUpdateManyWithoutPlayer1CharNestedInput
  }

  export type CharacterUncheckedUpdateWithoutUsedAsPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    attack?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    usedAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1CharNestedInput
  }

  export type UserUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    battlesAsPlayer1?: BattleUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    battlesAsPlayer1?: BattleUncheckedUpdateManyWithoutPlayer1NestedInput
    battlesAsPlayer2?: BattleUncheckedUpdateManyWithoutPlayer2NestedInput
    wonBattles?: BattleUncheckedUpdateManyWithoutWinnerNestedInput
    battlesAsTurn?: BattleUncheckedUpdateManyWithoutTurnUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
  }

  export type BattleCreateManyPlayer1Input = {
    id?: number
    status?: string
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateManyPlayer2Input = {
    id?: number
    status?: string
    player1Id: number
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateManyWinnerInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateManyTurnUserInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BattleUpdateWithoutPlayer1Input = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    turnUser?: UserUpdateOneWithoutBattlesAsTurnNestedInput
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1Char?: CharacterUpdateOneRequiredWithoutUsedAsPlayer1NestedInput
    player2Char?: CharacterUpdateOneWithoutUsedAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutPlayer2Input = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutBattlesAsPlayer1NestedInput
    turnUser?: UserUpdateOneWithoutBattlesAsTurnNestedInput
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1Char?: CharacterUpdateOneRequiredWithoutUsedAsPlayer1NestedInput
    player2Char?: CharacterUpdateOneWithoutUsedAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutWinnerInput = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    turnUser?: UserUpdateOneWithoutBattlesAsTurnNestedInput
    player1Char?: CharacterUpdateOneRequiredWithoutUsedAsPlayer1NestedInput
    player2Char?: CharacterUpdateOneWithoutUsedAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutWinnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutTurnUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1Char?: CharacterUpdateOneRequiredWithoutUsedAsPlayer1NestedInput
    player2Char?: CharacterUpdateOneWithoutUsedAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutTurnUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutTurnUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleCreateManyPlayer1CharInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player2CharId?: number | null
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleCreateManyPlayer2CharInput = {
    id?: number
    status?: string
    player1Id: number
    player2Id?: number | null
    player1CharId: number
    player1CurrentHp: number
    player2CurrentHp?: number | null
    turnUserId?: number | null
    winnerId?: number | null
    createdAt?: Date | string
  }

  export type BattleUpdateWithoutPlayer1CharInput = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    turnUser?: UserUpdateOneWithoutBattlesAsTurnNestedInput
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player2Char?: CharacterUpdateOneWithoutUsedAsPlayer2NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer1CharInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer1CharInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player2CharId?: NullableIntFieldUpdateOperationsInput | number | null
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUpdateWithoutPlayer2CharInput = {
    status?: StringFieldUpdateOperationsInput | string
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player1?: UserUpdateOneRequiredWithoutBattlesAsPlayer1NestedInput
    player2?: UserUpdateOneWithoutBattlesAsPlayer2NestedInput
    turnUser?: UserUpdateOneWithoutBattlesAsTurnNestedInput
    winner?: UserUpdateOneWithoutWonBattlesNestedInput
    player1Char?: CharacterUpdateOneRequiredWithoutUsedAsPlayer1NestedInput
  }

  export type BattleUncheckedUpdateWithoutPlayer2CharInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BattleUncheckedUpdateManyWithoutPlayer2CharInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: NullableIntFieldUpdateOperationsInput | number | null
    player1CharId?: IntFieldUpdateOperationsInput | number
    player1CurrentHp?: IntFieldUpdateOperationsInput | number
    player2CurrentHp?: NullableIntFieldUpdateOperationsInput | number | null
    turnUserId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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