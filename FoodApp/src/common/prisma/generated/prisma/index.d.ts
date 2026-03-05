
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
 * Model Food_Type
 * 
 */
export type Food_Type = $Result.DefaultSelection<Prisma.$Food_TypePayload>
/**
 * Model Foods
 * 
 */
export type Foods = $Result.DefaultSelection<Prisma.$FoodsPayload>
/**
 * Model Like_Res
 * 
 */
export type Like_Res = $Result.DefaultSelection<Prisma.$Like_ResPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Rate_Res
 * 
 */
export type Rate_Res = $Result.DefaultSelection<Prisma.$Rate_ResPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Sub_Food
 * 
 */
export type Sub_Food = $Result.DefaultSelection<Prisma.$Sub_FoodPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Food_Types
 * const food_Types = await prisma.food_Type.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Food_Types
   * const food_Types = await prisma.food_Type.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.food_Type`: Exposes CRUD operations for the **Food_Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_Types
    * const food_Types = await prisma.food_Type.findMany()
    * ```
    */
  get food_Type(): Prisma.Food_TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foods`: Exposes CRUD operations for the **Foods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.foods.findMany()
    * ```
    */
  get foods(): Prisma.FoodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like_Res`: Exposes CRUD operations for the **Like_Res** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Like_Res
    * const like_Res = await prisma.like_Res.findMany()
    * ```
    */
  get like_Res(): Prisma.Like_ResDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rate_Res`: Exposes CRUD operations for the **Rate_Res** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rate_Res
    * const rate_Res = await prisma.rate_Res.findMany()
    * ```
    */
  get rate_Res(): Prisma.Rate_ResDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sub_Food`: Exposes CRUD operations for the **Sub_Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_Foods
    * const sub_Foods = await prisma.sub_Food.findMany()
    * ```
    */
  get sub_Food(): Prisma.Sub_FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
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
    Food_Type: 'Food_Type',
    Foods: 'Foods',
    Like_Res: 'Like_Res',
    Orders: 'Orders',
    Rate_Res: 'Rate_Res',
    Restaurant: 'Restaurant',
    Sub_Food: 'Sub_Food',
    Users: 'Users'
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
      modelProps: "food_Type" | "foods" | "like_Res" | "orders" | "rate_Res" | "restaurant" | "sub_Food" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Food_Type: {
        payload: Prisma.$Food_TypePayload<ExtArgs>
        fields: Prisma.Food_TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Food_TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Food_TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload>
          }
          findFirst: {
            args: Prisma.Food_TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Food_TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload>
          }
          findMany: {
            args: Prisma.Food_TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload>[]
          }
          create: {
            args: Prisma.Food_TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload>
          }
          createMany: {
            args: Prisma.Food_TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Food_TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload>
          }
          update: {
            args: Prisma.Food_TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload>
          }
          deleteMany: {
            args: Prisma.Food_TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Food_TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Food_TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Food_TypePayload>
          }
          aggregate: {
            args: Prisma.Food_TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood_Type>
          }
          groupBy: {
            args: Prisma.Food_TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Food_TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Food_TypeCountArgs<ExtArgs>
            result: $Utils.Optional<Food_TypeCountAggregateOutputType> | number
          }
        }
      }
      Foods: {
        payload: Prisma.$FoodsPayload<ExtArgs>
        fields: Prisma.FoodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findFirst: {
            args: Prisma.FoodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findMany: {
            args: Prisma.FoodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>[]
          }
          create: {
            args: Prisma.FoodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          createMany: {
            args: Prisma.FoodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          update: {
            args: Prisma.FoodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          deleteMany: {
            args: Prisma.FoodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          aggregate: {
            args: Prisma.FoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoods>
          }
          groupBy: {
            args: Prisma.FoodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodsCountArgs<ExtArgs>
            result: $Utils.Optional<FoodsCountAggregateOutputType> | number
          }
        }
      }
      Like_Res: {
        payload: Prisma.$Like_ResPayload<ExtArgs>
        fields: Prisma.Like_ResFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Like_ResFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Like_ResFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload>
          }
          findFirst: {
            args: Prisma.Like_ResFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Like_ResFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload>
          }
          findMany: {
            args: Prisma.Like_ResFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload>[]
          }
          create: {
            args: Prisma.Like_ResCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload>
          }
          createMany: {
            args: Prisma.Like_ResCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Like_ResDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload>
          }
          update: {
            args: Prisma.Like_ResUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload>
          }
          deleteMany: {
            args: Prisma.Like_ResDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Like_ResUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Like_ResUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Like_ResPayload>
          }
          aggregate: {
            args: Prisma.Like_ResAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike_Res>
          }
          groupBy: {
            args: Prisma.Like_ResGroupByArgs<ExtArgs>
            result: $Utils.Optional<Like_ResGroupByOutputType>[]
          }
          count: {
            args: Prisma.Like_ResCountArgs<ExtArgs>
            result: $Utils.Optional<Like_ResCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Rate_Res: {
        payload: Prisma.$Rate_ResPayload<ExtArgs>
        fields: Prisma.Rate_ResFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Rate_ResFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Rate_ResFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload>
          }
          findFirst: {
            args: Prisma.Rate_ResFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Rate_ResFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload>
          }
          findMany: {
            args: Prisma.Rate_ResFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload>[]
          }
          create: {
            args: Prisma.Rate_ResCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload>
          }
          createMany: {
            args: Prisma.Rate_ResCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Rate_ResDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload>
          }
          update: {
            args: Prisma.Rate_ResUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload>
          }
          deleteMany: {
            args: Prisma.Rate_ResDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Rate_ResUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Rate_ResUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rate_ResPayload>
          }
          aggregate: {
            args: Prisma.Rate_ResAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRate_Res>
          }
          groupBy: {
            args: Prisma.Rate_ResGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rate_ResGroupByOutputType>[]
          }
          count: {
            args: Prisma.Rate_ResCountArgs<ExtArgs>
            result: $Utils.Optional<Rate_ResCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Sub_Food: {
        payload: Prisma.$Sub_FoodPayload<ExtArgs>
        fields: Prisma.Sub_FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sub_FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sub_FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload>
          }
          findFirst: {
            args: Prisma.Sub_FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sub_FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload>
          }
          findMany: {
            args: Prisma.Sub_FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload>[]
          }
          create: {
            args: Prisma.Sub_FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload>
          }
          createMany: {
            args: Prisma.Sub_FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Sub_FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload>
          }
          update: {
            args: Prisma.Sub_FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload>
          }
          deleteMany: {
            args: Prisma.Sub_FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sub_FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Sub_FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sub_FoodPayload>
          }
          aggregate: {
            args: Prisma.Sub_FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub_Food>
          }
          groupBy: {
            args: Prisma.Sub_FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sub_FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sub_FoodCountArgs<ExtArgs>
            result: $Utils.Optional<Sub_FoodCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    food_Type?: Food_TypeOmit
    foods?: FoodsOmit
    like_Res?: Like_ResOmit
    orders?: OrdersOmit
    rate_Res?: Rate_ResOmit
    restaurant?: RestaurantOmit
    sub_Food?: Sub_FoodOmit
    users?: UsersOmit
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
   * Count Type Food_TypeCountOutputType
   */

  export type Food_TypeCountOutputType = {
    Foods: number
  }

  export type Food_TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Foods?: boolean | Food_TypeCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * Food_TypeCountOutputType without action
   */
  export type Food_TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_TypeCountOutputType
     */
    select?: Food_TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Food_TypeCountOutputType without action
   */
  export type Food_TypeCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodsWhereInput
  }


  /**
   * Count Type FoodsCountOutputType
   */

  export type FoodsCountOutputType = {
    Orders: number
    Sub_Food: number
  }

  export type FoodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | FoodsCountOutputTypeCountOrdersArgs
    Sub_Food?: boolean | FoodsCountOutputTypeCountSub_FoodArgs
  }

  // Custom InputTypes
  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodsCountOutputType
     */
    select?: FoodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountSub_FoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sub_FoodWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    Like_Res: number
    Rate_Res: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Like_Res?: boolean | RestaurantCountOutputTypeCountLike_ResArgs
    Rate_Res?: boolean | RestaurantCountOutputTypeCountRate_ResArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountLike_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Like_ResWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountRate_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rate_ResWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Like_Res: number
    Orders: number
    Rate_Res: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Like_Res?: boolean | UsersCountOutputTypeCountLike_ResArgs
    Orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    Rate_Res?: boolean | UsersCountOutputTypeCountRate_ResArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLike_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Like_ResWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRate_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rate_ResWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Food_Type
   */

  export type AggregateFood_Type = {
    _count: Food_TypeCountAggregateOutputType | null
    _avg: Food_TypeAvgAggregateOutputType | null
    _sum: Food_TypeSumAggregateOutputType | null
    _min: Food_TypeMinAggregateOutputType | null
    _max: Food_TypeMaxAggregateOutputType | null
  }

  export type Food_TypeAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type Food_TypeSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type Food_TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Food_TypeCountAggregateOutputType = {
    id: number
    name: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Food_TypeAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type Food_TypeSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type Food_TypeMinAggregateInputType = {
    id?: true
    name?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_TypeMaxAggregateInputType = {
    id?: true
    name?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Food_TypeCountAggregateInputType = {
    id?: true
    name?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Food_TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food_Type to aggregate.
     */
    where?: Food_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_Types to fetch.
     */
    orderBy?: Food_TypeOrderByWithRelationInput | Food_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Food_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Food_Types
    **/
    _count?: true | Food_TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Food_TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Food_TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_TypeMaxAggregateInputType
  }

  export type GetFood_TypeAggregateType<T extends Food_TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_Type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_Type[P]>
      : GetScalarType<T[P], AggregateFood_Type[P]>
  }




  export type Food_TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Food_TypeWhereInput
    orderBy?: Food_TypeOrderByWithAggregationInput | Food_TypeOrderByWithAggregationInput[]
    by: Food_TypeScalarFieldEnum[] | Food_TypeScalarFieldEnum
    having?: Food_TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_TypeCountAggregateInputType | true
    _avg?: Food_TypeAvgAggregateInputType
    _sum?: Food_TypeSumAggregateInputType
    _min?: Food_TypeMinAggregateInputType
    _max?: Food_TypeMaxAggregateInputType
  }

  export type Food_TypeGroupByOutputType = {
    id: number
    name: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Food_TypeCountAggregateOutputType | null
    _avg: Food_TypeAvgAggregateOutputType | null
    _sum: Food_TypeSumAggregateOutputType | null
    _min: Food_TypeMinAggregateOutputType | null
    _max: Food_TypeMaxAggregateOutputType | null
  }

  type GetFood_TypeGroupByPayload<T extends Food_TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_TypeGroupByOutputType[P]>
            : GetScalarType<T[P], Food_TypeGroupByOutputType[P]>
        }
      >
    >


  export type Food_TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Foods?: boolean | Food_Type$FoodsArgs<ExtArgs>
    _count?: boolean | Food_TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food_Type"]>



  export type Food_TypeSelectScalar = {
    id?: boolean
    name?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Food_TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["food_Type"]>
  export type Food_TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Foods?: boolean | Food_Type$FoodsArgs<ExtArgs>
    _count?: boolean | Food_TypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Food_TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food_Type"
    objects: {
      Foods: Prisma.$FoodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["food_Type"]>
    composites: {}
  }

  type Food_TypeGetPayload<S extends boolean | null | undefined | Food_TypeDefaultArgs> = $Result.GetResult<Prisma.$Food_TypePayload, S>

  type Food_TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Food_TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Food_TypeCountAggregateInputType | true
    }

  export interface Food_TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food_Type'], meta: { name: 'Food_Type' } }
    /**
     * Find zero or one Food_Type that matches the filter.
     * @param {Food_TypeFindUniqueArgs} args - Arguments to find a Food_Type
     * @example
     * // Get one Food_Type
     * const food_Type = await prisma.food_Type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Food_TypeFindUniqueArgs>(args: SelectSubset<T, Food_TypeFindUniqueArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food_Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Food_TypeFindUniqueOrThrowArgs} args - Arguments to find a Food_Type
     * @example
     * // Get one Food_Type
     * const food_Type = await prisma.food_Type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Food_TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, Food_TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_TypeFindFirstArgs} args - Arguments to find a Food_Type
     * @example
     * // Get one Food_Type
     * const food_Type = await prisma.food_Type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Food_TypeFindFirstArgs>(args?: SelectSubset<T, Food_TypeFindFirstArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_TypeFindFirstOrThrowArgs} args - Arguments to find a Food_Type
     * @example
     * // Get one Food_Type
     * const food_Type = await prisma.food_Type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Food_TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, Food_TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Food_Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_Types
     * const food_Types = await prisma.food_Type.findMany()
     * 
     * // Get first 10 Food_Types
     * const food_Types = await prisma.food_Type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const food_TypeWithIdOnly = await prisma.food_Type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Food_TypeFindManyArgs>(args?: SelectSubset<T, Food_TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food_Type.
     * @param {Food_TypeCreateArgs} args - Arguments to create a Food_Type.
     * @example
     * // Create one Food_Type
     * const Food_Type = await prisma.food_Type.create({
     *   data: {
     *     // ... data to create a Food_Type
     *   }
     * })
     * 
     */
    create<T extends Food_TypeCreateArgs>(args: SelectSubset<T, Food_TypeCreateArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Food_Types.
     * @param {Food_TypeCreateManyArgs} args - Arguments to create many Food_Types.
     * @example
     * // Create many Food_Types
     * const food_Type = await prisma.food_Type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Food_TypeCreateManyArgs>(args?: SelectSubset<T, Food_TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food_Type.
     * @param {Food_TypeDeleteArgs} args - Arguments to delete one Food_Type.
     * @example
     * // Delete one Food_Type
     * const Food_Type = await prisma.food_Type.delete({
     *   where: {
     *     // ... filter to delete one Food_Type
     *   }
     * })
     * 
     */
    delete<T extends Food_TypeDeleteArgs>(args: SelectSubset<T, Food_TypeDeleteArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food_Type.
     * @param {Food_TypeUpdateArgs} args - Arguments to update one Food_Type.
     * @example
     * // Update one Food_Type
     * const food_Type = await prisma.food_Type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Food_TypeUpdateArgs>(args: SelectSubset<T, Food_TypeUpdateArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Food_Types.
     * @param {Food_TypeDeleteManyArgs} args - Arguments to filter Food_Types to delete.
     * @example
     * // Delete a few Food_Types
     * const { count } = await prisma.food_Type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Food_TypeDeleteManyArgs>(args?: SelectSubset<T, Food_TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_Types
     * const food_Type = await prisma.food_Type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Food_TypeUpdateManyArgs>(args: SelectSubset<T, Food_TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food_Type.
     * @param {Food_TypeUpsertArgs} args - Arguments to update or create a Food_Type.
     * @example
     * // Update or create a Food_Type
     * const food_Type = await prisma.food_Type.upsert({
     *   create: {
     *     // ... data to create a Food_Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_Type we want to update
     *   }
     * })
     */
    upsert<T extends Food_TypeUpsertArgs>(args: SelectSubset<T, Food_TypeUpsertArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Food_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_TypeCountArgs} args - Arguments to filter Food_Types to count.
     * @example
     * // Count the number of Food_Types
     * const count = await prisma.food_Type.count({
     *   where: {
     *     // ... the filter for the Food_Types we want to count
     *   }
     * })
    **/
    count<T extends Food_TypeCountArgs>(
      args?: Subset<T, Food_TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Food_TypeAggregateArgs>(args: Subset<T, Food_TypeAggregateArgs>): Prisma.PrismaPromise<GetFood_TypeAggregateType<T>>

    /**
     * Group by Food_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_TypeGroupByArgs} args - Group by arguments.
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
      T extends Food_TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Food_TypeGroupByArgs['orderBy'] }
        : { orderBy?: Food_TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Food_TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_TypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food_Type model
   */
  readonly fields: Food_TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food_Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Food_TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Foods<T extends Food_Type$FoodsArgs<ExtArgs> = {}>(args?: Subset<T, Food_Type$FoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Food_Type model
   */
  interface Food_TypeFieldRefs {
    readonly id: FieldRef<"Food_Type", 'Int'>
    readonly name: FieldRef<"Food_Type", 'String'>
    readonly deletedBy: FieldRef<"Food_Type", 'Int'>
    readonly isDeleted: FieldRef<"Food_Type", 'Boolean'>
    readonly deletedAt: FieldRef<"Food_Type", 'DateTime'>
    readonly createdAt: FieldRef<"Food_Type", 'DateTime'>
    readonly updatedAt: FieldRef<"Food_Type", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Food_Type findUnique
   */
  export type Food_TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Food_Type to fetch.
     */
    where: Food_TypeWhereUniqueInput
  }

  /**
   * Food_Type findUniqueOrThrow
   */
  export type Food_TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Food_Type to fetch.
     */
    where: Food_TypeWhereUniqueInput
  }

  /**
   * Food_Type findFirst
   */
  export type Food_TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Food_Type to fetch.
     */
    where?: Food_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_Types to fetch.
     */
    orderBy?: Food_TypeOrderByWithRelationInput | Food_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Food_Types.
     */
    cursor?: Food_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Food_Types.
     */
    distinct?: Food_TypeScalarFieldEnum | Food_TypeScalarFieldEnum[]
  }

  /**
   * Food_Type findFirstOrThrow
   */
  export type Food_TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Food_Type to fetch.
     */
    where?: Food_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_Types to fetch.
     */
    orderBy?: Food_TypeOrderByWithRelationInput | Food_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Food_Types.
     */
    cursor?: Food_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Food_Types.
     */
    distinct?: Food_TypeScalarFieldEnum | Food_TypeScalarFieldEnum[]
  }

  /**
   * Food_Type findMany
   */
  export type Food_TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Food_Types to fetch.
     */
    where?: Food_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Food_Types to fetch.
     */
    orderBy?: Food_TypeOrderByWithRelationInput | Food_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Food_Types.
     */
    cursor?: Food_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Food_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Food_Types.
     */
    skip?: number
    distinct?: Food_TypeScalarFieldEnum | Food_TypeScalarFieldEnum[]
  }

  /**
   * Food_Type create
   */
  export type Food_TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Food_Type.
     */
    data?: XOR<Food_TypeCreateInput, Food_TypeUncheckedCreateInput>
  }

  /**
   * Food_Type createMany
   */
  export type Food_TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Food_Types.
     */
    data: Food_TypeCreateManyInput | Food_TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food_Type update
   */
  export type Food_TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Food_Type.
     */
    data: XOR<Food_TypeUpdateInput, Food_TypeUncheckedUpdateInput>
    /**
     * Choose, which Food_Type to update.
     */
    where: Food_TypeWhereUniqueInput
  }

  /**
   * Food_Type updateMany
   */
  export type Food_TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Food_Types.
     */
    data: XOR<Food_TypeUpdateManyMutationInput, Food_TypeUncheckedUpdateManyInput>
    /**
     * Filter which Food_Types to update
     */
    where?: Food_TypeWhereInput
    /**
     * Limit how many Food_Types to update.
     */
    limit?: number
  }

  /**
   * Food_Type upsert
   */
  export type Food_TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Food_Type to update in case it exists.
     */
    where: Food_TypeWhereUniqueInput
    /**
     * In case the Food_Type found by the `where` argument doesn't exist, create a new Food_Type with this data.
     */
    create: XOR<Food_TypeCreateInput, Food_TypeUncheckedCreateInput>
    /**
     * In case the Food_Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Food_TypeUpdateInput, Food_TypeUncheckedUpdateInput>
  }

  /**
   * Food_Type delete
   */
  export type Food_TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    /**
     * Filter which Food_Type to delete.
     */
    where: Food_TypeWhereUniqueInput
  }

  /**
   * Food_Type deleteMany
   */
  export type Food_TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food_Types to delete
     */
    where?: Food_TypeWhereInput
    /**
     * Limit how many Food_Types to delete.
     */
    limit?: number
  }

  /**
   * Food_Type.Foods
   */
  export type Food_Type$FoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    where?: FoodsWhereInput
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    cursor?: FoodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Food_Type without action
   */
  export type Food_TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
  }


  /**
   * Model Foods
   */

  export type AggregateFoods = {
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  export type FoodsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    type_id: number | null
    deletedBy: number | null
  }

  export type FoodsSumAggregateOutputType = {
    id: number | null
    price: number | null
    type_id: number | null
    deletedBy: number | null
  }

  export type FoodsMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    description: string | null
    type_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    price: number | null
    description: string | null
    type_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsCountAggregateOutputType = {
    id: number
    name: number
    image: number
    price: number
    description: number
    type_id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodsAvgAggregateInputType = {
    id?: true
    price?: true
    type_id?: true
    deletedBy?: true
  }

  export type FoodsSumAggregateInputType = {
    id?: true
    price?: true
    type_id?: true
    deletedBy?: true
  }

  export type FoodsMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    description?: true
    type_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    description?: true
    type_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    price?: true
    description?: true
    type_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to aggregate.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodsMaxAggregateInputType
  }

  export type GetFoodsAggregateType<T extends FoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateFoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoods[P]>
      : GetScalarType<T[P], AggregateFoods[P]>
  }




  export type FoodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodsWhereInput
    orderBy?: FoodsOrderByWithAggregationInput | FoodsOrderByWithAggregationInput[]
    by: FoodsScalarFieldEnum[] | FoodsScalarFieldEnum
    having?: FoodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodsCountAggregateInputType | true
    _avg?: FoodsAvgAggregateInputType
    _sum?: FoodsSumAggregateInputType
    _min?: FoodsMinAggregateInputType
    _max?: FoodsMaxAggregateInputType
  }

  export type FoodsGroupByOutputType = {
    id: number
    name: string | null
    image: string | null
    price: number | null
    description: string | null
    type_id: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  type GetFoodsGroupByPayload<T extends FoodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodsGroupByOutputType[P]>
            : GetScalarType<T[P], FoodsGroupByOutputType[P]>
        }
      >
    >


  export type FoodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    description?: boolean
    type_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Food_Type?: boolean | Foods$Food_TypeArgs<ExtArgs>
    Orders?: boolean | Foods$OrdersArgs<ExtArgs>
    Sub_Food?: boolean | Foods$Sub_FoodArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foods"]>



  export type FoodsSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    price?: boolean
    description?: boolean
    type_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "price" | "description" | "type_id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["foods"]>
  export type FoodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Food_Type?: boolean | Foods$Food_TypeArgs<ExtArgs>
    Orders?: boolean | Foods$OrdersArgs<ExtArgs>
    Sub_Food?: boolean | Foods$Sub_FoodArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foods"
    objects: {
      Food_Type: Prisma.$Food_TypePayload<ExtArgs> | null
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      Sub_Food: Prisma.$Sub_FoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      image: string | null
      price: number | null
      description: string | null
      type_id: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foods"]>
    composites: {}
  }

  type FoodsGetPayload<S extends boolean | null | undefined | FoodsDefaultArgs> = $Result.GetResult<Prisma.$FoodsPayload, S>

  type FoodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodsCountAggregateInputType | true
    }

  export interface FoodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foods'], meta: { name: 'Foods' } }
    /**
     * Find zero or one Foods that matches the filter.
     * @param {FoodsFindUniqueArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodsFindUniqueArgs>(args: SelectSubset<T, FoodsFindUniqueArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodsFindUniqueOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodsFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodsFindFirstArgs>(args?: SelectSubset<T, FoodsFindFirstArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodsFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.foods.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.foods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodsWithIdOnly = await prisma.foods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodsFindManyArgs>(args?: SelectSubset<T, FoodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foods.
     * @param {FoodsCreateArgs} args - Arguments to create a Foods.
     * @example
     * // Create one Foods
     * const Foods = await prisma.foods.create({
     *   data: {
     *     // ... data to create a Foods
     *   }
     * })
     * 
     */
    create<T extends FoodsCreateArgs>(args: SelectSubset<T, FoodsCreateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodsCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const foods = await prisma.foods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodsCreateManyArgs>(args?: SelectSubset<T, FoodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foods.
     * @param {FoodsDeleteArgs} args - Arguments to delete one Foods.
     * @example
     * // Delete one Foods
     * const Foods = await prisma.foods.delete({
     *   where: {
     *     // ... filter to delete one Foods
     *   }
     * })
     * 
     */
    delete<T extends FoodsDeleteArgs>(args: SelectSubset<T, FoodsDeleteArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foods.
     * @param {FoodsUpdateArgs} args - Arguments to update one Foods.
     * @example
     * // Update one Foods
     * const foods = await prisma.foods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodsUpdateArgs>(args: SelectSubset<T, FoodsUpdateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodsDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.foods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodsDeleteManyArgs>(args?: SelectSubset<T, FoodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const foods = await prisma.foods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodsUpdateManyArgs>(args: SelectSubset<T, FoodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foods.
     * @param {FoodsUpsertArgs} args - Arguments to update or create a Foods.
     * @example
     * // Update or create a Foods
     * const foods = await prisma.foods.upsert({
     *   create: {
     *     // ... data to create a Foods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foods we want to update
     *   }
     * })
     */
    upsert<T extends FoodsUpsertArgs>(args: SelectSubset<T, FoodsUpsertArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.foods.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodsCountArgs>(
      args?: Subset<T, FoodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodsAggregateArgs>(args: Subset<T, FoodsAggregateArgs>): Prisma.PrismaPromise<GetFoodsAggregateType<T>>

    /**
     * Group by Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsGroupByArgs} args - Group by arguments.
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
      T extends FoodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodsGroupByArgs['orderBy'] }
        : { orderBy?: FoodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foods model
   */
  readonly fields: FoodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Food_Type<T extends Foods$Food_TypeArgs<ExtArgs> = {}>(args?: Subset<T, Foods$Food_TypeArgs<ExtArgs>>): Prisma__Food_TypeClient<$Result.GetResult<Prisma.$Food_TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Orders<T extends Foods$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Foods$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sub_Food<T extends Foods$Sub_FoodArgs<ExtArgs> = {}>(args?: Subset<T, Foods$Sub_FoodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Foods model
   */
  interface FoodsFieldRefs {
    readonly id: FieldRef<"Foods", 'Int'>
    readonly name: FieldRef<"Foods", 'String'>
    readonly image: FieldRef<"Foods", 'String'>
    readonly price: FieldRef<"Foods", 'Float'>
    readonly description: FieldRef<"Foods", 'String'>
    readonly type_id: FieldRef<"Foods", 'Int'>
    readonly deletedBy: FieldRef<"Foods", 'Int'>
    readonly isDeleted: FieldRef<"Foods", 'Boolean'>
    readonly deletedAt: FieldRef<"Foods", 'DateTime'>
    readonly createdAt: FieldRef<"Foods", 'DateTime'>
    readonly updatedAt: FieldRef<"Foods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Foods findUnique
   */
  export type FoodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findUniqueOrThrow
   */
  export type FoodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findFirst
   */
  export type FoodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findFirstOrThrow
   */
  export type FoodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findMany
   */
  export type FoodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods create
   */
  export type FoodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to create a Foods.
     */
    data?: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
  }

  /**
   * Foods createMany
   */
  export type FoodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodsCreateManyInput | FoodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foods update
   */
  export type FoodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to update a Foods.
     */
    data: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
    /**
     * Choose, which Foods to update.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods updateMany
   */
  export type FoodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodsUpdateManyMutationInput, FoodsUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodsWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Foods upsert
   */
  export type FoodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The filter to search for the Foods to update in case it exists.
     */
    where: FoodsWhereUniqueInput
    /**
     * In case the Foods found by the `where` argument doesn't exist, create a new Foods with this data.
     */
    create: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
    /**
     * In case the Foods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
  }

  /**
   * Foods delete
   */
  export type FoodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter which Foods to delete.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods deleteMany
   */
  export type FoodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodsWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Foods.Food_Type
   */
  export type Foods$Food_TypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_Type
     */
    select?: Food_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food_Type
     */
    omit?: Food_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Food_TypeInclude<ExtArgs> | null
    where?: Food_TypeWhereInput
  }

  /**
   * Foods.Orders
   */
  export type Foods$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Foods.Sub_Food
   */
  export type Foods$Sub_FoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    where?: Sub_FoodWhereInput
    orderBy?: Sub_FoodOrderByWithRelationInput | Sub_FoodOrderByWithRelationInput[]
    cursor?: Sub_FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_FoodScalarFieldEnum | Sub_FoodScalarFieldEnum[]
  }

  /**
   * Foods without action
   */
  export type FoodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
  }


  /**
   * Model Like_Res
   */

  export type AggregateLike_Res = {
    _count: Like_ResCountAggregateOutputType | null
    _avg: Like_ResAvgAggregateOutputType | null
    _sum: Like_ResSumAggregateOutputType | null
    _min: Like_ResMinAggregateOutputType | null
    _max: Like_ResMaxAggregateOutputType | null
  }

  export type Like_ResAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
  }

  export type Like_ResSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
  }

  export type Like_ResMinAggregateOutputType = {
    id: number | null
    date_like: Date | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    isLike: boolean | null
  }

  export type Like_ResMaxAggregateOutputType = {
    id: number | null
    date_like: Date | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    isLike: boolean | null
  }

  export type Like_ResCountAggregateOutputType = {
    id: number
    date_like: number
    user_id: number
    res_id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    isLike: number
    _all: number
  }


  export type Like_ResAvgAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
  }

  export type Like_ResSumAggregateInputType = {
    id?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
  }

  export type Like_ResMinAggregateInputType = {
    id?: true
    date_like?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
  }

  export type Like_ResMaxAggregateInputType = {
    id?: true
    date_like?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
  }

  export type Like_ResCountAggregateInputType = {
    id?: true
    date_like?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    isLike?: true
    _all?: true
  }

  export type Like_ResAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like_Res to aggregate.
     */
    where?: Like_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Like_Res to fetch.
     */
    orderBy?: Like_ResOrderByWithRelationInput | Like_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Like_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Like_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Like_Res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Like_Res
    **/
    _count?: true | Like_ResCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Like_ResAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Like_ResSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Like_ResMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Like_ResMaxAggregateInputType
  }

  export type GetLike_ResAggregateType<T extends Like_ResAggregateArgs> = {
        [P in keyof T & keyof AggregateLike_Res]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike_Res[P]>
      : GetScalarType<T[P], AggregateLike_Res[P]>
  }




  export type Like_ResGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Like_ResWhereInput
    orderBy?: Like_ResOrderByWithAggregationInput | Like_ResOrderByWithAggregationInput[]
    by: Like_ResScalarFieldEnum[] | Like_ResScalarFieldEnum
    having?: Like_ResScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Like_ResCountAggregateInputType | true
    _avg?: Like_ResAvgAggregateInputType
    _sum?: Like_ResSumAggregateInputType
    _min?: Like_ResMinAggregateInputType
    _max?: Like_ResMaxAggregateInputType
  }

  export type Like_ResGroupByOutputType = {
    id: number
    date_like: Date | null
    user_id: number | null
    res_id: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    isLike: boolean | null
    _count: Like_ResCountAggregateOutputType | null
    _avg: Like_ResAvgAggregateOutputType | null
    _sum: Like_ResSumAggregateOutputType | null
    _min: Like_ResMinAggregateOutputType | null
    _max: Like_ResMaxAggregateOutputType | null
  }

  type GetLike_ResGroupByPayload<T extends Like_ResGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Like_ResGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Like_ResGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Like_ResGroupByOutputType[P]>
            : GetScalarType<T[P], Like_ResGroupByOutputType[P]>
        }
      >
    >


  export type Like_ResSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_like?: boolean
    user_id?: boolean
    res_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
    Users?: boolean | Like_Res$UsersArgs<ExtArgs>
    Restaurant?: boolean | Like_Res$RestaurantArgs<ExtArgs>
  }, ExtArgs["result"]["like_Res"]>



  export type Like_ResSelectScalar = {
    id?: boolean
    date_like?: boolean
    user_id?: boolean
    res_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isLike?: boolean
  }

  export type Like_ResOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date_like" | "user_id" | "res_id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt" | "isLike", ExtArgs["result"]["like_Res"]>
  export type Like_ResInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Like_Res$UsersArgs<ExtArgs>
    Restaurant?: boolean | Like_Res$RestaurantArgs<ExtArgs>
  }

  export type $Like_ResPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like_Res"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Restaurant: Prisma.$RestaurantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date_like: Date | null
      user_id: number | null
      res_id: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
      isLike: boolean | null
    }, ExtArgs["result"]["like_Res"]>
    composites: {}
  }

  type Like_ResGetPayload<S extends boolean | null | undefined | Like_ResDefaultArgs> = $Result.GetResult<Prisma.$Like_ResPayload, S>

  type Like_ResCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Like_ResFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Like_ResCountAggregateInputType | true
    }

  export interface Like_ResDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like_Res'], meta: { name: 'Like_Res' } }
    /**
     * Find zero or one Like_Res that matches the filter.
     * @param {Like_ResFindUniqueArgs} args - Arguments to find a Like_Res
     * @example
     * // Get one Like_Res
     * const like_Res = await prisma.like_Res.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Like_ResFindUniqueArgs>(args: SelectSubset<T, Like_ResFindUniqueArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like_Res that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Like_ResFindUniqueOrThrowArgs} args - Arguments to find a Like_Res
     * @example
     * // Get one Like_Res
     * const like_Res = await prisma.like_Res.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Like_ResFindUniqueOrThrowArgs>(args: SelectSubset<T, Like_ResFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like_Res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_ResFindFirstArgs} args - Arguments to find a Like_Res
     * @example
     * // Get one Like_Res
     * const like_Res = await prisma.like_Res.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Like_ResFindFirstArgs>(args?: SelectSubset<T, Like_ResFindFirstArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like_Res that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_ResFindFirstOrThrowArgs} args - Arguments to find a Like_Res
     * @example
     * // Get one Like_Res
     * const like_Res = await prisma.like_Res.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Like_ResFindFirstOrThrowArgs>(args?: SelectSubset<T, Like_ResFindFirstOrThrowArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Like_Res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_ResFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Like_Res
     * const like_Res = await prisma.like_Res.findMany()
     * 
     * // Get first 10 Like_Res
     * const like_Res = await prisma.like_Res.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const like_ResWithIdOnly = await prisma.like_Res.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Like_ResFindManyArgs>(args?: SelectSubset<T, Like_ResFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like_Res.
     * @param {Like_ResCreateArgs} args - Arguments to create a Like_Res.
     * @example
     * // Create one Like_Res
     * const Like_Res = await prisma.like_Res.create({
     *   data: {
     *     // ... data to create a Like_Res
     *   }
     * })
     * 
     */
    create<T extends Like_ResCreateArgs>(args: SelectSubset<T, Like_ResCreateArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Like_Res.
     * @param {Like_ResCreateManyArgs} args - Arguments to create many Like_Res.
     * @example
     * // Create many Like_Res
     * const like_Res = await prisma.like_Res.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Like_ResCreateManyArgs>(args?: SelectSubset<T, Like_ResCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like_Res.
     * @param {Like_ResDeleteArgs} args - Arguments to delete one Like_Res.
     * @example
     * // Delete one Like_Res
     * const Like_Res = await prisma.like_Res.delete({
     *   where: {
     *     // ... filter to delete one Like_Res
     *   }
     * })
     * 
     */
    delete<T extends Like_ResDeleteArgs>(args: SelectSubset<T, Like_ResDeleteArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like_Res.
     * @param {Like_ResUpdateArgs} args - Arguments to update one Like_Res.
     * @example
     * // Update one Like_Res
     * const like_Res = await prisma.like_Res.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Like_ResUpdateArgs>(args: SelectSubset<T, Like_ResUpdateArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Like_Res.
     * @param {Like_ResDeleteManyArgs} args - Arguments to filter Like_Res to delete.
     * @example
     * // Delete a few Like_Res
     * const { count } = await prisma.like_Res.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Like_ResDeleteManyArgs>(args?: SelectSubset<T, Like_ResDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Like_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_ResUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Like_Res
     * const like_Res = await prisma.like_Res.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Like_ResUpdateManyArgs>(args: SelectSubset<T, Like_ResUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like_Res.
     * @param {Like_ResUpsertArgs} args - Arguments to update or create a Like_Res.
     * @example
     * // Update or create a Like_Res
     * const like_Res = await prisma.like_Res.upsert({
     *   create: {
     *     // ... data to create a Like_Res
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like_Res we want to update
     *   }
     * })
     */
    upsert<T extends Like_ResUpsertArgs>(args: SelectSubset<T, Like_ResUpsertArgs<ExtArgs>>): Prisma__Like_ResClient<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Like_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_ResCountArgs} args - Arguments to filter Like_Res to count.
     * @example
     * // Count the number of Like_Res
     * const count = await prisma.like_Res.count({
     *   where: {
     *     // ... the filter for the Like_Res we want to count
     *   }
     * })
    **/
    count<T extends Like_ResCountArgs>(
      args?: Subset<T, Like_ResCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Like_ResCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_ResAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Like_ResAggregateArgs>(args: Subset<T, Like_ResAggregateArgs>): Prisma.PrismaPromise<GetLike_ResAggregateType<T>>

    /**
     * Group by Like_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Like_ResGroupByArgs} args - Group by arguments.
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
      T extends Like_ResGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Like_ResGroupByArgs['orderBy'] }
        : { orderBy?: Like_ResGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Like_ResGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLike_ResGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like_Res model
   */
  readonly fields: Like_ResFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like_Res.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Like_ResClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Like_Res$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Like_Res$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Restaurant<T extends Like_Res$RestaurantArgs<ExtArgs> = {}>(args?: Subset<T, Like_Res$RestaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like_Res model
   */
  interface Like_ResFieldRefs {
    readonly id: FieldRef<"Like_Res", 'Int'>
    readonly date_like: FieldRef<"Like_Res", 'DateTime'>
    readonly user_id: FieldRef<"Like_Res", 'Int'>
    readonly res_id: FieldRef<"Like_Res", 'Int'>
    readonly deletedBy: FieldRef<"Like_Res", 'Int'>
    readonly isDeleted: FieldRef<"Like_Res", 'Boolean'>
    readonly deletedAt: FieldRef<"Like_Res", 'DateTime'>
    readonly createdAt: FieldRef<"Like_Res", 'DateTime'>
    readonly updatedAt: FieldRef<"Like_Res", 'DateTime'>
    readonly isLike: FieldRef<"Like_Res", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Like_Res findUnique
   */
  export type Like_ResFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * Filter, which Like_Res to fetch.
     */
    where: Like_ResWhereUniqueInput
  }

  /**
   * Like_Res findUniqueOrThrow
   */
  export type Like_ResFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * Filter, which Like_Res to fetch.
     */
    where: Like_ResWhereUniqueInput
  }

  /**
   * Like_Res findFirst
   */
  export type Like_ResFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * Filter, which Like_Res to fetch.
     */
    where?: Like_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Like_Res to fetch.
     */
    orderBy?: Like_ResOrderByWithRelationInput | Like_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Like_Res.
     */
    cursor?: Like_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Like_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Like_Res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Like_Res.
     */
    distinct?: Like_ResScalarFieldEnum | Like_ResScalarFieldEnum[]
  }

  /**
   * Like_Res findFirstOrThrow
   */
  export type Like_ResFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * Filter, which Like_Res to fetch.
     */
    where?: Like_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Like_Res to fetch.
     */
    orderBy?: Like_ResOrderByWithRelationInput | Like_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Like_Res.
     */
    cursor?: Like_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Like_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Like_Res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Like_Res.
     */
    distinct?: Like_ResScalarFieldEnum | Like_ResScalarFieldEnum[]
  }

  /**
   * Like_Res findMany
   */
  export type Like_ResFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * Filter, which Like_Res to fetch.
     */
    where?: Like_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Like_Res to fetch.
     */
    orderBy?: Like_ResOrderByWithRelationInput | Like_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Like_Res.
     */
    cursor?: Like_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Like_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Like_Res.
     */
    skip?: number
    distinct?: Like_ResScalarFieldEnum | Like_ResScalarFieldEnum[]
  }

  /**
   * Like_Res create
   */
  export type Like_ResCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * The data needed to create a Like_Res.
     */
    data?: XOR<Like_ResCreateInput, Like_ResUncheckedCreateInput>
  }

  /**
   * Like_Res createMany
   */
  export type Like_ResCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Like_Res.
     */
    data: Like_ResCreateManyInput | Like_ResCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like_Res update
   */
  export type Like_ResUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * The data needed to update a Like_Res.
     */
    data: XOR<Like_ResUpdateInput, Like_ResUncheckedUpdateInput>
    /**
     * Choose, which Like_Res to update.
     */
    where: Like_ResWhereUniqueInput
  }

  /**
   * Like_Res updateMany
   */
  export type Like_ResUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Like_Res.
     */
    data: XOR<Like_ResUpdateManyMutationInput, Like_ResUncheckedUpdateManyInput>
    /**
     * Filter which Like_Res to update
     */
    where?: Like_ResWhereInput
    /**
     * Limit how many Like_Res to update.
     */
    limit?: number
  }

  /**
   * Like_Res upsert
   */
  export type Like_ResUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * The filter to search for the Like_Res to update in case it exists.
     */
    where: Like_ResWhereUniqueInput
    /**
     * In case the Like_Res found by the `where` argument doesn't exist, create a new Like_Res with this data.
     */
    create: XOR<Like_ResCreateInput, Like_ResUncheckedCreateInput>
    /**
     * In case the Like_Res was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Like_ResUpdateInput, Like_ResUncheckedUpdateInput>
  }

  /**
   * Like_Res delete
   */
  export type Like_ResDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    /**
     * Filter which Like_Res to delete.
     */
    where: Like_ResWhereUniqueInput
  }

  /**
   * Like_Res deleteMany
   */
  export type Like_ResDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like_Res to delete
     */
    where?: Like_ResWhereInput
    /**
     * Limit how many Like_Res to delete.
     */
    limit?: number
  }

  /**
   * Like_Res.Users
   */
  export type Like_Res$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Like_Res.Restaurant
   */
  export type Like_Res$RestaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * Like_Res without action
   */
  export type Like_ResDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
    amount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
    amount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    userId: number
    foodId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    amount: number
    code: number
    arr_sub_id: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    amount?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    code?: true
    arr_sub_id?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    code?: true
    arr_sub_id?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    code?: true
    arr_sub_id?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    userId: number | null
    foodId: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    amount: number | null
    code: string | null
    arr_sub_id: string | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    code?: boolean
    arr_sub_id?: boolean
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Foods?: boolean | Orders$FoodsArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    id?: boolean
    userId?: boolean
    foodId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    code?: boolean
    arr_sub_id?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt" | "amount" | "code" | "arr_sub_id", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Foods?: boolean | Orders$FoodsArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Foods: Prisma.$FoodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      foodId: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
      amount: number | null
      code: string | null
      arr_sub_id: string | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Orders$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Orders$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Foods<T extends Orders$FoodsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$FoodsArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly userId: FieldRef<"Orders", 'Int'>
    readonly foodId: FieldRef<"Orders", 'Int'>
    readonly deletedBy: FieldRef<"Orders", 'Int'>
    readonly isDeleted: FieldRef<"Orders", 'Boolean'>
    readonly deletedAt: FieldRef<"Orders", 'DateTime'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
    readonly amount: FieldRef<"Orders", 'Int'>
    readonly code: FieldRef<"Orders", 'String'>
    readonly arr_sub_id: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data?: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Users
   */
  export type Orders$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Orders.Foods
   */
  export type Orders$FoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    where?: FoodsWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Rate_Res
   */

  export type AggregateRate_Res = {
    _count: Rate_ResCountAggregateOutputType | null
    _avg: Rate_ResAvgAggregateOutputType | null
    _sum: Rate_ResSumAggregateOutputType | null
    _min: Rate_ResMinAggregateOutputType | null
    _max: Rate_ResMaxAggregateOutputType | null
  }

  export type Rate_ResAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
  }

  export type Rate_ResSumAggregateOutputType = {
    id: number | null
    amount: number | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
  }

  export type Rate_ResMinAggregateOutputType = {
    id: number | null
    amount: number | null
    date_rate: Date | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rate_ResMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    date_rate: Date | null
    user_id: number | null
    res_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rate_ResCountAggregateOutputType = {
    id: number
    amount: number
    date_rate: number
    user_id: number
    res_id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Rate_ResAvgAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
  }

  export type Rate_ResSumAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
  }

  export type Rate_ResMinAggregateInputType = {
    id?: true
    amount?: true
    date_rate?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rate_ResMaxAggregateInputType = {
    id?: true
    amount?: true
    date_rate?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rate_ResCountAggregateInputType = {
    id?: true
    amount?: true
    date_rate?: true
    user_id?: true
    res_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Rate_ResAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rate_Res to aggregate.
     */
    where?: Rate_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rate_Res to fetch.
     */
    orderBy?: Rate_ResOrderByWithRelationInput | Rate_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Rate_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rate_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rate_Res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rate_Res
    **/
    _count?: true | Rate_ResCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rate_ResAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rate_ResSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rate_ResMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rate_ResMaxAggregateInputType
  }

  export type GetRate_ResAggregateType<T extends Rate_ResAggregateArgs> = {
        [P in keyof T & keyof AggregateRate_Res]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRate_Res[P]>
      : GetScalarType<T[P], AggregateRate_Res[P]>
  }




  export type Rate_ResGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rate_ResWhereInput
    orderBy?: Rate_ResOrderByWithAggregationInput | Rate_ResOrderByWithAggregationInput[]
    by: Rate_ResScalarFieldEnum[] | Rate_ResScalarFieldEnum
    having?: Rate_ResScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rate_ResCountAggregateInputType | true
    _avg?: Rate_ResAvgAggregateInputType
    _sum?: Rate_ResSumAggregateInputType
    _min?: Rate_ResMinAggregateInputType
    _max?: Rate_ResMaxAggregateInputType
  }

  export type Rate_ResGroupByOutputType = {
    id: number
    amount: number | null
    date_rate: Date | null
    user_id: number | null
    res_id: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Rate_ResCountAggregateOutputType | null
    _avg: Rate_ResAvgAggregateOutputType | null
    _sum: Rate_ResSumAggregateOutputType | null
    _min: Rate_ResMinAggregateOutputType | null
    _max: Rate_ResMaxAggregateOutputType | null
  }

  type GetRate_ResGroupByPayload<T extends Rate_ResGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rate_ResGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rate_ResGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rate_ResGroupByOutputType[P]>
            : GetScalarType<T[P], Rate_ResGroupByOutputType[P]>
        }
      >
    >


  export type Rate_ResSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date_rate?: boolean
    user_id?: boolean
    res_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | Rate_Res$UsersArgs<ExtArgs>
    Restaurant?: boolean | Rate_Res$RestaurantArgs<ExtArgs>
  }, ExtArgs["result"]["rate_Res"]>



  export type Rate_ResSelectScalar = {
    id?: boolean
    amount?: boolean
    date_rate?: boolean
    user_id?: boolean
    res_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Rate_ResOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date_rate" | "user_id" | "res_id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["rate_Res"]>
  export type Rate_ResInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Rate_Res$UsersArgs<ExtArgs>
    Restaurant?: boolean | Rate_Res$RestaurantArgs<ExtArgs>
  }

  export type $Rate_ResPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rate_Res"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Restaurant: Prisma.$RestaurantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number | null
      date_rate: Date | null
      user_id: number | null
      res_id: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rate_Res"]>
    composites: {}
  }

  type Rate_ResGetPayload<S extends boolean | null | undefined | Rate_ResDefaultArgs> = $Result.GetResult<Prisma.$Rate_ResPayload, S>

  type Rate_ResCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Rate_ResFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rate_ResCountAggregateInputType | true
    }

  export interface Rate_ResDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rate_Res'], meta: { name: 'Rate_Res' } }
    /**
     * Find zero or one Rate_Res that matches the filter.
     * @param {Rate_ResFindUniqueArgs} args - Arguments to find a Rate_Res
     * @example
     * // Get one Rate_Res
     * const rate_Res = await prisma.rate_Res.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Rate_ResFindUniqueArgs>(args: SelectSubset<T, Rate_ResFindUniqueArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rate_Res that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Rate_ResFindUniqueOrThrowArgs} args - Arguments to find a Rate_Res
     * @example
     * // Get one Rate_Res
     * const rate_Res = await prisma.rate_Res.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Rate_ResFindUniqueOrThrowArgs>(args: SelectSubset<T, Rate_ResFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate_Res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_ResFindFirstArgs} args - Arguments to find a Rate_Res
     * @example
     * // Get one Rate_Res
     * const rate_Res = await prisma.rate_Res.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Rate_ResFindFirstArgs>(args?: SelectSubset<T, Rate_ResFindFirstArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rate_Res that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_ResFindFirstOrThrowArgs} args - Arguments to find a Rate_Res
     * @example
     * // Get one Rate_Res
     * const rate_Res = await prisma.rate_Res.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Rate_ResFindFirstOrThrowArgs>(args?: SelectSubset<T, Rate_ResFindFirstOrThrowArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rate_Res that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_ResFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rate_Res
     * const rate_Res = await prisma.rate_Res.findMany()
     * 
     * // Get first 10 Rate_Res
     * const rate_Res = await prisma.rate_Res.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rate_ResWithIdOnly = await prisma.rate_Res.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Rate_ResFindManyArgs>(args?: SelectSubset<T, Rate_ResFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rate_Res.
     * @param {Rate_ResCreateArgs} args - Arguments to create a Rate_Res.
     * @example
     * // Create one Rate_Res
     * const Rate_Res = await prisma.rate_Res.create({
     *   data: {
     *     // ... data to create a Rate_Res
     *   }
     * })
     * 
     */
    create<T extends Rate_ResCreateArgs>(args: SelectSubset<T, Rate_ResCreateArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rate_Res.
     * @param {Rate_ResCreateManyArgs} args - Arguments to create many Rate_Res.
     * @example
     * // Create many Rate_Res
     * const rate_Res = await prisma.rate_Res.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Rate_ResCreateManyArgs>(args?: SelectSubset<T, Rate_ResCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rate_Res.
     * @param {Rate_ResDeleteArgs} args - Arguments to delete one Rate_Res.
     * @example
     * // Delete one Rate_Res
     * const Rate_Res = await prisma.rate_Res.delete({
     *   where: {
     *     // ... filter to delete one Rate_Res
     *   }
     * })
     * 
     */
    delete<T extends Rate_ResDeleteArgs>(args: SelectSubset<T, Rate_ResDeleteArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rate_Res.
     * @param {Rate_ResUpdateArgs} args - Arguments to update one Rate_Res.
     * @example
     * // Update one Rate_Res
     * const rate_Res = await prisma.rate_Res.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Rate_ResUpdateArgs>(args: SelectSubset<T, Rate_ResUpdateArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rate_Res.
     * @param {Rate_ResDeleteManyArgs} args - Arguments to filter Rate_Res to delete.
     * @example
     * // Delete a few Rate_Res
     * const { count } = await prisma.rate_Res.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Rate_ResDeleteManyArgs>(args?: SelectSubset<T, Rate_ResDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rate_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_ResUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rate_Res
     * const rate_Res = await prisma.rate_Res.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Rate_ResUpdateManyArgs>(args: SelectSubset<T, Rate_ResUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rate_Res.
     * @param {Rate_ResUpsertArgs} args - Arguments to update or create a Rate_Res.
     * @example
     * // Update or create a Rate_Res
     * const rate_Res = await prisma.rate_Res.upsert({
     *   create: {
     *     // ... data to create a Rate_Res
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rate_Res we want to update
     *   }
     * })
     */
    upsert<T extends Rate_ResUpsertArgs>(args: SelectSubset<T, Rate_ResUpsertArgs<ExtArgs>>): Prisma__Rate_ResClient<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rate_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_ResCountArgs} args - Arguments to filter Rate_Res to count.
     * @example
     * // Count the number of Rate_Res
     * const count = await prisma.rate_Res.count({
     *   where: {
     *     // ... the filter for the Rate_Res we want to count
     *   }
     * })
    **/
    count<T extends Rate_ResCountArgs>(
      args?: Subset<T, Rate_ResCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rate_ResCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rate_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_ResAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rate_ResAggregateArgs>(args: Subset<T, Rate_ResAggregateArgs>): Prisma.PrismaPromise<GetRate_ResAggregateType<T>>

    /**
     * Group by Rate_Res.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rate_ResGroupByArgs} args - Group by arguments.
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
      T extends Rate_ResGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rate_ResGroupByArgs['orderBy'] }
        : { orderBy?: Rate_ResGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Rate_ResGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRate_ResGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rate_Res model
   */
  readonly fields: Rate_ResFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rate_Res.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Rate_ResClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Rate_Res$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Rate_Res$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Restaurant<T extends Rate_Res$RestaurantArgs<ExtArgs> = {}>(args?: Subset<T, Rate_Res$RestaurantArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rate_Res model
   */
  interface Rate_ResFieldRefs {
    readonly id: FieldRef<"Rate_Res", 'Int'>
    readonly amount: FieldRef<"Rate_Res", 'Int'>
    readonly date_rate: FieldRef<"Rate_Res", 'DateTime'>
    readonly user_id: FieldRef<"Rate_Res", 'Int'>
    readonly res_id: FieldRef<"Rate_Res", 'Int'>
    readonly deletedBy: FieldRef<"Rate_Res", 'Int'>
    readonly isDeleted: FieldRef<"Rate_Res", 'Boolean'>
    readonly deletedAt: FieldRef<"Rate_Res", 'DateTime'>
    readonly createdAt: FieldRef<"Rate_Res", 'DateTime'>
    readonly updatedAt: FieldRef<"Rate_Res", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rate_Res findUnique
   */
  export type Rate_ResFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * Filter, which Rate_Res to fetch.
     */
    where: Rate_ResWhereUniqueInput
  }

  /**
   * Rate_Res findUniqueOrThrow
   */
  export type Rate_ResFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * Filter, which Rate_Res to fetch.
     */
    where: Rate_ResWhereUniqueInput
  }

  /**
   * Rate_Res findFirst
   */
  export type Rate_ResFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * Filter, which Rate_Res to fetch.
     */
    where?: Rate_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rate_Res to fetch.
     */
    orderBy?: Rate_ResOrderByWithRelationInput | Rate_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rate_Res.
     */
    cursor?: Rate_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rate_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rate_Res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rate_Res.
     */
    distinct?: Rate_ResScalarFieldEnum | Rate_ResScalarFieldEnum[]
  }

  /**
   * Rate_Res findFirstOrThrow
   */
  export type Rate_ResFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * Filter, which Rate_Res to fetch.
     */
    where?: Rate_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rate_Res to fetch.
     */
    orderBy?: Rate_ResOrderByWithRelationInput | Rate_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rate_Res.
     */
    cursor?: Rate_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rate_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rate_Res.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rate_Res.
     */
    distinct?: Rate_ResScalarFieldEnum | Rate_ResScalarFieldEnum[]
  }

  /**
   * Rate_Res findMany
   */
  export type Rate_ResFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * Filter, which Rate_Res to fetch.
     */
    where?: Rate_ResWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rate_Res to fetch.
     */
    orderBy?: Rate_ResOrderByWithRelationInput | Rate_ResOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rate_Res.
     */
    cursor?: Rate_ResWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rate_Res from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rate_Res.
     */
    skip?: number
    distinct?: Rate_ResScalarFieldEnum | Rate_ResScalarFieldEnum[]
  }

  /**
   * Rate_Res create
   */
  export type Rate_ResCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * The data needed to create a Rate_Res.
     */
    data?: XOR<Rate_ResCreateInput, Rate_ResUncheckedCreateInput>
  }

  /**
   * Rate_Res createMany
   */
  export type Rate_ResCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rate_Res.
     */
    data: Rate_ResCreateManyInput | Rate_ResCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rate_Res update
   */
  export type Rate_ResUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * The data needed to update a Rate_Res.
     */
    data: XOR<Rate_ResUpdateInput, Rate_ResUncheckedUpdateInput>
    /**
     * Choose, which Rate_Res to update.
     */
    where: Rate_ResWhereUniqueInput
  }

  /**
   * Rate_Res updateMany
   */
  export type Rate_ResUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rate_Res.
     */
    data: XOR<Rate_ResUpdateManyMutationInput, Rate_ResUncheckedUpdateManyInput>
    /**
     * Filter which Rate_Res to update
     */
    where?: Rate_ResWhereInput
    /**
     * Limit how many Rate_Res to update.
     */
    limit?: number
  }

  /**
   * Rate_Res upsert
   */
  export type Rate_ResUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * The filter to search for the Rate_Res to update in case it exists.
     */
    where: Rate_ResWhereUniqueInput
    /**
     * In case the Rate_Res found by the `where` argument doesn't exist, create a new Rate_Res with this data.
     */
    create: XOR<Rate_ResCreateInput, Rate_ResUncheckedCreateInput>
    /**
     * In case the Rate_Res was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Rate_ResUpdateInput, Rate_ResUncheckedUpdateInput>
  }

  /**
   * Rate_Res delete
   */
  export type Rate_ResDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    /**
     * Filter which Rate_Res to delete.
     */
    where: Rate_ResWhereUniqueInput
  }

  /**
   * Rate_Res deleteMany
   */
  export type Rate_ResDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rate_Res to delete
     */
    where?: Rate_ResWhereInput
    /**
     * Limit how many Rate_Res to delete.
     */
    limit?: number
  }

  /**
   * Rate_Res.Users
   */
  export type Rate_Res$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Rate_Res.Restaurant
   */
  export type Rate_Res$RestaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
  }

  /**
   * Rate_Res without action
   */
  export type Rate_ResDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    id: number | null
    deletedBy: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    description: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    image: number
    description: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RestaurantSumAggregateInputType = {
    id?: true
    deletedBy?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    description?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: number
    name: string | null
    image: string | null
    description: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Like_Res?: boolean | Restaurant$Like_ResArgs<ExtArgs>
    Rate_Res?: boolean | Restaurant$Rate_ResArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>



  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "description" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Like_Res?: boolean | Restaurant$Like_ResArgs<ExtArgs>
    Rate_Res?: boolean | Restaurant$Rate_ResArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      Like_Res: Prisma.$Like_ResPayload<ExtArgs>[]
      Rate_Res: Prisma.$Rate_ResPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      image: string | null
      description: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Like_Res<T extends Restaurant$Like_ResArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$Like_ResArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rate_Res<T extends Restaurant$Rate_ResArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$Rate_ResArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'Int'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly image: FieldRef<"Restaurant", 'String'>
    readonly description: FieldRef<"Restaurant", 'String'>
    readonly deletedBy: FieldRef<"Restaurant", 'Int'>
    readonly isDeleted: FieldRef<"Restaurant", 'Boolean'>
    readonly deletedAt: FieldRef<"Restaurant", 'DateTime'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data?: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.Like_Res
   */
  export type Restaurant$Like_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    where?: Like_ResWhereInput
    orderBy?: Like_ResOrderByWithRelationInput | Like_ResOrderByWithRelationInput[]
    cursor?: Like_ResWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_ResScalarFieldEnum | Like_ResScalarFieldEnum[]
  }

  /**
   * Restaurant.Rate_Res
   */
  export type Restaurant$Rate_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    where?: Rate_ResWhereInput
    orderBy?: Rate_ResOrderByWithRelationInput | Rate_ResOrderByWithRelationInput[]
    cursor?: Rate_ResWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rate_ResScalarFieldEnum | Rate_ResScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Sub_Food
   */

  export type AggregateSub_Food = {
    _count: Sub_FoodCountAggregateOutputType | null
    _avg: Sub_FoodAvgAggregateOutputType | null
    _sum: Sub_FoodSumAggregateOutputType | null
    _min: Sub_FoodMinAggregateOutputType | null
    _max: Sub_FoodMaxAggregateOutputType | null
  }

  export type Sub_FoodAvgAggregateOutputType = {
    id: number | null
    price: number | null
    food_id: number | null
    deletedBy: number | null
  }

  export type Sub_FoodSumAggregateOutputType = {
    id: number | null
    price: number | null
    food_id: number | null
    deletedBy: number | null
  }

  export type Sub_FoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    food_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sub_FoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    food_id: number | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sub_FoodCountAggregateOutputType = {
    id: number
    name: number
    price: number
    food_id: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Sub_FoodAvgAggregateInputType = {
    id?: true
    price?: true
    food_id?: true
    deletedBy?: true
  }

  export type Sub_FoodSumAggregateInputType = {
    id?: true
    price?: true
    food_id?: true
    deletedBy?: true
  }

  export type Sub_FoodMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    food_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sub_FoodMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    food_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sub_FoodCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    food_id?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Sub_FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sub_Food to aggregate.
     */
    where?: Sub_FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Foods to fetch.
     */
    orderBy?: Sub_FoodOrderByWithRelationInput | Sub_FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sub_FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sub_Foods
    **/
    _count?: true | Sub_FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_FoodMaxAggregateInputType
  }

  export type GetSub_FoodAggregateType<T extends Sub_FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_Food]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_Food[P]>
      : GetScalarType<T[P], AggregateSub_Food[P]>
  }




  export type Sub_FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sub_FoodWhereInput
    orderBy?: Sub_FoodOrderByWithAggregationInput | Sub_FoodOrderByWithAggregationInput[]
    by: Sub_FoodScalarFieldEnum[] | Sub_FoodScalarFieldEnum
    having?: Sub_FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_FoodCountAggregateInputType | true
    _avg?: Sub_FoodAvgAggregateInputType
    _sum?: Sub_FoodSumAggregateInputType
    _min?: Sub_FoodMinAggregateInputType
    _max?: Sub_FoodMaxAggregateInputType
  }

  export type Sub_FoodGroupByOutputType = {
    id: number
    name: string | null
    price: number | null
    food_id: number | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: Sub_FoodCountAggregateOutputType | null
    _avg: Sub_FoodAvgAggregateOutputType | null
    _sum: Sub_FoodSumAggregateOutputType | null
    _min: Sub_FoodMinAggregateOutputType | null
    _max: Sub_FoodMaxAggregateOutputType | null
  }

  type GetSub_FoodGroupByPayload<T extends Sub_FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_FoodGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_FoodGroupByOutputType[P]>
        }
      >
    >


  export type Sub_FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    food_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Foods?: boolean | Sub_Food$FoodsArgs<ExtArgs>
  }, ExtArgs["result"]["sub_Food"]>



  export type Sub_FoodSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    food_id?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Sub_FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "food_id" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["sub_Food"]>
  export type Sub_FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Foods?: boolean | Sub_Food$FoodsArgs<ExtArgs>
  }

  export type $Sub_FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sub_Food"
    objects: {
      Foods: Prisma.$FoodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      price: number | null
      food_id: number | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sub_Food"]>
    composites: {}
  }

  type Sub_FoodGetPayload<S extends boolean | null | undefined | Sub_FoodDefaultArgs> = $Result.GetResult<Prisma.$Sub_FoodPayload, S>

  type Sub_FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sub_FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sub_FoodCountAggregateInputType | true
    }

  export interface Sub_FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sub_Food'], meta: { name: 'Sub_Food' } }
    /**
     * Find zero or one Sub_Food that matches the filter.
     * @param {Sub_FoodFindUniqueArgs} args - Arguments to find a Sub_Food
     * @example
     * // Get one Sub_Food
     * const sub_Food = await prisma.sub_Food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sub_FoodFindUniqueArgs>(args: SelectSubset<T, Sub_FoodFindUniqueArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub_Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sub_FoodFindUniqueOrThrowArgs} args - Arguments to find a Sub_Food
     * @example
     * // Get one Sub_Food
     * const sub_Food = await prisma.sub_Food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sub_FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, Sub_FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_FoodFindFirstArgs} args - Arguments to find a Sub_Food
     * @example
     * // Get one Sub_Food
     * const sub_Food = await prisma.sub_Food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sub_FoodFindFirstArgs>(args?: SelectSubset<T, Sub_FoodFindFirstArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_FoodFindFirstOrThrowArgs} args - Arguments to find a Sub_Food
     * @example
     * // Get one Sub_Food
     * const sub_Food = await prisma.sub_Food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sub_FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, Sub_FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sub_Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_Foods
     * const sub_Foods = await prisma.sub_Food.findMany()
     * 
     * // Get first 10 Sub_Foods
     * const sub_Foods = await prisma.sub_Food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sub_FoodWithIdOnly = await prisma.sub_Food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Sub_FoodFindManyArgs>(args?: SelectSubset<T, Sub_FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub_Food.
     * @param {Sub_FoodCreateArgs} args - Arguments to create a Sub_Food.
     * @example
     * // Create one Sub_Food
     * const Sub_Food = await prisma.sub_Food.create({
     *   data: {
     *     // ... data to create a Sub_Food
     *   }
     * })
     * 
     */
    create<T extends Sub_FoodCreateArgs>(args: SelectSubset<T, Sub_FoodCreateArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sub_Foods.
     * @param {Sub_FoodCreateManyArgs} args - Arguments to create many Sub_Foods.
     * @example
     * // Create many Sub_Foods
     * const sub_Food = await prisma.sub_Food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sub_FoodCreateManyArgs>(args?: SelectSubset<T, Sub_FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sub_Food.
     * @param {Sub_FoodDeleteArgs} args - Arguments to delete one Sub_Food.
     * @example
     * // Delete one Sub_Food
     * const Sub_Food = await prisma.sub_Food.delete({
     *   where: {
     *     // ... filter to delete one Sub_Food
     *   }
     * })
     * 
     */
    delete<T extends Sub_FoodDeleteArgs>(args: SelectSubset<T, Sub_FoodDeleteArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub_Food.
     * @param {Sub_FoodUpdateArgs} args - Arguments to update one Sub_Food.
     * @example
     * // Update one Sub_Food
     * const sub_Food = await prisma.sub_Food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sub_FoodUpdateArgs>(args: SelectSubset<T, Sub_FoodUpdateArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sub_Foods.
     * @param {Sub_FoodDeleteManyArgs} args - Arguments to filter Sub_Foods to delete.
     * @example
     * // Delete a few Sub_Foods
     * const { count } = await prisma.sub_Food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sub_FoodDeleteManyArgs>(args?: SelectSubset<T, Sub_FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_Foods
     * const sub_Food = await prisma.sub_Food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sub_FoodUpdateManyArgs>(args: SelectSubset<T, Sub_FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sub_Food.
     * @param {Sub_FoodUpsertArgs} args - Arguments to update or create a Sub_Food.
     * @example
     * // Update or create a Sub_Food
     * const sub_Food = await prisma.sub_Food.upsert({
     *   create: {
     *     // ... data to create a Sub_Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_Food we want to update
     *   }
     * })
     */
    upsert<T extends Sub_FoodUpsertArgs>(args: SelectSubset<T, Sub_FoodUpsertArgs<ExtArgs>>): Prisma__Sub_FoodClient<$Result.GetResult<Prisma.$Sub_FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sub_Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_FoodCountArgs} args - Arguments to filter Sub_Foods to count.
     * @example
     * // Count the number of Sub_Foods
     * const count = await prisma.sub_Food.count({
     *   where: {
     *     // ... the filter for the Sub_Foods we want to count
     *   }
     * })
    **/
    count<T extends Sub_FoodCountArgs>(
      args?: Subset<T, Sub_FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sub_FoodAggregateArgs>(args: Subset<T, Sub_FoodAggregateArgs>): Prisma.PrismaPromise<GetSub_FoodAggregateType<T>>

    /**
     * Group by Sub_Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_FoodGroupByArgs} args - Group by arguments.
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
      T extends Sub_FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sub_FoodGroupByArgs['orderBy'] }
        : { orderBy?: Sub_FoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Sub_FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_FoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sub_Food model
   */
  readonly fields: Sub_FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sub_Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sub_FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Foods<T extends Sub_Food$FoodsArgs<ExtArgs> = {}>(args?: Subset<T, Sub_Food$FoodsArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sub_Food model
   */
  interface Sub_FoodFieldRefs {
    readonly id: FieldRef<"Sub_Food", 'Int'>
    readonly name: FieldRef<"Sub_Food", 'String'>
    readonly price: FieldRef<"Sub_Food", 'Float'>
    readonly food_id: FieldRef<"Sub_Food", 'Int'>
    readonly deletedBy: FieldRef<"Sub_Food", 'Int'>
    readonly isDeleted: FieldRef<"Sub_Food", 'Boolean'>
    readonly deletedAt: FieldRef<"Sub_Food", 'DateTime'>
    readonly createdAt: FieldRef<"Sub_Food", 'DateTime'>
    readonly updatedAt: FieldRef<"Sub_Food", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sub_Food findUnique
   */
  export type Sub_FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Food to fetch.
     */
    where: Sub_FoodWhereUniqueInput
  }

  /**
   * Sub_Food findUniqueOrThrow
   */
  export type Sub_FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Food to fetch.
     */
    where: Sub_FoodWhereUniqueInput
  }

  /**
   * Sub_Food findFirst
   */
  export type Sub_FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Food to fetch.
     */
    where?: Sub_FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Foods to fetch.
     */
    orderBy?: Sub_FoodOrderByWithRelationInput | Sub_FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sub_Foods.
     */
    cursor?: Sub_FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sub_Foods.
     */
    distinct?: Sub_FoodScalarFieldEnum | Sub_FoodScalarFieldEnum[]
  }

  /**
   * Sub_Food findFirstOrThrow
   */
  export type Sub_FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Food to fetch.
     */
    where?: Sub_FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Foods to fetch.
     */
    orderBy?: Sub_FoodOrderByWithRelationInput | Sub_FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sub_Foods.
     */
    cursor?: Sub_FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sub_Foods.
     */
    distinct?: Sub_FoodScalarFieldEnum | Sub_FoodScalarFieldEnum[]
  }

  /**
   * Sub_Food findMany
   */
  export type Sub_FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Foods to fetch.
     */
    where?: Sub_FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Foods to fetch.
     */
    orderBy?: Sub_FoodOrderByWithRelationInput | Sub_FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sub_Foods.
     */
    cursor?: Sub_FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Foods.
     */
    skip?: number
    distinct?: Sub_FoodScalarFieldEnum | Sub_FoodScalarFieldEnum[]
  }

  /**
   * Sub_Food create
   */
  export type Sub_FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Sub_Food.
     */
    data?: XOR<Sub_FoodCreateInput, Sub_FoodUncheckedCreateInput>
  }

  /**
   * Sub_Food createMany
   */
  export type Sub_FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sub_Foods.
     */
    data: Sub_FoodCreateManyInput | Sub_FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sub_Food update
   */
  export type Sub_FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Sub_Food.
     */
    data: XOR<Sub_FoodUpdateInput, Sub_FoodUncheckedUpdateInput>
    /**
     * Choose, which Sub_Food to update.
     */
    where: Sub_FoodWhereUniqueInput
  }

  /**
   * Sub_Food updateMany
   */
  export type Sub_FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sub_Foods.
     */
    data: XOR<Sub_FoodUpdateManyMutationInput, Sub_FoodUncheckedUpdateManyInput>
    /**
     * Filter which Sub_Foods to update
     */
    where?: Sub_FoodWhereInput
    /**
     * Limit how many Sub_Foods to update.
     */
    limit?: number
  }

  /**
   * Sub_Food upsert
   */
  export type Sub_FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Sub_Food to update in case it exists.
     */
    where: Sub_FoodWhereUniqueInput
    /**
     * In case the Sub_Food found by the `where` argument doesn't exist, create a new Sub_Food with this data.
     */
    create: XOR<Sub_FoodCreateInput, Sub_FoodUncheckedCreateInput>
    /**
     * In case the Sub_Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sub_FoodUpdateInput, Sub_FoodUncheckedUpdateInput>
  }

  /**
   * Sub_Food delete
   */
  export type Sub_FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
    /**
     * Filter which Sub_Food to delete.
     */
    where: Sub_FoodWhereUniqueInput
  }

  /**
   * Sub_Food deleteMany
   */
  export type Sub_FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sub_Foods to delete
     */
    where?: Sub_FoodWhereInput
    /**
     * Limit how many Sub_Foods to delete.
     */
    limit?: number
  }

  /**
   * Sub_Food.Foods
   */
  export type Sub_Food$FoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    where?: FoodsWhereInput
  }

  /**
   * Sub_Food without action
   */
  export type Sub_FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Food
     */
    select?: Sub_FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sub_Food
     */
    omit?: Sub_FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sub_FoodInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
    deletedBy: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
    deletedBy: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    password: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    password: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number | null
    isDeleted: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    password: number
    avatar: number
    age: number
    totpSecret: number
    googleId: number
    deletedBy: number
    isDeleted: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
    deletedBy?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
    deletedBy?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    password?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    password?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    password?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    deletedBy?: true
    isDeleted?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    fullName: string | null
    password: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    deletedBy: number
    isDeleted: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    password?: boolean
    avatar?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Like_Res?: boolean | Users$Like_ResArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    Rate_Res?: boolean | Users$Rate_ResArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    password?: boolean
    avatar?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    deletedBy?: boolean
    isDeleted?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "password" | "avatar" | "age" | "totpSecret" | "googleId" | "deletedBy" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Like_Res?: boolean | Users$Like_ResArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    Rate_Res?: boolean | Users$Rate_ResArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Like_Res: Prisma.$Like_ResPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      Rate_Res: Prisma.$Rate_ResPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fullName: string | null
      password: string | null
      avatar: string | null
      age: number | null
      totpSecret: string | null
      googleId: string | null
      deletedBy: number
      isDeleted: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Like_Res<T extends Users$Like_ResArgs<ExtArgs> = {}>(args?: Subset<T, Users$Like_ResArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Like_ResPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends Users$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rate_Res<T extends Users$Rate_ResArgs<ExtArgs> = {}>(args?: Subset<T, Users$Rate_ResArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rate_ResPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly age: FieldRef<"Users", 'Int'>
    readonly totpSecret: FieldRef<"Users", 'String'>
    readonly googleId: FieldRef<"Users", 'String'>
    readonly deletedBy: FieldRef<"Users", 'Int'>
    readonly isDeleted: FieldRef<"Users", 'Boolean'>
    readonly deletedAt: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Like_Res
   */
  export type Users$Like_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like_Res
     */
    select?: Like_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like_Res
     */
    omit?: Like_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Like_ResInclude<ExtArgs> | null
    where?: Like_ResWhereInput
    orderBy?: Like_ResOrderByWithRelationInput | Like_ResOrderByWithRelationInput[]
    cursor?: Like_ResWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Like_ResScalarFieldEnum | Like_ResScalarFieldEnum[]
  }

  /**
   * Users.Orders
   */
  export type Users$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.Rate_Res
   */
  export type Users$Rate_ResArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rate_Res
     */
    select?: Rate_ResSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rate_Res
     */
    omit?: Rate_ResOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rate_ResInclude<ExtArgs> | null
    where?: Rate_ResWhereInput
    orderBy?: Rate_ResOrderByWithRelationInput | Rate_ResOrderByWithRelationInput[]
    cursor?: Rate_ResWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rate_ResScalarFieldEnum | Rate_ResScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
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


  export const Food_TypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Food_TypeScalarFieldEnum = (typeof Food_TypeScalarFieldEnum)[keyof typeof Food_TypeScalarFieldEnum]


  export const FoodsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    price: 'price',
    description: 'description',
    type_id: 'type_id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodsScalarFieldEnum = (typeof FoodsScalarFieldEnum)[keyof typeof FoodsScalarFieldEnum]


  export const Like_ResScalarFieldEnum: {
    id: 'id',
    date_like: 'date_like',
    user_id: 'user_id',
    res_id: 'res_id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isLike: 'isLike'
  };

  export type Like_ResScalarFieldEnum = (typeof Like_ResScalarFieldEnum)[keyof typeof Like_ResScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodId: 'foodId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    amount: 'amount',
    code: 'code',
    arr_sub_id: 'arr_sub_id'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Rate_ResScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date_rate: 'date_rate',
    user_id: 'user_id',
    res_id: 'res_id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Rate_ResScalarFieldEnum = (typeof Rate_ResScalarFieldEnum)[keyof typeof Rate_ResScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    description: 'description',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const Sub_FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    food_id: 'food_id',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Sub_FoodScalarFieldEnum = (typeof Sub_FoodScalarFieldEnum)[keyof typeof Sub_FoodScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    password: 'password',
    avatar: 'avatar',
    age: 'age',
    totpSecret: 'totpSecret',
    googleId: 'googleId',
    deletedBy: 'deletedBy',
    isDeleted: 'isDeleted',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const Food_TypeOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type Food_TypeOrderByRelevanceFieldEnum = (typeof Food_TypeOrderByRelevanceFieldEnum)[keyof typeof Food_TypeOrderByRelevanceFieldEnum]


  export const FoodsOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image',
    description: 'description'
  };

  export type FoodsOrderByRelevanceFieldEnum = (typeof FoodsOrderByRelevanceFieldEnum)[keyof typeof FoodsOrderByRelevanceFieldEnum]


  export const OrdersOrderByRelevanceFieldEnum: {
    code: 'code',
    arr_sub_id: 'arr_sub_id'
  };

  export type OrdersOrderByRelevanceFieldEnum = (typeof OrdersOrderByRelevanceFieldEnum)[keyof typeof OrdersOrderByRelevanceFieldEnum]


  export const RestaurantOrderByRelevanceFieldEnum: {
    name: 'name',
    image: 'image',
    description: 'description'
  };

  export type RestaurantOrderByRelevanceFieldEnum = (typeof RestaurantOrderByRelevanceFieldEnum)[keyof typeof RestaurantOrderByRelevanceFieldEnum]


  export const Sub_FoodOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type Sub_FoodOrderByRelevanceFieldEnum = (typeof Sub_FoodOrderByRelevanceFieldEnum)[keyof typeof Sub_FoodOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    email: 'email',
    fullName: 'fullName',
    password: 'password',
    avatar: 'avatar',
    totpSecret: 'totpSecret',
    googleId: 'googleId'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Food_TypeWhereInput = {
    AND?: Food_TypeWhereInput | Food_TypeWhereInput[]
    OR?: Food_TypeWhereInput[]
    NOT?: Food_TypeWhereInput | Food_TypeWhereInput[]
    id?: IntFilter<"Food_Type"> | number
    name?: StringNullableFilter<"Food_Type"> | string | null
    deletedBy?: IntFilter<"Food_Type"> | number
    isDeleted?: BoolFilter<"Food_Type"> | boolean
    deletedAt?: DateTimeNullableFilter<"Food_Type"> | Date | string | null
    createdAt?: DateTimeFilter<"Food_Type"> | Date | string
    updatedAt?: DateTimeFilter<"Food_Type"> | Date | string
    Foods?: FoodsListRelationFilter
  }

  export type Food_TypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Foods?: FoodsOrderByRelationAggregateInput
    _relevance?: Food_TypeOrderByRelevanceInput
  }

  export type Food_TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Food_TypeWhereInput | Food_TypeWhereInput[]
    OR?: Food_TypeWhereInput[]
    NOT?: Food_TypeWhereInput | Food_TypeWhereInput[]
    name?: StringNullableFilter<"Food_Type"> | string | null
    deletedBy?: IntFilter<"Food_Type"> | number
    isDeleted?: BoolFilter<"Food_Type"> | boolean
    deletedAt?: DateTimeNullableFilter<"Food_Type"> | Date | string | null
    createdAt?: DateTimeFilter<"Food_Type"> | Date | string
    updatedAt?: DateTimeFilter<"Food_Type"> | Date | string
    Foods?: FoodsListRelationFilter
  }, "id">

  export type Food_TypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Food_TypeCountOrderByAggregateInput
    _avg?: Food_TypeAvgOrderByAggregateInput
    _max?: Food_TypeMaxOrderByAggregateInput
    _min?: Food_TypeMinOrderByAggregateInput
    _sum?: Food_TypeSumOrderByAggregateInput
  }

  export type Food_TypeScalarWhereWithAggregatesInput = {
    AND?: Food_TypeScalarWhereWithAggregatesInput | Food_TypeScalarWhereWithAggregatesInput[]
    OR?: Food_TypeScalarWhereWithAggregatesInput[]
    NOT?: Food_TypeScalarWhereWithAggregatesInput | Food_TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food_Type"> | number
    name?: StringNullableWithAggregatesFilter<"Food_Type"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Food_Type"> | number
    isDeleted?: BoolWithAggregatesFilter<"Food_Type"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Food_Type"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Food_Type"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Food_Type"> | Date | string
  }

  export type FoodsWhereInput = {
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    id?: IntFilter<"Foods"> | number
    name?: StringNullableFilter<"Foods"> | string | null
    image?: StringNullableFilter<"Foods"> | string | null
    price?: FloatNullableFilter<"Foods"> | number | null
    description?: StringNullableFilter<"Foods"> | string | null
    type_id?: IntNullableFilter<"Foods"> | number | null
    deletedBy?: IntFilter<"Foods"> | number
    isDeleted?: BoolFilter<"Foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"Foods"> | Date | string | null
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
    Food_Type?: XOR<Food_TypeNullableScalarRelationFilter, Food_TypeWhereInput> | null
    Orders?: OrdersListRelationFilter
    Sub_Food?: Sub_FoodListRelationFilter
  }

  export type FoodsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Food_Type?: Food_TypeOrderByWithRelationInput
    Orders?: OrdersOrderByRelationAggregateInput
    Sub_Food?: Sub_FoodOrderByRelationAggregateInput
    _relevance?: FoodsOrderByRelevanceInput
  }

  export type FoodsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    name?: StringNullableFilter<"Foods"> | string | null
    image?: StringNullableFilter<"Foods"> | string | null
    price?: FloatNullableFilter<"Foods"> | number | null
    description?: StringNullableFilter<"Foods"> | string | null
    type_id?: IntNullableFilter<"Foods"> | number | null
    deletedBy?: IntFilter<"Foods"> | number
    isDeleted?: BoolFilter<"Foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"Foods"> | Date | string | null
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
    Food_Type?: XOR<Food_TypeNullableScalarRelationFilter, Food_TypeWhereInput> | null
    Orders?: OrdersListRelationFilter
    Sub_Food?: Sub_FoodListRelationFilter
  }, "id">

  export type FoodsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    type_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodsCountOrderByAggregateInput
    _avg?: FoodsAvgOrderByAggregateInput
    _max?: FoodsMaxOrderByAggregateInput
    _min?: FoodsMinOrderByAggregateInput
    _sum?: FoodsSumOrderByAggregateInput
  }

  export type FoodsScalarWhereWithAggregatesInput = {
    AND?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    OR?: FoodsScalarWhereWithAggregatesInput[]
    NOT?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Foods"> | number
    name?: StringNullableWithAggregatesFilter<"Foods"> | string | null
    image?: StringNullableWithAggregatesFilter<"Foods"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Foods"> | number | null
    description?: StringNullableWithAggregatesFilter<"Foods"> | string | null
    type_id?: IntNullableWithAggregatesFilter<"Foods"> | number | null
    deletedBy?: IntWithAggregatesFilter<"Foods"> | number
    isDeleted?: BoolWithAggregatesFilter<"Foods"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Foods"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Foods"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Foods"> | Date | string
  }

  export type Like_ResWhereInput = {
    AND?: Like_ResWhereInput | Like_ResWhereInput[]
    OR?: Like_ResWhereInput[]
    NOT?: Like_ResWhereInput | Like_ResWhereInput[]
    id?: IntFilter<"Like_Res"> | number
    date_like?: DateTimeNullableFilter<"Like_Res"> | Date | string | null
    user_id?: IntNullableFilter<"Like_Res"> | number | null
    res_id?: IntNullableFilter<"Like_Res"> | number | null
    deletedBy?: IntFilter<"Like_Res"> | number
    isDeleted?: BoolFilter<"Like_Res"> | boolean
    deletedAt?: DateTimeNullableFilter<"Like_Res"> | Date | string | null
    createdAt?: DateTimeFilter<"Like_Res"> | Date | string
    updatedAt?: DateTimeFilter<"Like_Res"> | Date | string
    isLike?: BoolNullableFilter<"Like_Res"> | boolean | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }

  export type Like_ResOrderByWithRelationInput = {
    id?: SortOrder
    date_like?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    Restaurant?: RestaurantOrderByWithRelationInput
  }

  export type Like_ResWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Like_ResWhereInput | Like_ResWhereInput[]
    OR?: Like_ResWhereInput[]
    NOT?: Like_ResWhereInput | Like_ResWhereInput[]
    date_like?: DateTimeNullableFilter<"Like_Res"> | Date | string | null
    user_id?: IntNullableFilter<"Like_Res"> | number | null
    res_id?: IntNullableFilter<"Like_Res"> | number | null
    deletedBy?: IntFilter<"Like_Res"> | number
    isDeleted?: BoolFilter<"Like_Res"> | boolean
    deletedAt?: DateTimeNullableFilter<"Like_Res"> | Date | string | null
    createdAt?: DateTimeFilter<"Like_Res"> | Date | string
    updatedAt?: DateTimeFilter<"Like_Res"> | Date | string
    isLike?: BoolNullableFilter<"Like_Res"> | boolean | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }, "id">

  export type Like_ResOrderByWithAggregationInput = {
    id?: SortOrder
    date_like?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrderInput | SortOrder
    _count?: Like_ResCountOrderByAggregateInput
    _avg?: Like_ResAvgOrderByAggregateInput
    _max?: Like_ResMaxOrderByAggregateInput
    _min?: Like_ResMinOrderByAggregateInput
    _sum?: Like_ResSumOrderByAggregateInput
  }

  export type Like_ResScalarWhereWithAggregatesInput = {
    AND?: Like_ResScalarWhereWithAggregatesInput | Like_ResScalarWhereWithAggregatesInput[]
    OR?: Like_ResScalarWhereWithAggregatesInput[]
    NOT?: Like_ResScalarWhereWithAggregatesInput | Like_ResScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Like_Res"> | number
    date_like?: DateTimeNullableWithAggregatesFilter<"Like_Res"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"Like_Res"> | number | null
    res_id?: IntNullableWithAggregatesFilter<"Like_Res"> | number | null
    deletedBy?: IntWithAggregatesFilter<"Like_Res"> | number
    isDeleted?: BoolWithAggregatesFilter<"Like_Res"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Like_Res"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Like_Res"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Like_Res"> | Date | string
    isLike?: BoolNullableWithAggregatesFilter<"Like_Res"> | boolean | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
    deletedBy?: IntFilter<"Orders"> | number
    isDeleted?: BoolFilter<"Orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"Orders"> | Date | string | null
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    amount?: IntNullableFilter<"Orders"> | number | null
    code?: StringNullableFilter<"Orders"> | string | null
    arr_sub_id?: StringNullableFilter<"Orders"> | string | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    arr_sub_id?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    Foods?: FoodsOrderByWithRelationInput
    _relevance?: OrdersOrderByRelevanceInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
    deletedBy?: IntFilter<"Orders"> | number
    isDeleted?: BoolFilter<"Orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"Orders"> | Date | string | null
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    amount?: IntNullableFilter<"Orders"> | number | null
    code?: StringNullableFilter<"Orders"> | string | null
    arr_sub_id?: StringNullableFilter<"Orders"> | string | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    arr_sub_id?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    userId?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    foodId?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    deletedBy?: IntWithAggregatesFilter<"Orders"> | number
    isDeleted?: BoolWithAggregatesFilter<"Orders"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    amount?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    code?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    arr_sub_id?: StringNullableWithAggregatesFilter<"Orders"> | string | null
  }

  export type Rate_ResWhereInput = {
    AND?: Rate_ResWhereInput | Rate_ResWhereInput[]
    OR?: Rate_ResWhereInput[]
    NOT?: Rate_ResWhereInput | Rate_ResWhereInput[]
    id?: IntFilter<"Rate_Res"> | number
    amount?: IntNullableFilter<"Rate_Res"> | number | null
    date_rate?: DateTimeNullableFilter<"Rate_Res"> | Date | string | null
    user_id?: IntNullableFilter<"Rate_Res"> | number | null
    res_id?: IntNullableFilter<"Rate_Res"> | number | null
    deletedBy?: IntFilter<"Rate_Res"> | number
    isDeleted?: BoolFilter<"Rate_Res"> | boolean
    deletedAt?: DateTimeNullableFilter<"Rate_Res"> | Date | string | null
    createdAt?: DateTimeFilter<"Rate_Res"> | Date | string
    updatedAt?: DateTimeFilter<"Rate_Res"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }

  export type Rate_ResOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrderInput | SortOrder
    date_rate?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Restaurant?: RestaurantOrderByWithRelationInput
  }

  export type Rate_ResWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Rate_ResWhereInput | Rate_ResWhereInput[]
    OR?: Rate_ResWhereInput[]
    NOT?: Rate_ResWhereInput | Rate_ResWhereInput[]
    amount?: IntNullableFilter<"Rate_Res"> | number | null
    date_rate?: DateTimeNullableFilter<"Rate_Res"> | Date | string | null
    user_id?: IntNullableFilter<"Rate_Res"> | number | null
    res_id?: IntNullableFilter<"Rate_Res"> | number | null
    deletedBy?: IntFilter<"Rate_Res"> | number
    isDeleted?: BoolFilter<"Rate_Res"> | boolean
    deletedAt?: DateTimeNullableFilter<"Rate_Res"> | Date | string | null
    createdAt?: DateTimeFilter<"Rate_Res"> | Date | string
    updatedAt?: DateTimeFilter<"Rate_Res"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Restaurant?: XOR<RestaurantNullableScalarRelationFilter, RestaurantWhereInput> | null
  }, "id">

  export type Rate_ResOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrderInput | SortOrder
    date_rate?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    res_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Rate_ResCountOrderByAggregateInput
    _avg?: Rate_ResAvgOrderByAggregateInput
    _max?: Rate_ResMaxOrderByAggregateInput
    _min?: Rate_ResMinOrderByAggregateInput
    _sum?: Rate_ResSumOrderByAggregateInput
  }

  export type Rate_ResScalarWhereWithAggregatesInput = {
    AND?: Rate_ResScalarWhereWithAggregatesInput | Rate_ResScalarWhereWithAggregatesInput[]
    OR?: Rate_ResScalarWhereWithAggregatesInput[]
    NOT?: Rate_ResScalarWhereWithAggregatesInput | Rate_ResScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rate_Res"> | number
    amount?: IntNullableWithAggregatesFilter<"Rate_Res"> | number | null
    date_rate?: DateTimeNullableWithAggregatesFilter<"Rate_Res"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"Rate_Res"> | number | null
    res_id?: IntNullableWithAggregatesFilter<"Rate_Res"> | number | null
    deletedBy?: IntWithAggregatesFilter<"Rate_Res"> | number
    isDeleted?: BoolWithAggregatesFilter<"Rate_Res"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Rate_Res"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rate_Res"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rate_Res"> | Date | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    name?: StringNullableFilter<"Restaurant"> | string | null
    image?: StringNullableFilter<"Restaurant"> | string | null
    description?: StringNullableFilter<"Restaurant"> | string | null
    deletedBy?: IntFilter<"Restaurant"> | number
    isDeleted?: BoolFilter<"Restaurant"> | boolean
    deletedAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    Like_Res?: Like_ResListRelationFilter
    Rate_Res?: Rate_ResListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Like_Res?: Like_ResOrderByRelationAggregateInput
    Rate_Res?: Rate_ResOrderByRelationAggregateInput
    _relevance?: RestaurantOrderByRelevanceInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringNullableFilter<"Restaurant"> | string | null
    image?: StringNullableFilter<"Restaurant"> | string | null
    description?: StringNullableFilter<"Restaurant"> | string | null
    deletedBy?: IntFilter<"Restaurant"> | number
    isDeleted?: BoolFilter<"Restaurant"> | boolean
    deletedAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    Like_Res?: Like_ResListRelationFilter
    Rate_Res?: Rate_ResListRelationFilter
  }, "id">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurant"> | number
    name?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    image?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    description?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Restaurant"> | number
    isDeleted?: BoolWithAggregatesFilter<"Restaurant"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Restaurant"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type Sub_FoodWhereInput = {
    AND?: Sub_FoodWhereInput | Sub_FoodWhereInput[]
    OR?: Sub_FoodWhereInput[]
    NOT?: Sub_FoodWhereInput | Sub_FoodWhereInput[]
    id?: IntFilter<"Sub_Food"> | number
    name?: StringNullableFilter<"Sub_Food"> | string | null
    price?: FloatNullableFilter<"Sub_Food"> | number | null
    food_id?: IntNullableFilter<"Sub_Food"> | number | null
    deletedBy?: IntFilter<"Sub_Food"> | number
    isDeleted?: BoolFilter<"Sub_Food"> | boolean
    deletedAt?: DateTimeNullableFilter<"Sub_Food"> | Date | string | null
    createdAt?: DateTimeFilter<"Sub_Food"> | Date | string
    updatedAt?: DateTimeFilter<"Sub_Food"> | Date | string
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }

  export type Sub_FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Foods?: FoodsOrderByWithRelationInput
    _relevance?: Sub_FoodOrderByRelevanceInput
  }

  export type Sub_FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Sub_FoodWhereInput | Sub_FoodWhereInput[]
    OR?: Sub_FoodWhereInput[]
    NOT?: Sub_FoodWhereInput | Sub_FoodWhereInput[]
    name?: StringNullableFilter<"Sub_Food"> | string | null
    price?: FloatNullableFilter<"Sub_Food"> | number | null
    food_id?: IntNullableFilter<"Sub_Food"> | number | null
    deletedBy?: IntFilter<"Sub_Food"> | number
    isDeleted?: BoolFilter<"Sub_Food"> | boolean
    deletedAt?: DateTimeNullableFilter<"Sub_Food"> | Date | string | null
    createdAt?: DateTimeFilter<"Sub_Food"> | Date | string
    updatedAt?: DateTimeFilter<"Sub_Food"> | Date | string
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }, "id">

  export type Sub_FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Sub_FoodCountOrderByAggregateInput
    _avg?: Sub_FoodAvgOrderByAggregateInput
    _max?: Sub_FoodMaxOrderByAggregateInput
    _min?: Sub_FoodMinOrderByAggregateInput
    _sum?: Sub_FoodSumOrderByAggregateInput
  }

  export type Sub_FoodScalarWhereWithAggregatesInput = {
    AND?: Sub_FoodScalarWhereWithAggregatesInput | Sub_FoodScalarWhereWithAggregatesInput[]
    OR?: Sub_FoodScalarWhereWithAggregatesInput[]
    NOT?: Sub_FoodScalarWhereWithAggregatesInput | Sub_FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sub_Food"> | number
    name?: StringNullableWithAggregatesFilter<"Sub_Food"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Sub_Food"> | number | null
    food_id?: IntNullableWithAggregatesFilter<"Sub_Food"> | number | null
    deletedBy?: IntWithAggregatesFilter<"Sub_Food"> | number
    isDeleted?: BoolWithAggregatesFilter<"Sub_Food"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Sub_Food"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sub_Food"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sub_Food"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    age?: IntNullableFilter<"Users"> | number | null
    totpSecret?: StringNullableFilter<"Users"> | string | null
    googleId?: StringNullableFilter<"Users"> | string | null
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Like_Res?: Like_ResListRelationFilter
    Orders?: OrdersListRelationFilter
    Rate_Res?: Rate_ResListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Like_Res?: Like_ResOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    Rate_Res?: Rate_ResOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    age?: IntNullableFilter<"Users"> | number | null
    totpSecret?: StringNullableFilter<"Users"> | string | null
    googleId?: StringNullableFilter<"Users"> | string | null
    deletedBy?: IntFilter<"Users"> | number
    isDeleted?: BoolFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    Like_Res?: Like_ResListRelationFilter
    Orders?: OrdersListRelationFilter
    Rate_Res?: Rate_ResListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    age?: IntNullableWithAggregatesFilter<"Users"> | number | null
    totpSecret?: StringNullableWithAggregatesFilter<"Users"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    deletedBy?: IntWithAggregatesFilter<"Users"> | number
    isDeleted?: BoolWithAggregatesFilter<"Users"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type Food_TypeCreateInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Foods?: FoodsCreateNestedManyWithoutFood_TypeInput
  }

  export type Food_TypeUncheckedCreateInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Foods?: FoodsUncheckedCreateNestedManyWithoutFood_TypeInput
  }

  export type Food_TypeUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Foods?: FoodsUpdateManyWithoutFood_TypeNestedInput
  }

  export type Food_TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Foods?: FoodsUncheckedUpdateManyWithoutFood_TypeNestedInput
  }

  export type Food_TypeCreateManyInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Food_TypeUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Food_TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodsCreateInput = {
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Food_Type?: Food_TypeCreateNestedOneWithoutFoodsInput
    Orders?: OrdersCreateNestedManyWithoutFoodsInput
    Sub_Food?: Sub_FoodCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUncheckedCreateInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutFoodsInput
    Sub_Food?: Sub_FoodUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Food_Type?: Food_TypeUpdateOneWithoutFoodsNestedInput
    Orders?: OrdersUpdateManyWithoutFoodsNestedInput
    Sub_Food?: Sub_FoodUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutFoodsNestedInput
    Sub_Food?: Sub_FoodUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsCreateManyInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Like_ResCreateInput = {
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
    Users?: UsersCreateNestedOneWithoutLike_ResInput
    Restaurant?: RestaurantCreateNestedOneWithoutLike_ResInput
  }

  export type Like_ResUncheckedCreateInput = {
    id?: number
    date_like?: Date | string | null
    user_id?: number | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
  }

  export type Like_ResUpdateInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Users?: UsersUpdateOneWithoutLike_ResNestedInput
    Restaurant?: RestaurantUpdateOneWithoutLike_ResNestedInput
  }

  export type Like_ResUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Like_ResCreateManyInput = {
    id?: number
    date_like?: Date | string | null
    user_id?: number | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
  }

  export type Like_ResUpdateManyMutationInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Like_ResUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrdersCreateInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    Users?: UsersCreateNestedOneWithoutOrdersInput
    Foods?: FoodsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type OrdersUpdateInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UsersUpdateOneWithoutOrdersNestedInput
    Foods?: FoodsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersCreateManyInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type OrdersUpdateManyMutationInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Rate_ResCreateInput = {
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutRate_ResInput
    Restaurant?: RestaurantCreateNestedOneWithoutRate_ResInput
  }

  export type Rate_ResUncheckedCreateInput = {
    id?: number
    amount?: number | null
    date_rate?: Date | string | null
    user_id?: number | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rate_ResUpdateInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutRate_ResNestedInput
    Restaurant?: RestaurantUpdateOneWithoutRate_ResNestedInput
  }

  export type Rate_ResUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rate_ResCreateManyInput = {
    id?: number
    amount?: number | null
    date_rate?: Date | string | null
    user_id?: number | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rate_ResUpdateManyMutationInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rate_ResUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateInput = {
    name?: string | null
    image?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResCreateNestedManyWithoutRestaurantInput
    Rate_Res?: Rate_ResCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: number
    name?: string | null
    image?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResUncheckedCreateNestedManyWithoutRestaurantInput
    Rate_Res?: Rate_ResUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUpdateManyWithoutRestaurantNestedInput
    Rate_Res?: Rate_ResUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUncheckedUpdateManyWithoutRestaurantNestedInput
    Rate_Res?: Rate_ResUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: number
    name?: string | null
    image?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sub_FoodCreateInput = {
    name?: string | null
    price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Foods?: FoodsCreateNestedOneWithoutSub_FoodInput
  }

  export type Sub_FoodUncheckedCreateInput = {
    id?: number
    name?: string | null
    price?: number | null
    food_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Sub_FoodUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Foods?: FoodsUpdateOneWithoutSub_FoodNestedInput
  }

  export type Sub_FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sub_FoodCreateManyInput = {
    id?: number
    name?: string | null
    price?: number | null
    food_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Sub_FoodUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sub_FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
    Rate_Res?: Rate_ResCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
    Rate_Res?: Rate_ResUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
    Rate_Res?: Rate_ResUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
    Rate_Res?: Rate_ResUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FoodsListRelationFilter = {
    every?: FoodsWhereInput
    some?: FoodsWhereInput
    none?: FoodsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FoodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Food_TypeOrderByRelevanceInput = {
    fields: Food_TypeOrderByRelevanceFieldEnum | Food_TypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Food_TypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Food_TypeAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type Food_TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Food_TypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Food_TypeSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Food_TypeNullableScalarRelationFilter = {
    is?: Food_TypeWhereInput | null
    isNot?: Food_TypeWhereInput | null
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type Sub_FoodListRelationFilter = {
    every?: Sub_FoodWhereInput
    some?: Sub_FoodWhereInput
    none?: Sub_FoodWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Sub_FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodsOrderByRelevanceInput = {
    fields: FoodsOrderByRelevanceFieldEnum | FoodsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    description?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FoodsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    description?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    description?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type RestaurantNullableScalarRelationFilter = {
    is?: RestaurantWhereInput | null
    isNot?: RestaurantWhereInput | null
  }

  export type Like_ResCountOrderByAggregateInput = {
    id?: SortOrder
    date_like?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type Like_ResAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type Like_ResMaxOrderByAggregateInput = {
    id?: SortOrder
    date_like?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type Like_ResMinOrderByAggregateInput = {
    id?: SortOrder
    date_like?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isLike?: SortOrder
  }

  export type Like_ResSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FoodsNullableScalarRelationFilter = {
    is?: FoodsWhereInput | null
    isNot?: FoodsWhereInput | null
  }

  export type OrdersOrderByRelevanceInput = {
    fields: OrdersOrderByRelevanceFieldEnum | OrdersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    amount?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    deletedBy?: SortOrder
    amount?: SortOrder
  }

  export type Rate_ResCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rate_ResAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type Rate_ResMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rate_ResMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date_rate?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rate_ResSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    res_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type Like_ResListRelationFilter = {
    every?: Like_ResWhereInput
    some?: Like_ResWhereInput
    none?: Like_ResWhereInput
  }

  export type Rate_ResListRelationFilter = {
    every?: Rate_ResWhereInput
    some?: Rate_ResWhereInput
    none?: Rate_ResWhereInput
  }

  export type Like_ResOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Rate_ResOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantOrderByRelevanceInput = {
    fields: RestaurantOrderByRelevanceFieldEnum | RestaurantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    id?: SortOrder
    deletedBy?: SortOrder
  }

  export type Sub_FoodOrderByRelevanceInput = {
    fields: Sub_FoodOrderByRelevanceFieldEnum | Sub_FoodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Sub_FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Sub_FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type Sub_FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Sub_FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Sub_FoodSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    food_id?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    deletedBy?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
    deletedBy?: SortOrder
    isDeleted?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FoodsCreateNestedManyWithoutFood_TypeInput = {
    create?: XOR<FoodsCreateWithoutFood_TypeInput, FoodsUncheckedCreateWithoutFood_TypeInput> | FoodsCreateWithoutFood_TypeInput[] | FoodsUncheckedCreateWithoutFood_TypeInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutFood_TypeInput | FoodsCreateOrConnectWithoutFood_TypeInput[]
    createMany?: FoodsCreateManyFood_TypeInputEnvelope
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
  }

  export type FoodsUncheckedCreateNestedManyWithoutFood_TypeInput = {
    create?: XOR<FoodsCreateWithoutFood_TypeInput, FoodsUncheckedCreateWithoutFood_TypeInput> | FoodsCreateWithoutFood_TypeInput[] | FoodsUncheckedCreateWithoutFood_TypeInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutFood_TypeInput | FoodsCreateOrConnectWithoutFood_TypeInput[]
    createMany?: FoodsCreateManyFood_TypeInputEnvelope
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FoodsUpdateManyWithoutFood_TypeNestedInput = {
    create?: XOR<FoodsCreateWithoutFood_TypeInput, FoodsUncheckedCreateWithoutFood_TypeInput> | FoodsCreateWithoutFood_TypeInput[] | FoodsUncheckedCreateWithoutFood_TypeInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutFood_TypeInput | FoodsCreateOrConnectWithoutFood_TypeInput[]
    upsert?: FoodsUpsertWithWhereUniqueWithoutFood_TypeInput | FoodsUpsertWithWhereUniqueWithoutFood_TypeInput[]
    createMany?: FoodsCreateManyFood_TypeInputEnvelope
    set?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    disconnect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    delete?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    update?: FoodsUpdateWithWhereUniqueWithoutFood_TypeInput | FoodsUpdateWithWhereUniqueWithoutFood_TypeInput[]
    updateMany?: FoodsUpdateManyWithWhereWithoutFood_TypeInput | FoodsUpdateManyWithWhereWithoutFood_TypeInput[]
    deleteMany?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
  }

  export type FoodsUncheckedUpdateManyWithoutFood_TypeNestedInput = {
    create?: XOR<FoodsCreateWithoutFood_TypeInput, FoodsUncheckedCreateWithoutFood_TypeInput> | FoodsCreateWithoutFood_TypeInput[] | FoodsUncheckedCreateWithoutFood_TypeInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutFood_TypeInput | FoodsCreateOrConnectWithoutFood_TypeInput[]
    upsert?: FoodsUpsertWithWhereUniqueWithoutFood_TypeInput | FoodsUpsertWithWhereUniqueWithoutFood_TypeInput[]
    createMany?: FoodsCreateManyFood_TypeInputEnvelope
    set?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    disconnect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    delete?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    update?: FoodsUpdateWithWhereUniqueWithoutFood_TypeInput | FoodsUpdateWithWhereUniqueWithoutFood_TypeInput[]
    updateMany?: FoodsUpdateManyWithWhereWithoutFood_TypeInput | FoodsUpdateManyWithWhereWithoutFood_TypeInput[]
    deleteMany?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
  }

  export type Food_TypeCreateNestedOneWithoutFoodsInput = {
    create?: XOR<Food_TypeCreateWithoutFoodsInput, Food_TypeUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: Food_TypeCreateOrConnectWithoutFoodsInput
    connect?: Food_TypeWhereUniqueInput
  }

  export type OrdersCreateNestedManyWithoutFoodsInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type Sub_FoodCreateNestedManyWithoutFoodsInput = {
    create?: XOR<Sub_FoodCreateWithoutFoodsInput, Sub_FoodUncheckedCreateWithoutFoodsInput> | Sub_FoodCreateWithoutFoodsInput[] | Sub_FoodUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: Sub_FoodCreateOrConnectWithoutFoodsInput | Sub_FoodCreateOrConnectWithoutFoodsInput[]
    createMany?: Sub_FoodCreateManyFoodsInputEnvelope
    connect?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutFoodsInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type Sub_FoodUncheckedCreateNestedManyWithoutFoodsInput = {
    create?: XOR<Sub_FoodCreateWithoutFoodsInput, Sub_FoodUncheckedCreateWithoutFoodsInput> | Sub_FoodCreateWithoutFoodsInput[] | Sub_FoodUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: Sub_FoodCreateOrConnectWithoutFoodsInput | Sub_FoodCreateOrConnectWithoutFoodsInput[]
    createMany?: Sub_FoodCreateManyFoodsInputEnvelope
    connect?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Food_TypeUpdateOneWithoutFoodsNestedInput = {
    create?: XOR<Food_TypeCreateWithoutFoodsInput, Food_TypeUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: Food_TypeCreateOrConnectWithoutFoodsInput
    upsert?: Food_TypeUpsertWithoutFoodsInput
    disconnect?: Food_TypeWhereInput | boolean
    delete?: Food_TypeWhereInput | boolean
    connect?: Food_TypeWhereUniqueInput
    update?: XOR<XOR<Food_TypeUpdateToOneWithWhereWithoutFoodsInput, Food_TypeUpdateWithoutFoodsInput>, Food_TypeUncheckedUpdateWithoutFoodsInput>
  }

  export type OrdersUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutFoodsInput | OrdersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutFoodsInput | OrdersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutFoodsInput | OrdersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type Sub_FoodUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<Sub_FoodCreateWithoutFoodsInput, Sub_FoodUncheckedCreateWithoutFoodsInput> | Sub_FoodCreateWithoutFoodsInput[] | Sub_FoodUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: Sub_FoodCreateOrConnectWithoutFoodsInput | Sub_FoodCreateOrConnectWithoutFoodsInput[]
    upsert?: Sub_FoodUpsertWithWhereUniqueWithoutFoodsInput | Sub_FoodUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: Sub_FoodCreateManyFoodsInputEnvelope
    set?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    disconnect?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    delete?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    connect?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    update?: Sub_FoodUpdateWithWhereUniqueWithoutFoodsInput | Sub_FoodUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: Sub_FoodUpdateManyWithWhereWithoutFoodsInput | Sub_FoodUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: Sub_FoodScalarWhereInput | Sub_FoodScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdersUncheckedUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutFoodsInput | OrdersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutFoodsInput | OrdersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutFoodsInput | OrdersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type Sub_FoodUncheckedUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<Sub_FoodCreateWithoutFoodsInput, Sub_FoodUncheckedCreateWithoutFoodsInput> | Sub_FoodCreateWithoutFoodsInput[] | Sub_FoodUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: Sub_FoodCreateOrConnectWithoutFoodsInput | Sub_FoodCreateOrConnectWithoutFoodsInput[]
    upsert?: Sub_FoodUpsertWithWhereUniqueWithoutFoodsInput | Sub_FoodUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: Sub_FoodCreateManyFoodsInputEnvelope
    set?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    disconnect?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    delete?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    connect?: Sub_FoodWhereUniqueInput | Sub_FoodWhereUniqueInput[]
    update?: Sub_FoodUpdateWithWhereUniqueWithoutFoodsInput | Sub_FoodUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: Sub_FoodUpdateManyWithWhereWithoutFoodsInput | Sub_FoodUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: Sub_FoodScalarWhereInput | Sub_FoodScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutLike_ResInput = {
    create?: XOR<UsersCreateWithoutLike_ResInput, UsersUncheckedCreateWithoutLike_ResInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLike_ResInput
    connect?: UsersWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutLike_ResInput = {
    create?: XOR<RestaurantCreateWithoutLike_ResInput, RestaurantUncheckedCreateWithoutLike_ResInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutLike_ResInput
    connect?: RestaurantWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UsersUpdateOneWithoutLike_ResNestedInput = {
    create?: XOR<UsersCreateWithoutLike_ResInput, UsersUncheckedCreateWithoutLike_ResInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLike_ResInput
    upsert?: UsersUpsertWithoutLike_ResInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLike_ResInput, UsersUpdateWithoutLike_ResInput>, UsersUncheckedUpdateWithoutLike_ResInput>
  }

  export type RestaurantUpdateOneWithoutLike_ResNestedInput = {
    create?: XOR<RestaurantCreateWithoutLike_ResInput, RestaurantUncheckedCreateWithoutLike_ResInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutLike_ResInput
    upsert?: RestaurantUpsertWithoutLike_ResInput
    disconnect?: RestaurantWhereInput | boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutLike_ResInput, RestaurantUpdateWithoutLike_ResInput>, RestaurantUncheckedUpdateWithoutLike_ResInput>
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type FoodsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutOrdersInput
    connect?: FoodsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type FoodsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutOrdersInput
    upsert?: FoodsUpsertWithoutOrdersInput
    disconnect?: FoodsWhereInput | boolean
    delete?: FoodsWhereInput | boolean
    connect?: FoodsWhereUniqueInput
    update?: XOR<XOR<FoodsUpdateToOneWithWhereWithoutOrdersInput, FoodsUpdateWithoutOrdersInput>, FoodsUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersCreateNestedOneWithoutRate_ResInput = {
    create?: XOR<UsersCreateWithoutRate_ResInput, UsersUncheckedCreateWithoutRate_ResInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRate_ResInput
    connect?: UsersWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutRate_ResInput = {
    create?: XOR<RestaurantCreateWithoutRate_ResInput, RestaurantUncheckedCreateWithoutRate_ResInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutRate_ResInput
    connect?: RestaurantWhereUniqueInput
  }

  export type UsersUpdateOneWithoutRate_ResNestedInput = {
    create?: XOR<UsersCreateWithoutRate_ResInput, UsersUncheckedCreateWithoutRate_ResInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRate_ResInput
    upsert?: UsersUpsertWithoutRate_ResInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRate_ResInput, UsersUpdateWithoutRate_ResInput>, UsersUncheckedUpdateWithoutRate_ResInput>
  }

  export type RestaurantUpdateOneWithoutRate_ResNestedInput = {
    create?: XOR<RestaurantCreateWithoutRate_ResInput, RestaurantUncheckedCreateWithoutRate_ResInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutRate_ResInput
    upsert?: RestaurantUpsertWithoutRate_ResInput
    disconnect?: RestaurantWhereInput | boolean
    delete?: RestaurantWhereInput | boolean
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutRate_ResInput, RestaurantUpdateWithoutRate_ResInput>, RestaurantUncheckedUpdateWithoutRate_ResInput>
  }

  export type Like_ResCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Like_ResCreateWithoutRestaurantInput, Like_ResUncheckedCreateWithoutRestaurantInput> | Like_ResCreateWithoutRestaurantInput[] | Like_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutRestaurantInput | Like_ResCreateOrConnectWithoutRestaurantInput[]
    createMany?: Like_ResCreateManyRestaurantInputEnvelope
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
  }

  export type Rate_ResCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Rate_ResCreateWithoutRestaurantInput, Rate_ResUncheckedCreateWithoutRestaurantInput> | Rate_ResCreateWithoutRestaurantInput[] | Rate_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutRestaurantInput | Rate_ResCreateOrConnectWithoutRestaurantInput[]
    createMany?: Rate_ResCreateManyRestaurantInputEnvelope
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
  }

  export type Like_ResUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Like_ResCreateWithoutRestaurantInput, Like_ResUncheckedCreateWithoutRestaurantInput> | Like_ResCreateWithoutRestaurantInput[] | Like_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutRestaurantInput | Like_ResCreateOrConnectWithoutRestaurantInput[]
    createMany?: Like_ResCreateManyRestaurantInputEnvelope
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
  }

  export type Rate_ResUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<Rate_ResCreateWithoutRestaurantInput, Rate_ResUncheckedCreateWithoutRestaurantInput> | Rate_ResCreateWithoutRestaurantInput[] | Rate_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutRestaurantInput | Rate_ResCreateOrConnectWithoutRestaurantInput[]
    createMany?: Rate_ResCreateManyRestaurantInputEnvelope
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
  }

  export type Like_ResUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Like_ResCreateWithoutRestaurantInput, Like_ResUncheckedCreateWithoutRestaurantInput> | Like_ResCreateWithoutRestaurantInput[] | Like_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutRestaurantInput | Like_ResCreateOrConnectWithoutRestaurantInput[]
    upsert?: Like_ResUpsertWithWhereUniqueWithoutRestaurantInput | Like_ResUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: Like_ResCreateManyRestaurantInputEnvelope
    set?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    disconnect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    delete?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    update?: Like_ResUpdateWithWhereUniqueWithoutRestaurantInput | Like_ResUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: Like_ResUpdateManyWithWhereWithoutRestaurantInput | Like_ResUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: Like_ResScalarWhereInput | Like_ResScalarWhereInput[]
  }

  export type Rate_ResUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Rate_ResCreateWithoutRestaurantInput, Rate_ResUncheckedCreateWithoutRestaurantInput> | Rate_ResCreateWithoutRestaurantInput[] | Rate_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutRestaurantInput | Rate_ResCreateOrConnectWithoutRestaurantInput[]
    upsert?: Rate_ResUpsertWithWhereUniqueWithoutRestaurantInput | Rate_ResUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: Rate_ResCreateManyRestaurantInputEnvelope
    set?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    disconnect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    delete?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    update?: Rate_ResUpdateWithWhereUniqueWithoutRestaurantInput | Rate_ResUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: Rate_ResUpdateManyWithWhereWithoutRestaurantInput | Rate_ResUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: Rate_ResScalarWhereInput | Rate_ResScalarWhereInput[]
  }

  export type Like_ResUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Like_ResCreateWithoutRestaurantInput, Like_ResUncheckedCreateWithoutRestaurantInput> | Like_ResCreateWithoutRestaurantInput[] | Like_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutRestaurantInput | Like_ResCreateOrConnectWithoutRestaurantInput[]
    upsert?: Like_ResUpsertWithWhereUniqueWithoutRestaurantInput | Like_ResUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: Like_ResCreateManyRestaurantInputEnvelope
    set?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    disconnect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    delete?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    update?: Like_ResUpdateWithWhereUniqueWithoutRestaurantInput | Like_ResUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: Like_ResUpdateManyWithWhereWithoutRestaurantInput | Like_ResUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: Like_ResScalarWhereInput | Like_ResScalarWhereInput[]
  }

  export type Rate_ResUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<Rate_ResCreateWithoutRestaurantInput, Rate_ResUncheckedCreateWithoutRestaurantInput> | Rate_ResCreateWithoutRestaurantInput[] | Rate_ResUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutRestaurantInput | Rate_ResCreateOrConnectWithoutRestaurantInput[]
    upsert?: Rate_ResUpsertWithWhereUniqueWithoutRestaurantInput | Rate_ResUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: Rate_ResCreateManyRestaurantInputEnvelope
    set?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    disconnect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    delete?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    update?: Rate_ResUpdateWithWhereUniqueWithoutRestaurantInput | Rate_ResUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: Rate_ResUpdateManyWithWhereWithoutRestaurantInput | Rate_ResUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: Rate_ResScalarWhereInput | Rate_ResScalarWhereInput[]
  }

  export type FoodsCreateNestedOneWithoutSub_FoodInput = {
    create?: XOR<FoodsCreateWithoutSub_FoodInput, FoodsUncheckedCreateWithoutSub_FoodInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutSub_FoodInput
    connect?: FoodsWhereUniqueInput
  }

  export type FoodsUpdateOneWithoutSub_FoodNestedInput = {
    create?: XOR<FoodsCreateWithoutSub_FoodInput, FoodsUncheckedCreateWithoutSub_FoodInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutSub_FoodInput
    upsert?: FoodsUpsertWithoutSub_FoodInput
    disconnect?: FoodsWhereInput | boolean
    delete?: FoodsWhereInput | boolean
    connect?: FoodsWhereUniqueInput
    update?: XOR<XOR<FoodsUpdateToOneWithWhereWithoutSub_FoodInput, FoodsUpdateWithoutSub_FoodInput>, FoodsUncheckedUpdateWithoutSub_FoodInput>
  }

  export type Like_ResCreateNestedManyWithoutUsersInput = {
    create?: XOR<Like_ResCreateWithoutUsersInput, Like_ResUncheckedCreateWithoutUsersInput> | Like_ResCreateWithoutUsersInput[] | Like_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutUsersInput | Like_ResCreateOrConnectWithoutUsersInput[]
    createMany?: Like_ResCreateManyUsersInputEnvelope
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type Rate_ResCreateNestedManyWithoutUsersInput = {
    create?: XOR<Rate_ResCreateWithoutUsersInput, Rate_ResUncheckedCreateWithoutUsersInput> | Rate_ResCreateWithoutUsersInput[] | Rate_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutUsersInput | Rate_ResCreateOrConnectWithoutUsersInput[]
    createMany?: Rate_ResCreateManyUsersInputEnvelope
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
  }

  export type Like_ResUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Like_ResCreateWithoutUsersInput, Like_ResUncheckedCreateWithoutUsersInput> | Like_ResCreateWithoutUsersInput[] | Like_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutUsersInput | Like_ResCreateOrConnectWithoutUsersInput[]
    createMany?: Like_ResCreateManyUsersInputEnvelope
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type Rate_ResUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Rate_ResCreateWithoutUsersInput, Rate_ResUncheckedCreateWithoutUsersInput> | Rate_ResCreateWithoutUsersInput[] | Rate_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutUsersInput | Rate_ResCreateOrConnectWithoutUsersInput[]
    createMany?: Rate_ResCreateManyUsersInputEnvelope
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Like_ResUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Like_ResCreateWithoutUsersInput, Like_ResUncheckedCreateWithoutUsersInput> | Like_ResCreateWithoutUsersInput[] | Like_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutUsersInput | Like_ResCreateOrConnectWithoutUsersInput[]
    upsert?: Like_ResUpsertWithWhereUniqueWithoutUsersInput | Like_ResUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Like_ResCreateManyUsersInputEnvelope
    set?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    disconnect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    delete?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    update?: Like_ResUpdateWithWhereUniqueWithoutUsersInput | Like_ResUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Like_ResUpdateManyWithWhereWithoutUsersInput | Like_ResUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Like_ResScalarWhereInput | Like_ResScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type Rate_ResUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Rate_ResCreateWithoutUsersInput, Rate_ResUncheckedCreateWithoutUsersInput> | Rate_ResCreateWithoutUsersInput[] | Rate_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutUsersInput | Rate_ResCreateOrConnectWithoutUsersInput[]
    upsert?: Rate_ResUpsertWithWhereUniqueWithoutUsersInput | Rate_ResUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Rate_ResCreateManyUsersInputEnvelope
    set?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    disconnect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    delete?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    update?: Rate_ResUpdateWithWhereUniqueWithoutUsersInput | Rate_ResUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Rate_ResUpdateManyWithWhereWithoutUsersInput | Rate_ResUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Rate_ResScalarWhereInput | Rate_ResScalarWhereInput[]
  }

  export type Like_ResUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Like_ResCreateWithoutUsersInput, Like_ResUncheckedCreateWithoutUsersInput> | Like_ResCreateWithoutUsersInput[] | Like_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Like_ResCreateOrConnectWithoutUsersInput | Like_ResCreateOrConnectWithoutUsersInput[]
    upsert?: Like_ResUpsertWithWhereUniqueWithoutUsersInput | Like_ResUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Like_ResCreateManyUsersInputEnvelope
    set?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    disconnect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    delete?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    connect?: Like_ResWhereUniqueInput | Like_ResWhereUniqueInput[]
    update?: Like_ResUpdateWithWhereUniqueWithoutUsersInput | Like_ResUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Like_ResUpdateManyWithWhereWithoutUsersInput | Like_ResUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Like_ResScalarWhereInput | Like_ResScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type Rate_ResUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Rate_ResCreateWithoutUsersInput, Rate_ResUncheckedCreateWithoutUsersInput> | Rate_ResCreateWithoutUsersInput[] | Rate_ResUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Rate_ResCreateOrConnectWithoutUsersInput | Rate_ResCreateOrConnectWithoutUsersInput[]
    upsert?: Rate_ResUpsertWithWhereUniqueWithoutUsersInput | Rate_ResUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Rate_ResCreateManyUsersInputEnvelope
    set?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    disconnect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    delete?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    connect?: Rate_ResWhereUniqueInput | Rate_ResWhereUniqueInput[]
    update?: Rate_ResUpdateWithWhereUniqueWithoutUsersInput | Rate_ResUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Rate_ResUpdateManyWithWhereWithoutUsersInput | Rate_ResUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Rate_ResScalarWhereInput | Rate_ResScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FoodsCreateWithoutFood_TypeInput = {
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersCreateNestedManyWithoutFoodsInput
    Sub_Food?: Sub_FoodCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUncheckedCreateWithoutFood_TypeInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutFoodsInput
    Sub_Food?: Sub_FoodUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type FoodsCreateOrConnectWithoutFood_TypeInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutFood_TypeInput, FoodsUncheckedCreateWithoutFood_TypeInput>
  }

  export type FoodsCreateManyFood_TypeInputEnvelope = {
    data: FoodsCreateManyFood_TypeInput | FoodsCreateManyFood_TypeInput[]
    skipDuplicates?: boolean
  }

  export type FoodsUpsertWithWhereUniqueWithoutFood_TypeInput = {
    where: FoodsWhereUniqueInput
    update: XOR<FoodsUpdateWithoutFood_TypeInput, FoodsUncheckedUpdateWithoutFood_TypeInput>
    create: XOR<FoodsCreateWithoutFood_TypeInput, FoodsUncheckedCreateWithoutFood_TypeInput>
  }

  export type FoodsUpdateWithWhereUniqueWithoutFood_TypeInput = {
    where: FoodsWhereUniqueInput
    data: XOR<FoodsUpdateWithoutFood_TypeInput, FoodsUncheckedUpdateWithoutFood_TypeInput>
  }

  export type FoodsUpdateManyWithWhereWithoutFood_TypeInput = {
    where: FoodsScalarWhereInput
    data: XOR<FoodsUpdateManyMutationInput, FoodsUncheckedUpdateManyWithoutFood_TypeInput>
  }

  export type FoodsScalarWhereInput = {
    AND?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
    OR?: FoodsScalarWhereInput[]
    NOT?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
    id?: IntFilter<"Foods"> | number
    name?: StringNullableFilter<"Foods"> | string | null
    image?: StringNullableFilter<"Foods"> | string | null
    price?: FloatNullableFilter<"Foods"> | number | null
    description?: StringNullableFilter<"Foods"> | string | null
    type_id?: IntNullableFilter<"Foods"> | number | null
    deletedBy?: IntFilter<"Foods"> | number
    isDeleted?: BoolFilter<"Foods"> | boolean
    deletedAt?: DateTimeNullableFilter<"Foods"> | Date | string | null
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
  }

  export type Food_TypeCreateWithoutFoodsInput = {
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Food_TypeUncheckedCreateWithoutFoodsInput = {
    id?: number
    name?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Food_TypeCreateOrConnectWithoutFoodsInput = {
    where: Food_TypeWhereUniqueInput
    create: XOR<Food_TypeCreateWithoutFoodsInput, Food_TypeUncheckedCreateWithoutFoodsInput>
  }

  export type OrdersCreateWithoutFoodsInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    Users?: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutFoodsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type OrdersCreateOrConnectWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput>
  }

  export type OrdersCreateManyFoodsInputEnvelope = {
    data: OrdersCreateManyFoodsInput | OrdersCreateManyFoodsInput[]
    skipDuplicates?: boolean
  }

  export type Sub_FoodCreateWithoutFoodsInput = {
    name?: string | null
    price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Sub_FoodUncheckedCreateWithoutFoodsInput = {
    id?: number
    name?: string | null
    price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Sub_FoodCreateOrConnectWithoutFoodsInput = {
    where: Sub_FoodWhereUniqueInput
    create: XOR<Sub_FoodCreateWithoutFoodsInput, Sub_FoodUncheckedCreateWithoutFoodsInput>
  }

  export type Sub_FoodCreateManyFoodsInputEnvelope = {
    data: Sub_FoodCreateManyFoodsInput | Sub_FoodCreateManyFoodsInput[]
    skipDuplicates?: boolean
  }

  export type Food_TypeUpsertWithoutFoodsInput = {
    update: XOR<Food_TypeUpdateWithoutFoodsInput, Food_TypeUncheckedUpdateWithoutFoodsInput>
    create: XOR<Food_TypeCreateWithoutFoodsInput, Food_TypeUncheckedCreateWithoutFoodsInput>
    where?: Food_TypeWhereInput
  }

  export type Food_TypeUpdateToOneWithWhereWithoutFoodsInput = {
    where?: Food_TypeWhereInput
    data: XOR<Food_TypeUpdateWithoutFoodsInput, Food_TypeUncheckedUpdateWithoutFoodsInput>
  }

  export type Food_TypeUpdateWithoutFoodsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Food_TypeUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutFoodsInput, OrdersUncheckedUpdateWithoutFoodsInput>
    create: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutFoodsInput, OrdersUncheckedUpdateWithoutFoodsInput>
  }

  export type OrdersUpdateManyWithWhereWithoutFoodsInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutFoodsInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
    deletedBy?: IntFilter<"Orders"> | number
    isDeleted?: BoolFilter<"Orders"> | boolean
    deletedAt?: DateTimeNullableFilter<"Orders"> | Date | string | null
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    amount?: IntNullableFilter<"Orders"> | number | null
    code?: StringNullableFilter<"Orders"> | string | null
    arr_sub_id?: StringNullableFilter<"Orders"> | string | null
  }

  export type Sub_FoodUpsertWithWhereUniqueWithoutFoodsInput = {
    where: Sub_FoodWhereUniqueInput
    update: XOR<Sub_FoodUpdateWithoutFoodsInput, Sub_FoodUncheckedUpdateWithoutFoodsInput>
    create: XOR<Sub_FoodCreateWithoutFoodsInput, Sub_FoodUncheckedCreateWithoutFoodsInput>
  }

  export type Sub_FoodUpdateWithWhereUniqueWithoutFoodsInput = {
    where: Sub_FoodWhereUniqueInput
    data: XOR<Sub_FoodUpdateWithoutFoodsInput, Sub_FoodUncheckedUpdateWithoutFoodsInput>
  }

  export type Sub_FoodUpdateManyWithWhereWithoutFoodsInput = {
    where: Sub_FoodScalarWhereInput
    data: XOR<Sub_FoodUpdateManyMutationInput, Sub_FoodUncheckedUpdateManyWithoutFoodsInput>
  }

  export type Sub_FoodScalarWhereInput = {
    AND?: Sub_FoodScalarWhereInput | Sub_FoodScalarWhereInput[]
    OR?: Sub_FoodScalarWhereInput[]
    NOT?: Sub_FoodScalarWhereInput | Sub_FoodScalarWhereInput[]
    id?: IntFilter<"Sub_Food"> | number
    name?: StringNullableFilter<"Sub_Food"> | string | null
    price?: FloatNullableFilter<"Sub_Food"> | number | null
    food_id?: IntNullableFilter<"Sub_Food"> | number | null
    deletedBy?: IntFilter<"Sub_Food"> | number
    isDeleted?: BoolFilter<"Sub_Food"> | boolean
    deletedAt?: DateTimeNullableFilter<"Sub_Food"> | Date | string | null
    createdAt?: DateTimeFilter<"Sub_Food"> | Date | string
    updatedAt?: DateTimeFilter<"Sub_Food"> | Date | string
  }

  export type UsersCreateWithoutLike_ResInput = {
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersCreateNestedManyWithoutUsersInput
    Rate_Res?: Rate_ResCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutLike_ResInput = {
    id?: number
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
    Rate_Res?: Rate_ResUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutLike_ResInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLike_ResInput, UsersUncheckedCreateWithoutLike_ResInput>
  }

  export type RestaurantCreateWithoutLike_ResInput = {
    name?: string | null
    image?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Rate_Res?: Rate_ResCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutLike_ResInput = {
    id?: number
    name?: string | null
    image?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Rate_Res?: Rate_ResUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutLike_ResInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutLike_ResInput, RestaurantUncheckedCreateWithoutLike_ResInput>
  }

  export type UsersUpsertWithoutLike_ResInput = {
    update: XOR<UsersUpdateWithoutLike_ResInput, UsersUncheckedUpdateWithoutLike_ResInput>
    create: XOR<UsersCreateWithoutLike_ResInput, UsersUncheckedCreateWithoutLike_ResInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLike_ResInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLike_ResInput, UsersUncheckedUpdateWithoutLike_ResInput>
  }

  export type UsersUpdateWithoutLike_ResInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
    Rate_Res?: Rate_ResUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutLike_ResInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
    Rate_Res?: Rate_ResUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RestaurantUpsertWithoutLike_ResInput = {
    update: XOR<RestaurantUpdateWithoutLike_ResInput, RestaurantUncheckedUpdateWithoutLike_ResInput>
    create: XOR<RestaurantCreateWithoutLike_ResInput, RestaurantUncheckedCreateWithoutLike_ResInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutLike_ResInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutLike_ResInput, RestaurantUncheckedUpdateWithoutLike_ResInput>
  }

  export type RestaurantUpdateWithoutLike_ResInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rate_Res?: Rate_ResUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutLike_ResInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Rate_Res?: Rate_ResUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type UsersCreateWithoutOrdersInput = {
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResCreateNestedManyWithoutUsersInput
    Rate_Res?: Rate_ResCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResUncheckedCreateNestedManyWithoutUsersInput
    Rate_Res?: Rate_ResUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type FoodsCreateWithoutOrdersInput = {
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Food_Type?: Food_TypeCreateNestedOneWithoutFoodsInput
    Sub_Food?: Sub_FoodCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUncheckedCreateWithoutOrdersInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Sub_Food?: Sub_FoodUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type FoodsCreateOrConnectWithoutOrdersInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUpdateManyWithoutUsersNestedInput
    Rate_Res?: Rate_ResUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUncheckedUpdateManyWithoutUsersNestedInput
    Rate_Res?: Rate_ResUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type FoodsUpsertWithoutOrdersInput = {
    update: XOR<FoodsUpdateWithoutOrdersInput, FoodsUncheckedUpdateWithoutOrdersInput>
    create: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    where?: FoodsWhereInput
  }

  export type FoodsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: FoodsWhereInput
    data: XOR<FoodsUpdateWithoutOrdersInput, FoodsUncheckedUpdateWithoutOrdersInput>
  }

  export type FoodsUpdateWithoutOrdersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Food_Type?: Food_TypeUpdateOneWithoutFoodsNestedInput
    Sub_Food?: Sub_FoodUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sub_Food?: Sub_FoodUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type UsersCreateWithoutRate_ResInput = {
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutRate_ResInput = {
    id?: number
    email: string
    fullName?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutRate_ResInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRate_ResInput, UsersUncheckedCreateWithoutRate_ResInput>
  }

  export type RestaurantCreateWithoutRate_ResInput = {
    name?: string | null
    image?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutRate_ResInput = {
    id?: number
    name?: string | null
    image?: string | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Like_Res?: Like_ResUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutRate_ResInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutRate_ResInput, RestaurantUncheckedCreateWithoutRate_ResInput>
  }

  export type UsersUpsertWithoutRate_ResInput = {
    update: XOR<UsersUpdateWithoutRate_ResInput, UsersUncheckedUpdateWithoutRate_ResInput>
    create: XOR<UsersCreateWithoutRate_ResInput, UsersUncheckedCreateWithoutRate_ResInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRate_ResInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRate_ResInput, UsersUncheckedUpdateWithoutRate_ResInput>
  }

  export type UsersUpdateWithoutRate_ResInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutRate_ResInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type RestaurantUpsertWithoutRate_ResInput = {
    update: XOR<RestaurantUpdateWithoutRate_ResInput, RestaurantUncheckedUpdateWithoutRate_ResInput>
    create: XOR<RestaurantCreateWithoutRate_ResInput, RestaurantUncheckedCreateWithoutRate_ResInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutRate_ResInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutRate_ResInput, RestaurantUncheckedUpdateWithoutRate_ResInput>
  }

  export type RestaurantUpdateWithoutRate_ResInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutRate_ResInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Like_Res?: Like_ResUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type Like_ResCreateWithoutRestaurantInput = {
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
    Users?: UsersCreateNestedOneWithoutLike_ResInput
  }

  export type Like_ResUncheckedCreateWithoutRestaurantInput = {
    id?: number
    date_like?: Date | string | null
    user_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
  }

  export type Like_ResCreateOrConnectWithoutRestaurantInput = {
    where: Like_ResWhereUniqueInput
    create: XOR<Like_ResCreateWithoutRestaurantInput, Like_ResUncheckedCreateWithoutRestaurantInput>
  }

  export type Like_ResCreateManyRestaurantInputEnvelope = {
    data: Like_ResCreateManyRestaurantInput | Like_ResCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type Rate_ResCreateWithoutRestaurantInput = {
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Users?: UsersCreateNestedOneWithoutRate_ResInput
  }

  export type Rate_ResUncheckedCreateWithoutRestaurantInput = {
    id?: number
    amount?: number | null
    date_rate?: Date | string | null
    user_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rate_ResCreateOrConnectWithoutRestaurantInput = {
    where: Rate_ResWhereUniqueInput
    create: XOR<Rate_ResCreateWithoutRestaurantInput, Rate_ResUncheckedCreateWithoutRestaurantInput>
  }

  export type Rate_ResCreateManyRestaurantInputEnvelope = {
    data: Rate_ResCreateManyRestaurantInput | Rate_ResCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type Like_ResUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: Like_ResWhereUniqueInput
    update: XOR<Like_ResUpdateWithoutRestaurantInput, Like_ResUncheckedUpdateWithoutRestaurantInput>
    create: XOR<Like_ResCreateWithoutRestaurantInput, Like_ResUncheckedCreateWithoutRestaurantInput>
  }

  export type Like_ResUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: Like_ResWhereUniqueInput
    data: XOR<Like_ResUpdateWithoutRestaurantInput, Like_ResUncheckedUpdateWithoutRestaurantInput>
  }

  export type Like_ResUpdateManyWithWhereWithoutRestaurantInput = {
    where: Like_ResScalarWhereInput
    data: XOR<Like_ResUpdateManyMutationInput, Like_ResUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type Like_ResScalarWhereInput = {
    AND?: Like_ResScalarWhereInput | Like_ResScalarWhereInput[]
    OR?: Like_ResScalarWhereInput[]
    NOT?: Like_ResScalarWhereInput | Like_ResScalarWhereInput[]
    id?: IntFilter<"Like_Res"> | number
    date_like?: DateTimeNullableFilter<"Like_Res"> | Date | string | null
    user_id?: IntNullableFilter<"Like_Res"> | number | null
    res_id?: IntNullableFilter<"Like_Res"> | number | null
    deletedBy?: IntFilter<"Like_Res"> | number
    isDeleted?: BoolFilter<"Like_Res"> | boolean
    deletedAt?: DateTimeNullableFilter<"Like_Res"> | Date | string | null
    createdAt?: DateTimeFilter<"Like_Res"> | Date | string
    updatedAt?: DateTimeFilter<"Like_Res"> | Date | string
    isLike?: BoolNullableFilter<"Like_Res"> | boolean | null
  }

  export type Rate_ResUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: Rate_ResWhereUniqueInput
    update: XOR<Rate_ResUpdateWithoutRestaurantInput, Rate_ResUncheckedUpdateWithoutRestaurantInput>
    create: XOR<Rate_ResCreateWithoutRestaurantInput, Rate_ResUncheckedCreateWithoutRestaurantInput>
  }

  export type Rate_ResUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: Rate_ResWhereUniqueInput
    data: XOR<Rate_ResUpdateWithoutRestaurantInput, Rate_ResUncheckedUpdateWithoutRestaurantInput>
  }

  export type Rate_ResUpdateManyWithWhereWithoutRestaurantInput = {
    where: Rate_ResScalarWhereInput
    data: XOR<Rate_ResUpdateManyMutationInput, Rate_ResUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type Rate_ResScalarWhereInput = {
    AND?: Rate_ResScalarWhereInput | Rate_ResScalarWhereInput[]
    OR?: Rate_ResScalarWhereInput[]
    NOT?: Rate_ResScalarWhereInput | Rate_ResScalarWhereInput[]
    id?: IntFilter<"Rate_Res"> | number
    amount?: IntNullableFilter<"Rate_Res"> | number | null
    date_rate?: DateTimeNullableFilter<"Rate_Res"> | Date | string | null
    user_id?: IntNullableFilter<"Rate_Res"> | number | null
    res_id?: IntNullableFilter<"Rate_Res"> | number | null
    deletedBy?: IntFilter<"Rate_Res"> | number
    isDeleted?: BoolFilter<"Rate_Res"> | boolean
    deletedAt?: DateTimeNullableFilter<"Rate_Res"> | Date | string | null
    createdAt?: DateTimeFilter<"Rate_Res"> | Date | string
    updatedAt?: DateTimeFilter<"Rate_Res"> | Date | string
  }

  export type FoodsCreateWithoutSub_FoodInput = {
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Food_Type?: Food_TypeCreateNestedOneWithoutFoodsInput
    Orders?: OrdersCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUncheckedCreateWithoutSub_FoodInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    type_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Orders?: OrdersUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type FoodsCreateOrConnectWithoutSub_FoodInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutSub_FoodInput, FoodsUncheckedCreateWithoutSub_FoodInput>
  }

  export type FoodsUpsertWithoutSub_FoodInput = {
    update: XOR<FoodsUpdateWithoutSub_FoodInput, FoodsUncheckedUpdateWithoutSub_FoodInput>
    create: XOR<FoodsCreateWithoutSub_FoodInput, FoodsUncheckedCreateWithoutSub_FoodInput>
    where?: FoodsWhereInput
  }

  export type FoodsUpdateToOneWithWhereWithoutSub_FoodInput = {
    where?: FoodsWhereInput
    data: XOR<FoodsUpdateWithoutSub_FoodInput, FoodsUncheckedUpdateWithoutSub_FoodInput>
  }

  export type FoodsUpdateWithoutSub_FoodInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Food_Type?: Food_TypeUpdateOneWithoutFoodsNestedInput
    Orders?: OrdersUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateWithoutSub_FoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type Like_ResCreateWithoutUsersInput = {
    date_like?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
    Restaurant?: RestaurantCreateNestedOneWithoutLike_ResInput
  }

  export type Like_ResUncheckedCreateWithoutUsersInput = {
    id?: number
    date_like?: Date | string | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
  }

  export type Like_ResCreateOrConnectWithoutUsersInput = {
    where: Like_ResWhereUniqueInput
    create: XOR<Like_ResCreateWithoutUsersInput, Like_ResUncheckedCreateWithoutUsersInput>
  }

  export type Like_ResCreateManyUsersInputEnvelope = {
    data: Like_ResCreateManyUsersInput | Like_ResCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUsersInput = {
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    Foods?: FoodsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUsersInput = {
    id?: number
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type OrdersCreateOrConnectWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersCreateManyUsersInputEnvelope = {
    data: OrdersCreateManyUsersInput | OrdersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type Rate_ResCreateWithoutUsersInput = {
    amount?: number | null
    date_rate?: Date | string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Restaurant?: RestaurantCreateNestedOneWithoutRate_ResInput
  }

  export type Rate_ResUncheckedCreateWithoutUsersInput = {
    id?: number
    amount?: number | null
    date_rate?: Date | string | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rate_ResCreateOrConnectWithoutUsersInput = {
    where: Rate_ResWhereUniqueInput
    create: XOR<Rate_ResCreateWithoutUsersInput, Rate_ResUncheckedCreateWithoutUsersInput>
  }

  export type Rate_ResCreateManyUsersInputEnvelope = {
    data: Rate_ResCreateManyUsersInput | Rate_ResCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type Like_ResUpsertWithWhereUniqueWithoutUsersInput = {
    where: Like_ResWhereUniqueInput
    update: XOR<Like_ResUpdateWithoutUsersInput, Like_ResUncheckedUpdateWithoutUsersInput>
    create: XOR<Like_ResCreateWithoutUsersInput, Like_ResUncheckedCreateWithoutUsersInput>
  }

  export type Like_ResUpdateWithWhereUniqueWithoutUsersInput = {
    where: Like_ResWhereUniqueInput
    data: XOR<Like_ResUpdateWithoutUsersInput, Like_ResUncheckedUpdateWithoutUsersInput>
  }

  export type Like_ResUpdateManyWithWhereWithoutUsersInput = {
    where: Like_ResScalarWhereInput
    data: XOR<Like_ResUpdateManyMutationInput, Like_ResUncheckedUpdateManyWithoutUsersInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUsersInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUsersInput>
  }

  export type Rate_ResUpsertWithWhereUniqueWithoutUsersInput = {
    where: Rate_ResWhereUniqueInput
    update: XOR<Rate_ResUpdateWithoutUsersInput, Rate_ResUncheckedUpdateWithoutUsersInput>
    create: XOR<Rate_ResCreateWithoutUsersInput, Rate_ResUncheckedCreateWithoutUsersInput>
  }

  export type Rate_ResUpdateWithWhereUniqueWithoutUsersInput = {
    where: Rate_ResWhereUniqueInput
    data: XOR<Rate_ResUpdateWithoutUsersInput, Rate_ResUncheckedUpdateWithoutUsersInput>
  }

  export type Rate_ResUpdateManyWithWhereWithoutUsersInput = {
    where: Rate_ResScalarWhereInput
    data: XOR<Rate_ResUpdateManyMutationInput, Rate_ResUncheckedUpdateManyWithoutUsersInput>
  }

  export type FoodsCreateManyFood_TypeInput = {
    id?: number
    name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodsUpdateWithoutFood_TypeInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUpdateManyWithoutFoodsNestedInput
    Sub_Food?: Sub_FoodUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateWithoutFood_TypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Orders?: OrdersUncheckedUpdateManyWithoutFoodsNestedInput
    Sub_Food?: Sub_FoodUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateManyWithoutFood_TypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyFoodsInput = {
    id?: number
    userId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type Sub_FoodCreateManyFoodsInput = {
    id?: number
    name?: string | null
    price?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateWithoutFoodsInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    Users?: UsersUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUncheckedUpdateManyWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Sub_FoodUpdateWithoutFoodsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sub_FoodUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sub_FoodUncheckedUpdateManyWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Like_ResCreateManyRestaurantInput = {
    id?: number
    date_like?: Date | string | null
    user_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
  }

  export type Rate_ResCreateManyRestaurantInput = {
    id?: number
    amount?: number | null
    date_rate?: Date | string | null
    user_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Like_ResUpdateWithoutRestaurantInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Users?: UsersUpdateOneWithoutLike_ResNestedInput
  }

  export type Like_ResUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Like_ResUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Rate_ResUpdateWithoutRestaurantInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutRate_ResNestedInput
  }

  export type Rate_ResUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rate_ResUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Like_ResCreateManyUsersInput = {
    id?: number
    date_like?: Date | string | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isLike?: boolean | null
  }

  export type OrdersCreateManyUsersInput = {
    id?: number
    foodId?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type Rate_ResCreateManyUsersInput = {
    id?: number
    amount?: number | null
    date_rate?: Date | string | null
    res_id?: number | null
    deletedBy?: number
    isDeleted?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Like_ResUpdateWithoutUsersInput = {
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Restaurant?: RestaurantUpdateOneWithoutLike_ResNestedInput
  }

  export type Like_ResUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type Like_ResUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isLike?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrdersUpdateWithoutUsersInput = {
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    Foods?: FoodsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Rate_ResUpdateWithoutUsersInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Restaurant?: RestaurantUpdateOneWithoutRate_ResNestedInput
  }

  export type Rate_ResUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rate_ResUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    date_rate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    res_id?: NullableIntFieldUpdateOperationsInput | number | null
    deletedBy?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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