
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WorkOrder
 * 
 */
export type WorkOrder = $Result.DefaultSelection<Prisma.$WorkOrderPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  manager: 'manager',
  hod: 'hod',
  supervisor: 'supervisor',
  technician: 'technician',
  engineer: 'engineer',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Priority: {
  HIGH: 'HIGH',
  MEDIUM: 'MEDIUM',
  LOW: 'LOW'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const WorkOrderStatus: {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED',
  ON_HOLD: 'ON_HOLD'
};

export type WorkOrderStatus = (typeof WorkOrderStatus)[keyof typeof WorkOrderStatus]


export const Department: {
  ELECTRICAL: 'ELECTRICAL',
  MECHANICAL: 'MECHANICAL',
  ELECTRONICS: 'ELECTRONICS',
  MAINTENANCE: 'MAINTENANCE',
  OPERATIONS: 'OPERATIONS',
  PRODUCTION: 'PRODUCTION',
  QUALITY: 'QUALITY',
  IT: 'IT',
  GENERAL: 'GENERAL'
};

export type Department = (typeof Department)[keyof typeof Department]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type WorkOrderStatus = $Enums.WorkOrderStatus

export const WorkOrderStatus: typeof $Enums.WorkOrderStatus

export type Department = $Enums.Department

export const Department: typeof $Enums.Department

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.workOrder`: Exposes CRUD operations for the **WorkOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkOrders
    * const workOrders = await prisma.workOrder.findMany()
    * ```
    */
  get workOrder(): Prisma.WorkOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    WorkOrder: 'WorkOrder',
    Task: 'Task',
    Comment: 'Comment',
    Attachment: 'Attachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workOrder" | "task" | "comment" | "attachment"
      txIsolationLevel: never
    }
    model: {
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WorkOrder: {
        payload: Prisma.$WorkOrderPayload<ExtArgs>
        fields: Prisma.WorkOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findFirst: {
            args: Prisma.WorkOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          findMany: {
            args: Prisma.WorkOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>[]
          }
          create: {
            args: Prisma.WorkOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          createMany: {
            args: Prisma.WorkOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          update: {
            args: Prisma.WorkOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          deleteMany: {
            args: Prisma.WorkOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkOrderPayload>
          }
          aggregate: {
            args: Prisma.WorkOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkOrder>
          }
          groupBy: {
            args: Prisma.WorkOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WorkOrderFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WorkOrderAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WorkOrderCountArgs<ExtArgs>
            result: $Utils.Optional<WorkOrderCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TaskFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TaskAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AttachmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AttachmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workOrder?: WorkOrderOmit
    task?: TaskOmit
    comment?: CommentOmit
    attachment?: AttachmentOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdOrders: number
    assignedOrders: number
    supervisedOrders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrders?: boolean | UserCountOutputTypeCountCreatedOrdersArgs
    assignedOrders?: boolean | UserCountOutputTypeCountAssignedOrdersArgs
    supervisedOrders?: boolean | UserCountOutputTypeCountSupervisedOrdersArgs
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
  export type UserCountOutputTypeCountCreatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupervisedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
  }


  /**
   * Count Type WorkOrderCountOutputType
   */

  export type WorkOrderCountOutputType = {
    tasks: number
    comments: number
    attachments: number
  }

  export type WorkOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | WorkOrderCountOutputTypeCountTasksArgs
    comments?: boolean | WorkOrderCountOutputTypeCountCommentsArgs
    attachments?: boolean | WorkOrderCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * WorkOrderCountOutputType without action
   */
  export type WorkOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrderCountOutputType
     */
    select?: WorkOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkOrderCountOutputType without action
   */
  export type WorkOrderCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * WorkOrderCountOutputType without action
   */
  export type WorkOrderCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * WorkOrderCountOutputType without action
   */
  export type WorkOrderCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    department: $Enums.Department | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    department: $Enums.Department | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    department: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    department?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    department?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    department?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    role: $Enums.Role
    department: $Enums.Department | null
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    password?: boolean
    role?: boolean
    department?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    assignedOrders?: boolean | User$assignedOrdersArgs<ExtArgs>
    supervisedOrders?: boolean | User$supervisedOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    department?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "department" | "isActive" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    assignedOrders?: boolean | User$assignedOrdersArgs<ExtArgs>
    supervisedOrders?: boolean | User$supervisedOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdOrders: Prisma.$WorkOrderPayload<ExtArgs>[]
      assignedOrders: Prisma.$WorkOrderPayload<ExtArgs>[]
      supervisedOrders: Prisma.$WorkOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      role: $Enums.Role
      department: $Enums.Department | null
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    createdOrders<T extends User$createdOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedOrders<T extends User$assignedOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supervisedOrders<T extends User$supervisedOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$supervisedOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly department: FieldRef<"User", 'Department'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.createdOrders
   */
  export type User$createdOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    cursor?: WorkOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * User.assignedOrders
   */
  export type User$assignedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    cursor?: WorkOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * User.supervisedOrders
   */
  export type User$supervisedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    cursor?: WorkOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
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
   * Model WorkOrder
   */

  export type AggregateWorkOrder = {
    _count: WorkOrderCountAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  export type WorkOrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    title: string | null
    description: string | null
    priority: $Enums.Priority | null
    status: $Enums.WorkOrderStatus | null
    department: string | null
    location: string | null
    equipment: string | null
    startDate: Date | null
    dueDate: Date | null
    completedDate: Date | null
    createdById: string | null
    assignedToId: string | null
    supervisorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkOrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    title: string | null
    description: string | null
    priority: $Enums.Priority | null
    status: $Enums.WorkOrderStatus | null
    department: string | null
    location: string | null
    equipment: string | null
    startDate: Date | null
    dueDate: Date | null
    completedDate: Date | null
    createdById: string | null
    assignedToId: string | null
    supervisorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkOrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    title: number
    description: number
    priority: number
    status: number
    department: number
    location: number
    equipment: number
    startDate: number
    dueDate: number
    completedDate: number
    createdById: number
    assignedToId: number
    supervisorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkOrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    department?: true
    location?: true
    equipment?: true
    startDate?: true
    dueDate?: true
    completedDate?: true
    createdById?: true
    assignedToId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkOrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    department?: true
    location?: true
    equipment?: true
    startDate?: true
    dueDate?: true
    completedDate?: true
    createdById?: true
    assignedToId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkOrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    department?: true
    location?: true
    equipment?: true
    startDate?: true
    dueDate?: true
    completedDate?: true
    createdById?: true
    assignedToId?: true
    supervisorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrder to aggregate.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkOrders
    **/
    _count?: true | WorkOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkOrderMaxAggregateInputType
  }

  export type GetWorkOrderAggregateType<T extends WorkOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkOrder[P]>
      : GetScalarType<T[P], AggregateWorkOrder[P]>
  }




  export type WorkOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkOrderWhereInput
    orderBy?: WorkOrderOrderByWithAggregationInput | WorkOrderOrderByWithAggregationInput[]
    by: WorkOrderScalarFieldEnum[] | WorkOrderScalarFieldEnum
    having?: WorkOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkOrderCountAggregateInputType | true
    _min?: WorkOrderMinAggregateInputType
    _max?: WorkOrderMaxAggregateInputType
  }

  export type WorkOrderGroupByOutputType = {
    id: string
    orderNumber: string
    title: string
    description: string
    priority: $Enums.Priority
    status: $Enums.WorkOrderStatus
    department: string
    location: string | null
    equipment: string | null
    startDate: Date | null
    dueDate: Date | null
    completedDate: Date | null
    createdById: string
    assignedToId: string | null
    supervisorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkOrderCountAggregateOutputType | null
    _min: WorkOrderMinAggregateOutputType | null
    _max: WorkOrderMaxAggregateOutputType | null
  }

  type GetWorkOrderGroupByPayload<T extends WorkOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
            : GetScalarType<T[P], WorkOrderGroupByOutputType[P]>
        }
      >
    >


  export type WorkOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    department?: boolean
    location?: boolean
    equipment?: boolean
    startDate?: boolean
    dueDate?: boolean
    completedDate?: boolean
    createdById?: boolean
    assignedToId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | WorkOrder$assignedToArgs<ExtArgs>
    supervisedBy?: boolean | WorkOrder$supervisedByArgs<ExtArgs>
    tasks?: boolean | WorkOrder$tasksArgs<ExtArgs>
    comments?: boolean | WorkOrder$commentsArgs<ExtArgs>
    attachments?: boolean | WorkOrder$attachmentsArgs<ExtArgs>
    _count?: boolean | WorkOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workOrder"]>



  export type WorkOrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    department?: boolean
    location?: boolean
    equipment?: boolean
    startDate?: boolean
    dueDate?: boolean
    completedDate?: boolean
    createdById?: boolean
    assignedToId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "title" | "description" | "priority" | "status" | "department" | "location" | "equipment" | "startDate" | "dueDate" | "completedDate" | "createdById" | "assignedToId" | "supervisorId" | "createdAt" | "updatedAt", ExtArgs["result"]["workOrder"]>
  export type WorkOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | WorkOrder$assignedToArgs<ExtArgs>
    supervisedBy?: boolean | WorkOrder$supervisedByArgs<ExtArgs>
    tasks?: boolean | WorkOrder$tasksArgs<ExtArgs>
    comments?: boolean | WorkOrder$commentsArgs<ExtArgs>
    attachments?: boolean | WorkOrder$attachmentsArgs<ExtArgs>
    _count?: boolean | WorkOrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkOrder"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      supervisedBy: Prisma.$UserPayload<ExtArgs> | null
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      title: string
      description: string
      priority: $Enums.Priority
      status: $Enums.WorkOrderStatus
      department: string
      location: string | null
      equipment: string | null
      startDate: Date | null
      dueDate: Date | null
      completedDate: Date | null
      createdById: string
      assignedToId: string | null
      supervisorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workOrder"]>
    composites: {}
  }

  type WorkOrderGetPayload<S extends boolean | null | undefined | WorkOrderDefaultArgs> = $Result.GetResult<Prisma.$WorkOrderPayload, S>

  type WorkOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkOrderCountAggregateInputType | true
    }

  export interface WorkOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkOrder'], meta: { name: 'WorkOrder' } }
    /**
     * Find zero or one WorkOrder that matches the filter.
     * @param {WorkOrderFindUniqueArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkOrderFindUniqueArgs>(args: SelectSubset<T, WorkOrderFindUniqueArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkOrderFindUniqueOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkOrderFindFirstArgs>(args?: SelectSubset<T, WorkOrderFindFirstArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindFirstOrThrowArgs} args - Arguments to find a WorkOrder
     * @example
     * // Get one WorkOrder
     * const workOrder = await prisma.workOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkOrders
     * const workOrders = await prisma.workOrder.findMany()
     * 
     * // Get first 10 WorkOrders
     * const workOrders = await prisma.workOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workOrderWithIdOnly = await prisma.workOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkOrderFindManyArgs>(args?: SelectSubset<T, WorkOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkOrder.
     * @param {WorkOrderCreateArgs} args - Arguments to create a WorkOrder.
     * @example
     * // Create one WorkOrder
     * const WorkOrder = await prisma.workOrder.create({
     *   data: {
     *     // ... data to create a WorkOrder
     *   }
     * })
     * 
     */
    create<T extends WorkOrderCreateArgs>(args: SelectSubset<T, WorkOrderCreateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkOrders.
     * @param {WorkOrderCreateManyArgs} args - Arguments to create many WorkOrders.
     * @example
     * // Create many WorkOrders
     * const workOrder = await prisma.workOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkOrderCreateManyArgs>(args?: SelectSubset<T, WorkOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkOrder.
     * @param {WorkOrderDeleteArgs} args - Arguments to delete one WorkOrder.
     * @example
     * // Delete one WorkOrder
     * const WorkOrder = await prisma.workOrder.delete({
     *   where: {
     *     // ... filter to delete one WorkOrder
     *   }
     * })
     * 
     */
    delete<T extends WorkOrderDeleteArgs>(args: SelectSubset<T, WorkOrderDeleteArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkOrder.
     * @param {WorkOrderUpdateArgs} args - Arguments to update one WorkOrder.
     * @example
     * // Update one WorkOrder
     * const workOrder = await prisma.workOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkOrderUpdateArgs>(args: SelectSubset<T, WorkOrderUpdateArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkOrders.
     * @param {WorkOrderDeleteManyArgs} args - Arguments to filter WorkOrders to delete.
     * @example
     * // Delete a few WorkOrders
     * const { count } = await prisma.workOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkOrderDeleteManyArgs>(args?: SelectSubset<T, WorkOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkOrders
     * const workOrder = await prisma.workOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkOrderUpdateManyArgs>(args: SelectSubset<T, WorkOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkOrder.
     * @param {WorkOrderUpsertArgs} args - Arguments to update or create a WorkOrder.
     * @example
     * // Update or create a WorkOrder
     * const workOrder = await prisma.workOrder.upsert({
     *   create: {
     *     // ... data to create a WorkOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkOrder we want to update
     *   }
     * })
     */
    upsert<T extends WorkOrderUpsertArgs>(args: SelectSubset<T, WorkOrderUpsertArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkOrders that matches the filter.
     * @param {WorkOrderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const workOrder = await prisma.workOrder.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: WorkOrderFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WorkOrder.
     * @param {WorkOrderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const workOrder = await prisma.workOrder.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WorkOrderAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of WorkOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderCountArgs} args - Arguments to filter WorkOrders to count.
     * @example
     * // Count the number of WorkOrders
     * const count = await prisma.workOrder.count({
     *   where: {
     *     // ... the filter for the WorkOrders we want to count
     *   }
     * })
    **/
    count<T extends WorkOrderCountArgs>(
      args?: Subset<T, WorkOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkOrderAggregateArgs>(args: Subset<T, WorkOrderAggregateArgs>): Prisma.PrismaPromise<GetWorkOrderAggregateType<T>>

    /**
     * Group by WorkOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkOrderGroupByArgs} args - Group by arguments.
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
      T extends WorkOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkOrderGroupByArgs['orderBy'] }
        : { orderBy?: WorkOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkOrder model
   */
  readonly fields: WorkOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends WorkOrder$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrder$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    supervisedBy<T extends WorkOrder$supervisedByArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrder$supervisedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends WorkOrder$tasksArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrder$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends WorkOrder$commentsArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrder$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends WorkOrder$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrder$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkOrder model
   */
  interface WorkOrderFieldRefs {
    readonly id: FieldRef<"WorkOrder", 'String'>
    readonly orderNumber: FieldRef<"WorkOrder", 'String'>
    readonly title: FieldRef<"WorkOrder", 'String'>
    readonly description: FieldRef<"WorkOrder", 'String'>
    readonly priority: FieldRef<"WorkOrder", 'Priority'>
    readonly status: FieldRef<"WorkOrder", 'WorkOrderStatus'>
    readonly department: FieldRef<"WorkOrder", 'String'>
    readonly location: FieldRef<"WorkOrder", 'String'>
    readonly equipment: FieldRef<"WorkOrder", 'String'>
    readonly startDate: FieldRef<"WorkOrder", 'DateTime'>
    readonly dueDate: FieldRef<"WorkOrder", 'DateTime'>
    readonly completedDate: FieldRef<"WorkOrder", 'DateTime'>
    readonly createdById: FieldRef<"WorkOrder", 'String'>
    readonly assignedToId: FieldRef<"WorkOrder", 'String'>
    readonly supervisorId: FieldRef<"WorkOrder", 'String'>
    readonly createdAt: FieldRef<"WorkOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkOrder findUnique
   */
  export type WorkOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findUniqueOrThrow
   */
  export type WorkOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder findFirst
   */
  export type WorkOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findFirstOrThrow
   */
  export type WorkOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrder to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkOrders.
     */
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder findMany
   */
  export type WorkOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter, which WorkOrders to fetch.
     */
    where?: WorkOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkOrders to fetch.
     */
    orderBy?: WorkOrderOrderByWithRelationInput | WorkOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkOrders.
     */
    cursor?: WorkOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkOrders.
     */
    skip?: number
    distinct?: WorkOrderScalarFieldEnum | WorkOrderScalarFieldEnum[]
  }

  /**
   * WorkOrder create
   */
  export type WorkOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkOrder.
     */
    data: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
  }

  /**
   * WorkOrder createMany
   */
  export type WorkOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkOrders.
     */
    data: WorkOrderCreateManyInput | WorkOrderCreateManyInput[]
  }

  /**
   * WorkOrder update
   */
  export type WorkOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkOrder.
     */
    data: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
    /**
     * Choose, which WorkOrder to update.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder updateMany
   */
  export type WorkOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkOrders.
     */
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyInput>
    /**
     * Filter which WorkOrders to update
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to update.
     */
    limit?: number
  }

  /**
   * WorkOrder upsert
   */
  export type WorkOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkOrder to update in case it exists.
     */
    where: WorkOrderWhereUniqueInput
    /**
     * In case the WorkOrder found by the `where` argument doesn't exist, create a new WorkOrder with this data.
     */
    create: XOR<WorkOrderCreateInput, WorkOrderUncheckedCreateInput>
    /**
     * In case the WorkOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkOrderUpdateInput, WorkOrderUncheckedUpdateInput>
  }

  /**
   * WorkOrder delete
   */
  export type WorkOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
    /**
     * Filter which WorkOrder to delete.
     */
    where: WorkOrderWhereUniqueInput
  }

  /**
   * WorkOrder deleteMany
   */
  export type WorkOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkOrders to delete
     */
    where?: WorkOrderWhereInput
    /**
     * Limit how many WorkOrders to delete.
     */
    limit?: number
  }

  /**
   * WorkOrder findRaw
   */
  export type WorkOrderFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WorkOrder aggregateRaw
   */
  export type WorkOrderAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WorkOrder.assignedTo
   */
  export type WorkOrder$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * WorkOrder.supervisedBy
   */
  export type WorkOrder$supervisedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * WorkOrder.tasks
   */
  export type WorkOrder$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * WorkOrder.comments
   */
  export type WorkOrder$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * WorkOrder.attachments
   */
  export type WorkOrder$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * WorkOrder without action
   */
  export type WorkOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkOrder
     */
    select?: WorkOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkOrder
     */
    omit?: WorkOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkOrderInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    workOrderId: string | null
    description: string | null
    status: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    workOrderId: string | null
    description: string | null
    status: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    workOrderId: number
    description: number
    status: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    workOrderId?: true
    description?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    workOrderId?: true
    description?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    workOrderId?: true
    description?: true
    status?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    workOrderId: string
    description: string
    status: string
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderId?: boolean
    description?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workOrder?: boolean | WorkOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type TaskSelectScalar = {
    id?: boolean
    workOrderId?: boolean
    description?: boolean
    status?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workOrderId" | "description" | "status" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workOrder?: boolean | WorkOrderDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      workOrder: Prisma.$WorkOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workOrderId: string
      description: string
      status: string
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * @param {TaskFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const task = await prisma.task.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TaskFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Task.
     * @param {TaskAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const task = await prisma.task.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TaskAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workOrder<T extends WorkOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrderDefaultArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly workOrderId: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly completedAt: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task findRaw
   */
  export type TaskFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Task aggregateRaw
   */
  export type TaskAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    workOrderId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    workOrderId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    workOrderId: number
    content: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    workOrderId?: true
    content?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    workOrderId?: true
    content?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    workOrderId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    workOrderId: string
    content: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderId?: boolean
    content?: boolean
    createdAt?: boolean
    workOrder?: boolean | WorkOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    workOrderId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workOrderId" | "content" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workOrder?: boolean | WorkOrderDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      workOrder: Prisma.$WorkOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workOrderId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comment = await prisma.comment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comment.
     * @param {CommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comment = await prisma.comment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workOrder<T extends WorkOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrderDefaultArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly workOrderId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment findRaw
   */
  export type CommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment aggregateRaw
   */
  export type CommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    workOrderId: string | null
    filename: string | null
    path: string | null
    uploadedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    workOrderId: string | null
    filename: string | null
    path: string | null
    uploadedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    workOrderId: number
    filename: number
    path: number
    uploadedAt: number
    _all: number
  }


  export type AttachmentMinAggregateInputType = {
    id?: true
    workOrderId?: true
    filename?: true
    path?: true
    uploadedAt?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    workOrderId?: true
    filename?: true
    path?: true
    uploadedAt?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    workOrderId?: true
    filename?: true
    path?: true
    uploadedAt?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    workOrderId: string
    filename: string
    path: string
    uploadedAt: Date
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workOrderId?: boolean
    filename?: boolean
    path?: boolean
    uploadedAt?: boolean
    workOrder?: boolean | WorkOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>



  export type AttachmentSelectScalar = {
    id?: boolean
    workOrderId?: boolean
    filename?: boolean
    path?: boolean
    uploadedAt?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workOrderId" | "filename" | "path" | "uploadedAt", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workOrder?: boolean | WorkOrderDefaultArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      workOrder: Prisma.$WorkOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workOrderId: string
      filename: string
      path: string
      uploadedAt: Date
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * @param {AttachmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const attachment = await prisma.attachment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AttachmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Attachment.
     * @param {AttachmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const attachment = await prisma.attachment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AttachmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
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
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workOrder<T extends WorkOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkOrderDefaultArgs<ExtArgs>>): Prisma__WorkOrderClient<$Result.GetResult<Prisma.$WorkOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly workOrderId: FieldRef<"Attachment", 'String'>
    readonly filename: FieldRef<"Attachment", 'String'>
    readonly path: FieldRef<"Attachment", 'String'>
    readonly uploadedAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment findRaw
   */
  export type AttachmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Attachment aggregateRaw
   */
  export type AttachmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    department: 'department',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkOrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    title: 'title',
    description: 'description',
    priority: 'priority',
    status: 'status',
    department: 'department',
    location: 'location',
    equipment: 'equipment',
    startDate: 'startDate',
    dueDate: 'dueDate',
    completedDate: 'completedDate',
    createdById: 'createdById',
    assignedToId: 'assignedToId',
    supervisorId: 'supervisorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkOrderScalarFieldEnum = (typeof WorkOrderScalarFieldEnum)[keyof typeof WorkOrderScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    workOrderId: 'workOrderId',
    description: 'description',
    status: 'status',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    workOrderId: 'workOrderId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    workOrderId: 'workOrderId',
    filename: 'filename',
    path: 'path',
    uploadedAt: 'uploadedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Department'
   */
  export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>
    


  /**
   * Reference to a field of type 'Department[]'
   */
  export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'WorkOrderStatus'
   */
  export type EnumWorkOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkOrderStatus'>
    


  /**
   * Reference to a field of type 'WorkOrderStatus[]'
   */
  export type ListEnumWorkOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkOrderStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: EnumDepartmentNullableFilter<"User"> | $Enums.Department | null
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdOrders?: WorkOrderListRelationFilter
    assignedOrders?: WorkOrderListRelationFilter
    supervisedOrders?: WorkOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdOrders?: WorkOrderOrderByRelationAggregateInput
    assignedOrders?: WorkOrderOrderByRelationAggregateInput
    supervisedOrders?: WorkOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: EnumDepartmentNullableFilter<"User"> | $Enums.Department | null
    isActive?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdOrders?: WorkOrderListRelationFilter
    assignedOrders?: WorkOrderListRelationFilter
    supervisedOrders?: WorkOrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    department?: EnumDepartmentNullableWithAggregatesFilter<"User"> | $Enums.Department | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkOrderWhereInput = {
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    id?: StringFilter<"WorkOrder"> | string
    orderNumber?: StringFilter<"WorkOrder"> | string
    title?: StringFilter<"WorkOrder"> | string
    description?: StringFilter<"WorkOrder"> | string
    priority?: EnumPriorityFilter<"WorkOrder"> | $Enums.Priority
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    department?: StringFilter<"WorkOrder"> | string
    location?: StringNullableFilter<"WorkOrder"> | string | null
    equipment?: StringNullableFilter<"WorkOrder"> | string | null
    startDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    createdById?: StringFilter<"WorkOrder"> | string
    assignedToId?: StringNullableFilter<"WorkOrder"> | string | null
    supervisorId?: StringNullableFilter<"WorkOrder"> | string | null
    createdAt?: DateTimeFilter<"WorkOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkOrder"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    supervisedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }

  export type WorkOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    department?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedDate?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    supervisedBy?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
  }

  export type WorkOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: WorkOrderWhereInput | WorkOrderWhereInput[]
    OR?: WorkOrderWhereInput[]
    NOT?: WorkOrderWhereInput | WorkOrderWhereInput[]
    title?: StringFilter<"WorkOrder"> | string
    description?: StringFilter<"WorkOrder"> | string
    priority?: EnumPriorityFilter<"WorkOrder"> | $Enums.Priority
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    department?: StringFilter<"WorkOrder"> | string
    location?: StringNullableFilter<"WorkOrder"> | string | null
    equipment?: StringNullableFilter<"WorkOrder"> | string | null
    startDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    createdById?: StringFilter<"WorkOrder"> | string
    assignedToId?: StringNullableFilter<"WorkOrder"> | string | null
    supervisorId?: StringNullableFilter<"WorkOrder"> | string | null
    createdAt?: DateTimeFilter<"WorkOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkOrder"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    supervisedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
    attachments?: AttachmentListRelationFilter
  }, "id" | "orderNumber">

  export type WorkOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    department?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedDate?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkOrderCountOrderByAggregateInput
    _max?: WorkOrderMaxOrderByAggregateInput
    _min?: WorkOrderMinOrderByAggregateInput
  }

  export type WorkOrderScalarWhereWithAggregatesInput = {
    AND?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    OR?: WorkOrderScalarWhereWithAggregatesInput[]
    NOT?: WorkOrderScalarWhereWithAggregatesInput | WorkOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkOrder"> | string
    orderNumber?: StringWithAggregatesFilter<"WorkOrder"> | string
    title?: StringWithAggregatesFilter<"WorkOrder"> | string
    description?: StringWithAggregatesFilter<"WorkOrder"> | string
    priority?: EnumPriorityWithAggregatesFilter<"WorkOrder"> | $Enums.Priority
    status?: EnumWorkOrderStatusWithAggregatesFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    department?: StringWithAggregatesFilter<"WorkOrder"> | string
    location?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    equipment?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
    completedDate?: DateTimeNullableWithAggregatesFilter<"WorkOrder"> | Date | string | null
    createdById?: StringWithAggregatesFilter<"WorkOrder"> | string
    assignedToId?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    supervisorId?: StringNullableWithAggregatesFilter<"WorkOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkOrder"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    workOrderId?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    workOrder?: XOR<WorkOrderScalarRelationFilter, WorkOrderWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workOrder?: WorkOrderOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    workOrderId?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    workOrder?: XOR<WorkOrderScalarRelationFilter, WorkOrderWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    workOrderId?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    status?: StringWithAggregatesFilter<"Task"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    workOrderId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    workOrder?: XOR<WorkOrderScalarRelationFilter, WorkOrderWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    workOrder?: WorkOrderOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    workOrderId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    workOrder?: XOR<WorkOrderScalarRelationFilter, WorkOrderWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    workOrderId?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: StringFilter<"Attachment"> | string
    workOrderId?: StringFilter<"Attachment"> | string
    filename?: StringFilter<"Attachment"> | string
    path?: StringFilter<"Attachment"> | string
    uploadedAt?: DateTimeFilter<"Attachment"> | Date | string
    workOrder?: XOR<WorkOrderScalarRelationFilter, WorkOrderWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    workOrder?: WorkOrderOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    workOrderId?: StringFilter<"Attachment"> | string
    filename?: StringFilter<"Attachment"> | string
    path?: StringFilter<"Attachment"> | string
    uploadedAt?: DateTimeFilter<"Attachment"> | Date | string
    workOrder?: XOR<WorkOrderScalarRelationFilter, WorkOrderWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachment"> | string
    workOrderId?: StringWithAggregatesFilter<"Attachment"> | string
    filename?: StringWithAggregatesFilter<"Attachment"> | string
    path?: StringWithAggregatesFilter<"Attachment"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: WorkOrderCreateNestedManyWithoutCreatedByInput
    assignedOrders?: WorkOrderCreateNestedManyWithoutAssignedToInput
    supervisedOrders?: WorkOrderCreateNestedManyWithoutSupervisedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: WorkOrderUncheckedCreateNestedManyWithoutCreatedByInput
    assignedOrders?: WorkOrderUncheckedCreateNestedManyWithoutAssignedToInput
    supervisedOrders?: WorkOrderUncheckedCreateNestedManyWithoutSupervisedByInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: WorkOrderUpdateManyWithoutCreatedByNestedInput
    assignedOrders?: WorkOrderUpdateManyWithoutAssignedToNestedInput
    supervisedOrders?: WorkOrderUpdateManyWithoutSupervisedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: WorkOrderUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedOrders?: WorkOrderUncheckedUpdateManyWithoutAssignedToNestedInput
    supervisedOrders?: WorkOrderUncheckedUpdateManyWithoutSupervisedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderCreateInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    supervisedBy?: UserCreateNestedOneWithoutSupervisedOrdersInput
    tasks?: TaskCreateNestedManyWithoutWorkOrderInput
    comments?: CommentCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    assignedToId?: string | null
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUpdateInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    supervisedBy?: UserUpdateOneWithoutSupervisedOrdersNestedInput
    tasks?: TaskUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderCreateManyInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    assignedToId?: string | null
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkOrderUpdateManyMutationInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderUncheckedUpdateManyInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    description: string
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workOrder: WorkOrderCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    workOrderId: string
    description: string
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOrder?: WorkOrderUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    workOrderId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyInput = {
    id?: string
    workOrderId: string
    description: string
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    workOrderId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    workOrder: WorkOrderCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    workOrderId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOrder?: WorkOrderUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    workOrderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    workOrderId: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    workOrderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateInput = {
    id?: string
    filename: string
    path: string
    uploadedAt?: Date | string
    workOrder: WorkOrderCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    workOrderId: string
    filename: string
    path: string
    uploadedAt?: Date | string
  }

  export type AttachmentUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workOrder?: WorkOrderUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    workOrderId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentCreateManyInput = {
    id?: string
    workOrderId: string
    filename: string
    path: string
    uploadedAt?: Date | string
  }

  export type AttachmentUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    workOrderId?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumDepartmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDepartmentNullableFilter<$PrismaModel> | $Enums.Department | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type WorkOrderListRelationFilter = {
    every?: WorkOrderWhereInput
    some?: WorkOrderWhereInput
    none?: WorkOrderWhereInput
  }

  export type WorkOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumDepartmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDepartmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Department | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDepartmentNullableFilter<$PrismaModel>
    _max?: NestedEnumDepartmentNullableFilter<$PrismaModel>
    isSet?: boolean
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type EnumWorkOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusFilter<$PrismaModel> | $Enums.WorkOrderStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    department?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedDate?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    department?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedDate?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    department?: SortOrder
    location?: SortOrder
    equipment?: SortOrder
    startDate?: SortOrder
    dueDate?: SortOrder
    completedDate?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumWorkOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type WorkOrderScalarRelationFilter = {
    is?: WorkOrderWhereInput
    isNot?: WorkOrderWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    description?: SortOrder
    status?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    workOrderId?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
  }

  export type WorkOrderCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<WorkOrderCreateWithoutCreatedByInput, WorkOrderUncheckedCreateWithoutCreatedByInput> | WorkOrderCreateWithoutCreatedByInput[] | WorkOrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutCreatedByInput | WorkOrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: WorkOrderCreateManyCreatedByInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type WorkOrderCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<WorkOrderCreateWithoutAssignedToInput, WorkOrderUncheckedCreateWithoutAssignedToInput> | WorkOrderCreateWithoutAssignedToInput[] | WorkOrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssignedToInput | WorkOrderCreateOrConnectWithoutAssignedToInput[]
    createMany?: WorkOrderCreateManyAssignedToInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type WorkOrderCreateNestedManyWithoutSupervisedByInput = {
    create?: XOR<WorkOrderCreateWithoutSupervisedByInput, WorkOrderUncheckedCreateWithoutSupervisedByInput> | WorkOrderCreateWithoutSupervisedByInput[] | WorkOrderUncheckedCreateWithoutSupervisedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutSupervisedByInput | WorkOrderCreateOrConnectWithoutSupervisedByInput[]
    createMany?: WorkOrderCreateManySupervisedByInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type WorkOrderUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<WorkOrderCreateWithoutCreatedByInput, WorkOrderUncheckedCreateWithoutCreatedByInput> | WorkOrderCreateWithoutCreatedByInput[] | WorkOrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutCreatedByInput | WorkOrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: WorkOrderCreateManyCreatedByInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type WorkOrderUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<WorkOrderCreateWithoutAssignedToInput, WorkOrderUncheckedCreateWithoutAssignedToInput> | WorkOrderCreateWithoutAssignedToInput[] | WorkOrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssignedToInput | WorkOrderCreateOrConnectWithoutAssignedToInput[]
    createMany?: WorkOrderCreateManyAssignedToInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type WorkOrderUncheckedCreateNestedManyWithoutSupervisedByInput = {
    create?: XOR<WorkOrderCreateWithoutSupervisedByInput, WorkOrderUncheckedCreateWithoutSupervisedByInput> | WorkOrderCreateWithoutSupervisedByInput[] | WorkOrderUncheckedCreateWithoutSupervisedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutSupervisedByInput | WorkOrderCreateOrConnectWithoutSupervisedByInput[]
    createMany?: WorkOrderCreateManySupervisedByInputEnvelope
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableEnumDepartmentFieldUpdateOperationsInput = {
    set?: $Enums.Department | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkOrderUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<WorkOrderCreateWithoutCreatedByInput, WorkOrderUncheckedCreateWithoutCreatedByInput> | WorkOrderCreateWithoutCreatedByInput[] | WorkOrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutCreatedByInput | WorkOrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutCreatedByInput | WorkOrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: WorkOrderCreateManyCreatedByInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutCreatedByInput | WorkOrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutCreatedByInput | WorkOrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type WorkOrderUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<WorkOrderCreateWithoutAssignedToInput, WorkOrderUncheckedCreateWithoutAssignedToInput> | WorkOrderCreateWithoutAssignedToInput[] | WorkOrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssignedToInput | WorkOrderCreateOrConnectWithoutAssignedToInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutAssignedToInput | WorkOrderUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: WorkOrderCreateManyAssignedToInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutAssignedToInput | WorkOrderUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutAssignedToInput | WorkOrderUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type WorkOrderUpdateManyWithoutSupervisedByNestedInput = {
    create?: XOR<WorkOrderCreateWithoutSupervisedByInput, WorkOrderUncheckedCreateWithoutSupervisedByInput> | WorkOrderCreateWithoutSupervisedByInput[] | WorkOrderUncheckedCreateWithoutSupervisedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutSupervisedByInput | WorkOrderCreateOrConnectWithoutSupervisedByInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutSupervisedByInput | WorkOrderUpsertWithWhereUniqueWithoutSupervisedByInput[]
    createMany?: WorkOrderCreateManySupervisedByInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutSupervisedByInput | WorkOrderUpdateWithWhereUniqueWithoutSupervisedByInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutSupervisedByInput | WorkOrderUpdateManyWithWhereWithoutSupervisedByInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type WorkOrderUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<WorkOrderCreateWithoutCreatedByInput, WorkOrderUncheckedCreateWithoutCreatedByInput> | WorkOrderCreateWithoutCreatedByInput[] | WorkOrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutCreatedByInput | WorkOrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutCreatedByInput | WorkOrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: WorkOrderCreateManyCreatedByInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutCreatedByInput | WorkOrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutCreatedByInput | WorkOrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type WorkOrderUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<WorkOrderCreateWithoutAssignedToInput, WorkOrderUncheckedCreateWithoutAssignedToInput> | WorkOrderCreateWithoutAssignedToInput[] | WorkOrderUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAssignedToInput | WorkOrderCreateOrConnectWithoutAssignedToInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutAssignedToInput | WorkOrderUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: WorkOrderCreateManyAssignedToInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutAssignedToInput | WorkOrderUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutAssignedToInput | WorkOrderUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type WorkOrderUncheckedUpdateManyWithoutSupervisedByNestedInput = {
    create?: XOR<WorkOrderCreateWithoutSupervisedByInput, WorkOrderUncheckedCreateWithoutSupervisedByInput> | WorkOrderCreateWithoutSupervisedByInput[] | WorkOrderUncheckedCreateWithoutSupervisedByInput[]
    connectOrCreate?: WorkOrderCreateOrConnectWithoutSupervisedByInput | WorkOrderCreateOrConnectWithoutSupervisedByInput[]
    upsert?: WorkOrderUpsertWithWhereUniqueWithoutSupervisedByInput | WorkOrderUpsertWithWhereUniqueWithoutSupervisedByInput[]
    createMany?: WorkOrderCreateManySupervisedByInputEnvelope
    set?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    disconnect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    delete?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    connect?: WorkOrderWhereUniqueInput | WorkOrderWhereUniqueInput[]
    update?: WorkOrderUpdateWithWhereUniqueWithoutSupervisedByInput | WorkOrderUpdateWithWhereUniqueWithoutSupervisedByInput[]
    updateMany?: WorkOrderUpdateManyWithWhereWithoutSupervisedByInput | WorkOrderUpdateManyWithWhereWithoutSupervisedByInput[]
    deleteMany?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedOrdersInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedOrdersInput = {
    create?: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSupervisedOrdersInput = {
    create?: XOR<UserCreateWithoutSupervisedOrdersInput, UserUncheckedCreateWithoutSupervisedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupervisedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutWorkOrderInput = {
    create?: XOR<TaskCreateWithoutWorkOrderInput, TaskUncheckedCreateWithoutWorkOrderInput> | TaskCreateWithoutWorkOrderInput[] | TaskUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkOrderInput | TaskCreateOrConnectWithoutWorkOrderInput[]
    createMany?: TaskCreateManyWorkOrderInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutWorkOrderInput = {
    create?: XOR<CommentCreateWithoutWorkOrderInput, CommentUncheckedCreateWithoutWorkOrderInput> | CommentCreateWithoutWorkOrderInput[] | CommentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWorkOrderInput | CommentCreateOrConnectWithoutWorkOrderInput[]
    createMany?: CommentCreateManyWorkOrderInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutWorkOrderInput = {
    create?: XOR<AttachmentCreateWithoutWorkOrderInput, AttachmentUncheckedCreateWithoutWorkOrderInput> | AttachmentCreateWithoutWorkOrderInput[] | AttachmentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutWorkOrderInput | AttachmentCreateOrConnectWithoutWorkOrderInput[]
    createMany?: AttachmentCreateManyWorkOrderInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutWorkOrderInput = {
    create?: XOR<TaskCreateWithoutWorkOrderInput, TaskUncheckedCreateWithoutWorkOrderInput> | TaskCreateWithoutWorkOrderInput[] | TaskUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkOrderInput | TaskCreateOrConnectWithoutWorkOrderInput[]
    createMany?: TaskCreateManyWorkOrderInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutWorkOrderInput = {
    create?: XOR<CommentCreateWithoutWorkOrderInput, CommentUncheckedCreateWithoutWorkOrderInput> | CommentCreateWithoutWorkOrderInput[] | CommentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWorkOrderInput | CommentCreateOrConnectWithoutWorkOrderInput[]
    createMany?: CommentCreateManyWorkOrderInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutWorkOrderInput = {
    create?: XOR<AttachmentCreateWithoutWorkOrderInput, AttachmentUncheckedCreateWithoutWorkOrderInput> | AttachmentCreateWithoutWorkOrderInput[] | AttachmentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutWorkOrderInput | AttachmentCreateOrConnectWithoutWorkOrderInput[]
    createMany?: AttachmentCreateManyWorkOrderInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type EnumWorkOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.WorkOrderStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutCreatedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    upsert?: UserUpsertWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedOrdersInput, UserUpdateWithoutCreatedOrdersInput>, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type UserUpdateOneWithoutAssignedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedOrdersInput
    upsert?: UserUpsertWithoutAssignedOrdersInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedOrdersInput, UserUpdateWithoutAssignedOrdersInput>, UserUncheckedUpdateWithoutAssignedOrdersInput>
  }

  export type UserUpdateOneWithoutSupervisedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutSupervisedOrdersInput, UserUncheckedCreateWithoutSupervisedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupervisedOrdersInput
    upsert?: UserUpsertWithoutSupervisedOrdersInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupervisedOrdersInput, UserUpdateWithoutSupervisedOrdersInput>, UserUncheckedUpdateWithoutSupervisedOrdersInput>
  }

  export type TaskUpdateManyWithoutWorkOrderNestedInput = {
    create?: XOR<TaskCreateWithoutWorkOrderInput, TaskUncheckedCreateWithoutWorkOrderInput> | TaskCreateWithoutWorkOrderInput[] | TaskUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkOrderInput | TaskCreateOrConnectWithoutWorkOrderInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorkOrderInput | TaskUpsertWithWhereUniqueWithoutWorkOrderInput[]
    createMany?: TaskCreateManyWorkOrderInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorkOrderInput | TaskUpdateWithWhereUniqueWithoutWorkOrderInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorkOrderInput | TaskUpdateManyWithWhereWithoutWorkOrderInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutWorkOrderNestedInput = {
    create?: XOR<CommentCreateWithoutWorkOrderInput, CommentUncheckedCreateWithoutWorkOrderInput> | CommentCreateWithoutWorkOrderInput[] | CommentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWorkOrderInput | CommentCreateOrConnectWithoutWorkOrderInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutWorkOrderInput | CommentUpsertWithWhereUniqueWithoutWorkOrderInput[]
    createMany?: CommentCreateManyWorkOrderInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutWorkOrderInput | CommentUpdateWithWhereUniqueWithoutWorkOrderInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutWorkOrderInput | CommentUpdateManyWithWhereWithoutWorkOrderInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutWorkOrderNestedInput = {
    create?: XOR<AttachmentCreateWithoutWorkOrderInput, AttachmentUncheckedCreateWithoutWorkOrderInput> | AttachmentCreateWithoutWorkOrderInput[] | AttachmentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutWorkOrderInput | AttachmentCreateOrConnectWithoutWorkOrderInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutWorkOrderInput | AttachmentUpsertWithWhereUniqueWithoutWorkOrderInput[]
    createMany?: AttachmentCreateManyWorkOrderInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutWorkOrderInput | AttachmentUpdateWithWhereUniqueWithoutWorkOrderInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutWorkOrderInput | AttachmentUpdateManyWithWhereWithoutWorkOrderInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutWorkOrderNestedInput = {
    create?: XOR<TaskCreateWithoutWorkOrderInput, TaskUncheckedCreateWithoutWorkOrderInput> | TaskCreateWithoutWorkOrderInput[] | TaskUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkOrderInput | TaskCreateOrConnectWithoutWorkOrderInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorkOrderInput | TaskUpsertWithWhereUniqueWithoutWorkOrderInput[]
    createMany?: TaskCreateManyWorkOrderInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorkOrderInput | TaskUpdateWithWhereUniqueWithoutWorkOrderInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorkOrderInput | TaskUpdateManyWithWhereWithoutWorkOrderInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutWorkOrderNestedInput = {
    create?: XOR<CommentCreateWithoutWorkOrderInput, CommentUncheckedCreateWithoutWorkOrderInput> | CommentCreateWithoutWorkOrderInput[] | CommentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWorkOrderInput | CommentCreateOrConnectWithoutWorkOrderInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutWorkOrderInput | CommentUpsertWithWhereUniqueWithoutWorkOrderInput[]
    createMany?: CommentCreateManyWorkOrderInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutWorkOrderInput | CommentUpdateWithWhereUniqueWithoutWorkOrderInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutWorkOrderInput | CommentUpdateManyWithWhereWithoutWorkOrderInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutWorkOrderNestedInput = {
    create?: XOR<AttachmentCreateWithoutWorkOrderInput, AttachmentUncheckedCreateWithoutWorkOrderInput> | AttachmentCreateWithoutWorkOrderInput[] | AttachmentUncheckedCreateWithoutWorkOrderInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutWorkOrderInput | AttachmentCreateOrConnectWithoutWorkOrderInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutWorkOrderInput | AttachmentUpsertWithWhereUniqueWithoutWorkOrderInput[]
    createMany?: AttachmentCreateManyWorkOrderInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutWorkOrderInput | AttachmentUpdateWithWhereUniqueWithoutWorkOrderInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutWorkOrderInput | AttachmentUpdateManyWithWhereWithoutWorkOrderInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type WorkOrderCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkOrderCreateWithoutTasksInput, WorkOrderUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutTasksInput
    connect?: WorkOrderWhereUniqueInput
  }

  export type WorkOrderUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkOrderCreateWithoutTasksInput, WorkOrderUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutTasksInput
    upsert?: WorkOrderUpsertWithoutTasksInput
    connect?: WorkOrderWhereUniqueInput
    update?: XOR<XOR<WorkOrderUpdateToOneWithWhereWithoutTasksInput, WorkOrderUpdateWithoutTasksInput>, WorkOrderUncheckedUpdateWithoutTasksInput>
  }

  export type WorkOrderCreateNestedOneWithoutCommentsInput = {
    create?: XOR<WorkOrderCreateWithoutCommentsInput, WorkOrderUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutCommentsInput
    connect?: WorkOrderWhereUniqueInput
  }

  export type WorkOrderUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<WorkOrderCreateWithoutCommentsInput, WorkOrderUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutCommentsInput
    upsert?: WorkOrderUpsertWithoutCommentsInput
    connect?: WorkOrderWhereUniqueInput
    update?: XOR<XOR<WorkOrderUpdateToOneWithWhereWithoutCommentsInput, WorkOrderUpdateWithoutCommentsInput>, WorkOrderUncheckedUpdateWithoutCommentsInput>
  }

  export type WorkOrderCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<WorkOrderCreateWithoutAttachmentsInput, WorkOrderUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAttachmentsInput
    connect?: WorkOrderWhereUniqueInput
  }

  export type WorkOrderUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<WorkOrderCreateWithoutAttachmentsInput, WorkOrderUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: WorkOrderCreateOrConnectWithoutAttachmentsInput
    upsert?: WorkOrderUpsertWithoutAttachmentsInput
    connect?: WorkOrderWhereUniqueInput
    update?: XOR<XOR<WorkOrderUpdateToOneWithWhereWithoutAttachmentsInput, WorkOrderUpdateWithoutAttachmentsInput>, WorkOrderUncheckedUpdateWithoutAttachmentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumDepartmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDepartmentNullableFilter<$PrismaModel> | $Enums.Department | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | EnumDepartmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Department[] | ListEnumDepartmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDepartmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Department | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDepartmentNullableFilter<$PrismaModel>
    _max?: NestedEnumDepartmentNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumWorkOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusFilter<$PrismaModel> | $Enums.WorkOrderStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkOrderStatus | EnumWorkOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WorkOrderStatus[] | ListEnumWorkOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWorkOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.WorkOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumWorkOrderStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type WorkOrderCreateWithoutCreatedByInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    supervisedBy?: UserCreateNestedOneWithoutSupervisedOrdersInput
    tasks?: TaskCreateNestedManyWithoutWorkOrderInput
    comments?: CommentCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateWithoutCreatedByInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    assignedToId?: string | null
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderCreateOrConnectWithoutCreatedByInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutCreatedByInput, WorkOrderUncheckedCreateWithoutCreatedByInput>
  }

  export type WorkOrderCreateManyCreatedByInputEnvelope = {
    data: WorkOrderCreateManyCreatedByInput | WorkOrderCreateManyCreatedByInput[]
  }

  export type WorkOrderCreateWithoutAssignedToInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    supervisedBy?: UserCreateNestedOneWithoutSupervisedOrdersInput
    tasks?: TaskCreateNestedManyWithoutWorkOrderInput
    comments?: CommentCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateWithoutAssignedToInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderCreateOrConnectWithoutAssignedToInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutAssignedToInput, WorkOrderUncheckedCreateWithoutAssignedToInput>
  }

  export type WorkOrderCreateManyAssignedToInputEnvelope = {
    data: WorkOrderCreateManyAssignedToInput | WorkOrderCreateManyAssignedToInput[]
  }

  export type WorkOrderCreateWithoutSupervisedByInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    tasks?: TaskCreateNestedManyWithoutWorkOrderInput
    comments?: CommentCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateWithoutSupervisedByInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderCreateOrConnectWithoutSupervisedByInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutSupervisedByInput, WorkOrderUncheckedCreateWithoutSupervisedByInput>
  }

  export type WorkOrderCreateManySupervisedByInputEnvelope = {
    data: WorkOrderCreateManySupervisedByInput | WorkOrderCreateManySupervisedByInput[]
  }

  export type WorkOrderUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: WorkOrderWhereUniqueInput
    update: XOR<WorkOrderUpdateWithoutCreatedByInput, WorkOrderUncheckedUpdateWithoutCreatedByInput>
    create: XOR<WorkOrderCreateWithoutCreatedByInput, WorkOrderUncheckedCreateWithoutCreatedByInput>
  }

  export type WorkOrderUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: WorkOrderWhereUniqueInput
    data: XOR<WorkOrderUpdateWithoutCreatedByInput, WorkOrderUncheckedUpdateWithoutCreatedByInput>
  }

  export type WorkOrderUpdateManyWithWhereWithoutCreatedByInput = {
    where: WorkOrderScalarWhereInput
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type WorkOrderScalarWhereInput = {
    AND?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
    OR?: WorkOrderScalarWhereInput[]
    NOT?: WorkOrderScalarWhereInput | WorkOrderScalarWhereInput[]
    id?: StringFilter<"WorkOrder"> | string
    orderNumber?: StringFilter<"WorkOrder"> | string
    title?: StringFilter<"WorkOrder"> | string
    description?: StringFilter<"WorkOrder"> | string
    priority?: EnumPriorityFilter<"WorkOrder"> | $Enums.Priority
    status?: EnumWorkOrderStatusFilter<"WorkOrder"> | $Enums.WorkOrderStatus
    department?: StringFilter<"WorkOrder"> | string
    location?: StringNullableFilter<"WorkOrder"> | string | null
    equipment?: StringNullableFilter<"WorkOrder"> | string | null
    startDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    completedDate?: DateTimeNullableFilter<"WorkOrder"> | Date | string | null
    createdById?: StringFilter<"WorkOrder"> | string
    assignedToId?: StringNullableFilter<"WorkOrder"> | string | null
    supervisorId?: StringNullableFilter<"WorkOrder"> | string | null
    createdAt?: DateTimeFilter<"WorkOrder"> | Date | string
    updatedAt?: DateTimeFilter<"WorkOrder"> | Date | string
  }

  export type WorkOrderUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: WorkOrderWhereUniqueInput
    update: XOR<WorkOrderUpdateWithoutAssignedToInput, WorkOrderUncheckedUpdateWithoutAssignedToInput>
    create: XOR<WorkOrderCreateWithoutAssignedToInput, WorkOrderUncheckedCreateWithoutAssignedToInput>
  }

  export type WorkOrderUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: WorkOrderWhereUniqueInput
    data: XOR<WorkOrderUpdateWithoutAssignedToInput, WorkOrderUncheckedUpdateWithoutAssignedToInput>
  }

  export type WorkOrderUpdateManyWithWhereWithoutAssignedToInput = {
    where: WorkOrderScalarWhereInput
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type WorkOrderUpsertWithWhereUniqueWithoutSupervisedByInput = {
    where: WorkOrderWhereUniqueInput
    update: XOR<WorkOrderUpdateWithoutSupervisedByInput, WorkOrderUncheckedUpdateWithoutSupervisedByInput>
    create: XOR<WorkOrderCreateWithoutSupervisedByInput, WorkOrderUncheckedCreateWithoutSupervisedByInput>
  }

  export type WorkOrderUpdateWithWhereUniqueWithoutSupervisedByInput = {
    where: WorkOrderWhereUniqueInput
    data: XOR<WorkOrderUpdateWithoutSupervisedByInput, WorkOrderUncheckedUpdateWithoutSupervisedByInput>
  }

  export type WorkOrderUpdateManyWithWhereWithoutSupervisedByInput = {
    where: WorkOrderScalarWhereInput
    data: XOR<WorkOrderUpdateManyMutationInput, WorkOrderUncheckedUpdateManyWithoutSupervisedByInput>
  }

  export type UserCreateWithoutCreatedOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedOrders?: WorkOrderCreateNestedManyWithoutAssignedToInput
    supervisedOrders?: WorkOrderCreateNestedManyWithoutSupervisedByInput
  }

  export type UserUncheckedCreateWithoutCreatedOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedOrders?: WorkOrderUncheckedCreateNestedManyWithoutAssignedToInput
    supervisedOrders?: WorkOrderUncheckedCreateNestedManyWithoutSupervisedByInput
  }

  export type UserCreateOrConnectWithoutCreatedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
  }

  export type UserCreateWithoutAssignedOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: WorkOrderCreateNestedManyWithoutCreatedByInput
    supervisedOrders?: WorkOrderCreateNestedManyWithoutSupervisedByInput
  }

  export type UserUncheckedCreateWithoutAssignedOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: WorkOrderUncheckedCreateNestedManyWithoutCreatedByInput
    supervisedOrders?: WorkOrderUncheckedCreateNestedManyWithoutSupervisedByInput
  }

  export type UserCreateOrConnectWithoutAssignedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
  }

  export type UserCreateWithoutSupervisedOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: WorkOrderCreateNestedManyWithoutCreatedByInput
    assignedOrders?: WorkOrderCreateNestedManyWithoutAssignedToInput
  }

  export type UserUncheckedCreateWithoutSupervisedOrdersInput = {
    id?: string
    email: string
    name: string
    password: string
    role?: $Enums.Role
    department?: $Enums.Department | null
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: WorkOrderUncheckedCreateNestedManyWithoutCreatedByInput
    assignedOrders?: WorkOrderUncheckedCreateNestedManyWithoutAssignedToInput
  }

  export type UserCreateOrConnectWithoutSupervisedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupervisedOrdersInput, UserUncheckedCreateWithoutSupervisedOrdersInput>
  }

  export type TaskCreateWithoutWorkOrderInput = {
    id?: string
    description: string
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUncheckedCreateWithoutWorkOrderInput = {
    id?: string
    description: string
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskCreateOrConnectWithoutWorkOrderInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutWorkOrderInput, TaskUncheckedCreateWithoutWorkOrderInput>
  }

  export type TaskCreateManyWorkOrderInputEnvelope = {
    data: TaskCreateManyWorkOrderInput | TaskCreateManyWorkOrderInput[]
  }

  export type CommentCreateWithoutWorkOrderInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutWorkOrderInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutWorkOrderInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutWorkOrderInput, CommentUncheckedCreateWithoutWorkOrderInput>
  }

  export type CommentCreateManyWorkOrderInputEnvelope = {
    data: CommentCreateManyWorkOrderInput | CommentCreateManyWorkOrderInput[]
  }

  export type AttachmentCreateWithoutWorkOrderInput = {
    id?: string
    filename: string
    path: string
    uploadedAt?: Date | string
  }

  export type AttachmentUncheckedCreateWithoutWorkOrderInput = {
    id?: string
    filename: string
    path: string
    uploadedAt?: Date | string
  }

  export type AttachmentCreateOrConnectWithoutWorkOrderInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutWorkOrderInput, AttachmentUncheckedCreateWithoutWorkOrderInput>
  }

  export type AttachmentCreateManyWorkOrderInputEnvelope = {
    data: AttachmentCreateManyWorkOrderInput | AttachmentCreateManyWorkOrderInput[]
  }

  export type UserUpsertWithoutCreatedOrdersInput = {
    update: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type UserUpdateWithoutCreatedOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedOrders?: WorkOrderUpdateManyWithoutAssignedToNestedInput
    supervisedOrders?: WorkOrderUpdateManyWithoutSupervisedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedOrders?: WorkOrderUncheckedUpdateManyWithoutAssignedToNestedInput
    supervisedOrders?: WorkOrderUncheckedUpdateManyWithoutSupervisedByNestedInput
  }

  export type UserUpsertWithoutAssignedOrdersInput = {
    update: XOR<UserUpdateWithoutAssignedOrdersInput, UserUncheckedUpdateWithoutAssignedOrdersInput>
    create: XOR<UserCreateWithoutAssignedOrdersInput, UserUncheckedCreateWithoutAssignedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedOrdersInput, UserUncheckedUpdateWithoutAssignedOrdersInput>
  }

  export type UserUpdateWithoutAssignedOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: WorkOrderUpdateManyWithoutCreatedByNestedInput
    supervisedOrders?: WorkOrderUpdateManyWithoutSupervisedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: WorkOrderUncheckedUpdateManyWithoutCreatedByNestedInput
    supervisedOrders?: WorkOrderUncheckedUpdateManyWithoutSupervisedByNestedInput
  }

  export type UserUpsertWithoutSupervisedOrdersInput = {
    update: XOR<UserUpdateWithoutSupervisedOrdersInput, UserUncheckedUpdateWithoutSupervisedOrdersInput>
    create: XOR<UserCreateWithoutSupervisedOrdersInput, UserUncheckedCreateWithoutSupervisedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupervisedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupervisedOrdersInput, UserUncheckedUpdateWithoutSupervisedOrdersInput>
  }

  export type UserUpdateWithoutSupervisedOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: WorkOrderUpdateManyWithoutCreatedByNestedInput
    assignedOrders?: WorkOrderUpdateManyWithoutAssignedToNestedInput
  }

  export type UserUncheckedUpdateWithoutSupervisedOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: NullableEnumDepartmentFieldUpdateOperationsInput | $Enums.Department | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: WorkOrderUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedOrders?: WorkOrderUncheckedUpdateManyWithoutAssignedToNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutWorkOrderInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutWorkOrderInput, TaskUncheckedUpdateWithoutWorkOrderInput>
    create: XOR<TaskCreateWithoutWorkOrderInput, TaskUncheckedCreateWithoutWorkOrderInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutWorkOrderInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutWorkOrderInput, TaskUncheckedUpdateWithoutWorkOrderInput>
  }

  export type TaskUpdateManyWithWhereWithoutWorkOrderInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutWorkOrderInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    workOrderId?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    completedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutWorkOrderInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutWorkOrderInput, CommentUncheckedUpdateWithoutWorkOrderInput>
    create: XOR<CommentCreateWithoutWorkOrderInput, CommentUncheckedCreateWithoutWorkOrderInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutWorkOrderInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutWorkOrderInput, CommentUncheckedUpdateWithoutWorkOrderInput>
  }

  export type CommentUpdateManyWithWhereWithoutWorkOrderInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutWorkOrderInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    workOrderId?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type AttachmentUpsertWithWhereUniqueWithoutWorkOrderInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutWorkOrderInput, AttachmentUncheckedUpdateWithoutWorkOrderInput>
    create: XOR<AttachmentCreateWithoutWorkOrderInput, AttachmentUncheckedCreateWithoutWorkOrderInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutWorkOrderInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutWorkOrderInput, AttachmentUncheckedUpdateWithoutWorkOrderInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutWorkOrderInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutWorkOrderInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: StringFilter<"Attachment"> | string
    workOrderId?: StringFilter<"Attachment"> | string
    filename?: StringFilter<"Attachment"> | string
    path?: StringFilter<"Attachment"> | string
    uploadedAt?: DateTimeFilter<"Attachment"> | Date | string
  }

  export type WorkOrderCreateWithoutTasksInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    supervisedBy?: UserCreateNestedOneWithoutSupervisedOrdersInput
    comments?: CommentCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateWithoutTasksInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    assignedToId?: string | null
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderCreateOrConnectWithoutTasksInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutTasksInput, WorkOrderUncheckedCreateWithoutTasksInput>
  }

  export type WorkOrderUpsertWithoutTasksInput = {
    update: XOR<WorkOrderUpdateWithoutTasksInput, WorkOrderUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkOrderCreateWithoutTasksInput, WorkOrderUncheckedCreateWithoutTasksInput>
    where?: WorkOrderWhereInput
  }

  export type WorkOrderUpdateToOneWithWhereWithoutTasksInput = {
    where?: WorkOrderWhereInput
    data: XOR<WorkOrderUpdateWithoutTasksInput, WorkOrderUncheckedUpdateWithoutTasksInput>
  }

  export type WorkOrderUpdateWithoutTasksInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    supervisedBy?: UserUpdateOneWithoutSupervisedOrdersNestedInput
    comments?: CommentUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutTasksInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderCreateWithoutCommentsInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    supervisedBy?: UserCreateNestedOneWithoutSupervisedOrdersInput
    tasks?: TaskCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateWithoutCommentsInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    assignedToId?: string | null
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkOrderInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderCreateOrConnectWithoutCommentsInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutCommentsInput, WorkOrderUncheckedCreateWithoutCommentsInput>
  }

  export type WorkOrderUpsertWithoutCommentsInput = {
    update: XOR<WorkOrderUpdateWithoutCommentsInput, WorkOrderUncheckedUpdateWithoutCommentsInput>
    create: XOR<WorkOrderCreateWithoutCommentsInput, WorkOrderUncheckedCreateWithoutCommentsInput>
    where?: WorkOrderWhereInput
  }

  export type WorkOrderUpdateToOneWithWhereWithoutCommentsInput = {
    where?: WorkOrderWhereInput
    data: XOR<WorkOrderUpdateWithoutCommentsInput, WorkOrderUncheckedUpdateWithoutCommentsInput>
  }

  export type WorkOrderUpdateWithoutCommentsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    supervisedBy?: UserUpdateOneWithoutSupervisedOrdersNestedInput
    tasks?: TaskUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutCommentsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderCreateWithoutAttachmentsInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    assignedTo?: UserCreateNestedOneWithoutAssignedOrdersInput
    supervisedBy?: UserCreateNestedOneWithoutSupervisedOrdersInput
    tasks?: TaskCreateNestedManyWithoutWorkOrderInput
    comments?: CommentCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    assignedToId?: string | null
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkOrderInput
    comments?: CommentUncheckedCreateNestedManyWithoutWorkOrderInput
  }

  export type WorkOrderCreateOrConnectWithoutAttachmentsInput = {
    where: WorkOrderWhereUniqueInput
    create: XOR<WorkOrderCreateWithoutAttachmentsInput, WorkOrderUncheckedCreateWithoutAttachmentsInput>
  }

  export type WorkOrderUpsertWithoutAttachmentsInput = {
    update: XOR<WorkOrderUpdateWithoutAttachmentsInput, WorkOrderUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<WorkOrderCreateWithoutAttachmentsInput, WorkOrderUncheckedCreateWithoutAttachmentsInput>
    where?: WorkOrderWhereInput
  }

  export type WorkOrderUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: WorkOrderWhereInput
    data: XOR<WorkOrderUpdateWithoutAttachmentsInput, WorkOrderUncheckedUpdateWithoutAttachmentsInput>
  }

  export type WorkOrderUpdateWithoutAttachmentsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    supervisedBy?: UserUpdateOneWithoutSupervisedOrdersNestedInput
    tasks?: TaskUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutAttachmentsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderCreateManyCreatedByInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    assignedToId?: string | null
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkOrderCreateManyAssignedToInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    supervisorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkOrderCreateManySupervisedByInput = {
    id?: string
    orderNumber: string
    title: string
    description: string
    priority?: $Enums.Priority
    status?: $Enums.WorkOrderStatus
    department: string
    location?: string | null
    equipment?: string | null
    startDate?: Date | string | null
    dueDate?: Date | string | null
    completedDate?: Date | string | null
    createdById: string
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkOrderUpdateWithoutCreatedByInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    supervisedBy?: UserUpdateOneWithoutSupervisedOrdersNestedInput
    tasks?: TaskUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutCreatedByInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateManyWithoutCreatedByInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderUpdateWithoutAssignedToInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    supervisedBy?: UserUpdateOneWithoutSupervisedOrdersNestedInput
    tasks?: TaskUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutAssignedToInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateManyWithoutAssignedToInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    supervisorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkOrderUpdateWithoutSupervisedByInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedOrdersNestedInput
    tasks?: TaskUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateWithoutSupervisedByInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutWorkOrderNestedInput
    comments?: CommentUncheckedUpdateManyWithoutWorkOrderNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutWorkOrderNestedInput
  }

  export type WorkOrderUncheckedUpdateManyWithoutSupervisedByInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumWorkOrderStatusFieldUpdateOperationsInput | $Enums.WorkOrderStatus
    department?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyWorkOrderInput = {
    id?: string
    description: string
    status?: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyWorkOrderInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type AttachmentCreateManyWorkOrderInput = {
    id?: string
    filename: string
    path: string
    uploadedAt?: Date | string
  }

  export type TaskUpdateWithoutWorkOrderInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateWithoutWorkOrderInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyWithoutWorkOrderInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutWorkOrderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutWorkOrderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutWorkOrderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUpdateWithoutWorkOrderInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateWithoutWorkOrderInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentUncheckedUpdateManyWithoutWorkOrderInput = {
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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