declare module '@sap/cds' {










    export type __any_ = classes.any_
    
    export type __array = classes.array
    
    export type __aspect = classes.aspect
    
    export type __Association = classes.Association
    
    export type __Binary = classes.Binary
    
    export type __Boolean = classes.Boolean
    
    export type __Composition = classes.Composition
    
    export type __context_ = classes.context_
    
    export type __Date = classes.Date
    
    export type __date = classes.date
    
    export type __DateTime = classes.DateTime
    
    export type __Decimal = classes.Decimal
    
    export type __Double = classes.Double
    
    export type __entity = classes.entity
    
    export type __Float = classes.Float
    
    export type __Int16 = classes.Int16
    
    export type __Int32 = classes.Int32
    
    export type __Int64 = classes.Int64
    
    export type __Integer = classes.Integer
    
    export type __LargeBinary = classes.LargeBinary
    
    export type __LargeString = classes.LargeString
    
    export type __scalar = classes.scalar
    
    export type __service = classes.service_
    
    export type __String = classes.String
    
    export type __struct = classes.struct
    
    export type __Time = classes.Time
    
    export type __TimeStamp = classes.TimeStamp
    
    export type __type = classes.type
    
    export type __UInt8 = classes.UInt8
    
    export type __UUID = classes.UUID
    
    export type __Vector = classes.Vector
    
    class action extends any_<'action' | 'function'> {}
    
    export interface ActionEventHandler<P, R> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        (req: Omit<Request_2, 'data'> & { data: P }, next: Function): Promise<R> | R
    }
    
    interface And {
        and: TaggedTemplateQueryPart<this>
        & ((predicate: object) => this)
        & ((...expr: any[]) => this)
    }
    
    /**
     * Subclass representing unauthenticated users.
     */
    export class Anonymous extends User {
    
        constructor ()
    
        is (): boolean
    
    }
    
    const any: typeof any_;
    
    interface any_ extends csn.any_ {}
    
    class any_<K extends kinds = kinds> {
        private _: K // break covariance
        constructor (...aspects: any[])
    
        readonly name: string
        // parked, might be deprecated
        // is (kind: kinds | 'Association' | 'Composition'): boolean
    }
    
    interface any__2 {
        kind?: kinds
    }
    
    /**
     * The {@link https://expressjs.com/en/4x/api.html#app| express.js application} constructed by the server implementation.
     *
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-server#cds-app)
     */
    export const app: import('express').Application;
    
    export class ApplicationService extends Service {}
    
    export class array extends type<'type' | 'elements'> { }
    
    interface ArrayConstructable<T = any> {
        new(...args: any[]): T[]
    }
    
    class aspect<K extends kinds = 'aspect'> extends type<K> implements WithElements {
        elements: Definitions<type<'type'>>
    }
    
    /**
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#cds-association)
     */
    export interface Association extends Omit<csn.Association, 'type' | 'items'> {}
    
    export class Association extends type {
        _target: entity
    
        isAssociation: true
    
        is2one: boolean
    
        is2many: boolean
    
    }
    
    interface Association_2 extends type_2 {
        target: FQN
    
        /**
         * The specified cardinality. to-one = `{max:1}`, to-many = `{max:'*'}`
         */
        cardinality?: { src?: 1, min?: 1 | 0, max?: 1 | '*' }
    
        /**
         * The parsed on condition in case of unmanaged Associations
         */
        on?: predicate
    
        /**
         * The optionally specified keys in case of managed Associations
         */
        keys?: (ref & { as: string })[]
    }
    
    type Awaitable<T, I> = T & Promise<I>
    
    class Axios {
    
        get axios (): import('axios').AxiosInstance
        get: import('axios').AxiosInstance['get'] & TaggedTemplateRequest
    
        put: import('axios').AxiosInstance['put'] & TaggedTemplateRequest
    
        post: import('axios').AxiosInstance['post'] & TaggedTemplateRequest
    
        patch: import('axios').AxiosInstance['patch'] & TaggedTemplateRequest
    
        delete: import('axios').AxiosInstance['delete'] & TaggedTemplateRequest
    
        options: import('axios').AxiosInstance['options'] & TaggedTemplateRequest
    
        get GET (): Axios['get']
    
        get PUT (): Axios['put']
    
        get POST (): Axios['post']
    
        get PATCH (): Axios['patch']
    
        get DELETE (): Axios['delete']
    
        get OPTIONS (): Axios['options']
    
    }
    
    class Binary extends string { }
    
    const boolean: typeof boolean_;
    
    class boolean_ extends scalar { }
    
    class Boolean_2 extends boolean { }
    
    export const builtin: {
    
        /**
         * @see {@link models.linked.classes}
         */
        classes: typeof models.linked.classes,
        types: Record<string, object>, // FIXME: value should be any class part of linked.classes
    };
    
    interface ByKey {
        byKey (primaryKey?: PK): this
    }
    
    export type CDL = string
    
    namespace cds {
        export {
            default_2 as default,
            log,
            debug,
            test,
            ql,
            QLExtensions,
            csn,
            delete_ as delete,
            version,
            home,
            root,
            cli,
            requires,
            extend,
            lazify,
            lazified,
            entity,
            event,
            type,
            array,
            struct,
            Association,
            Composition,
            builtin,
            on,
            once,
            exit,
            _cds,
            cds_services,
            connect,
            server,
            serve,
            services,
            service,
            cds_serve_fluent,
            cds_connect_options,
            Middlewares,
            middlewares,
            app,
            env,
            _TODO,
            get,
            load,
            resolve,
            minify,
            reflect,
            _flavor,
            _odata_options,
            _options,
            JSON_2 as JSON,
            YAML,
            CDL,
            SQL,
            XML,
            EDM,
            EDMX,
            filename,
            model,
            parse,
            linked,
            __type,
            __aspect,
            __any_,
            __scalar,
            __Boolean,
            __UUID,
            __String,
            __LargeString,
            __Binary,
            __LargeBinary,
            __Vector,
            __Integer,
            __UInt8,
            __Int16,
            __Int32,
            __Int64,
            __Float,
            __Double,
            __Decimal,
            __date,
            __Date,
            __Time,
            __DateTime,
            __TimeStamp,
            __array,
            __struct,
            __context_,
            __service,
            __entity,
            __Association,
            __Composition,
            compile,
            spawn,
            Key,
            QueryAPI,
            Service,
            ApplicationService,
            MessagingService,
            RemoteService,
            DatabaseService,
            Transaction,
            ResultSet,
            ServiceImpl,
            EventHandler,
            OnEventHandler,
            OnErrorHandler,
            Partial_2 as Partial,
            OneOrMany,
            CdsFunction,
            CdsFunctions,
            HandlerFunction,
            CRUDEventHandler,
            ActionEventHandler,
            ResultsHandler,
            SpawnEvents,
            SpawnEventEmitter,
            types,
            SpawnOptions,
            context,
            tx,
            entities,
            run,
            foreach,
            stream,
            read,
            create,
            insert,
            update,
            transaction,
            db,
            outboxed,
            unboxed,
            EventContext,
            Event_2 as Event,
            Request_2 as Request,
            User,
            Anonymous,
            Privileged,
            utils,
            Query,
            SELECT_2 as SELECT,
            INSERT_2 as INSERT,
            UPSERT_2 as UPSERT,
            UPDATE_2 as UPDATE,
            DELETE_2 as DELETE,
            CREATE_2 as CREATE,
            DROP_2 as DROP,
            primitive,
            data,
            name,
            source,
            column_expr,
            predicate,
            ordering_term,
            expr,
            ref,
            _segment,
            _named,
            val,
            xpr,
            _xpr,
            operator,
            function_call,
            enum_literal,
            expr_literal
        }
    }
    
    export type _cds = typeof cds
    
    type _cds_2 = typeof cds
    
    export interface cds_connect_options {
        impl?: string
        service?: string
        kind?: string
        model?: string | CSN
        credentials?: object
    }
    
    export interface cds_serve_fluent {
        from (model: string | CSN): cds_serve_fluent
        to (protocol: string): cds_serve_fluent
        at (path: string): cds_serve_fluent
        in (app: import('express').Application): cds_serve_fluent
        with (impl: ServiceImpl | string): cds_serve_fluent
        // (req,res) : void
    }
    
    export interface cds_services {
        [name: string]: Service
    }
    
    /**
     * @beta helper
     */
    export type CdsFunction = {
        (...args: any[]): any,
        __parameters: object,
        __returns: any,
    }
    
    /**
     * @beta helper
     */
    export type CdsFunctions<T> = Pick<T, { [K in keyof T]: T[K] extends CdsFunction ? K : never }[keyof T]>
    
    namespace classes {
        export {
            mixin,
            Protocol,
            Column,
            Definitions,
            WithElements,
            any_,
            any,
            aspect,
            type,
            scalar,
            boolean,
            Boolean_2 as Boolean,
            string,
            UUID,
            String_2 as String,
            LargeString,
            Binary,
            LargeBinary,
            Vector,
            number,
            Integer,
            UInt8,
            Int16,
            Int32,
            Int64,
            Float,
            Double,
            Decimal,
            date,
            Date_2 as Date,
            Time,
            DateTime,
            TimeStamp,
            array,
            struct,
            context_,
            service_,
            action,
            event,
            entity,
            Association,
            Composition,
            ManagedAssociation,
            MixedIn
        }
    }
    
    /**
     * The parsed effective `cds` CLI command and arguments.
     * May be undefined if not started from the `cds` CLI.
     * @see https://cap.cloud.sap/docs/node.js/cds-facade#cds-cli
     */
    export const cli: {
        /** Basic command like `serve` */ command?: CliCommands,
        /** Positional arguments */       argv?: string[],
        /** Named arguments */            options?: Record<string, any>,
    } | undefined;
    
    type CliCommands = 'add' | 'build' | 'compile' | 'deploy' | 'import' | 'init' | 'serve' | (string & {})
    
    type Column = { ref: [string], as?: string }
    
    export type column_expr = UnionToIntersection<expr> & { as?: name, cast?: any, expand?: column_expr[], inline?: column_expr[] }
    
    interface Columns<T, This = undefined> {
        columns:
        ((...col: KeyOfSingular<T>[]) => This extends undefined ? this : This)
        & ((col: KeyOfSingular<T>[]) => This extends undefined ? this : This)
        & ((...col: (string | column_expr)[]) => This extends undefined ? this : This)
        & ((col: (string | column_expr)[]) => This extends undefined ? this : This)
        & TaggedTemplateQueryPart<This extends undefined ? this : This>
    }
    
    type ColumnValue = Primitive | Readonly<Primitive[]> | SELECT<any>
    
    /**
     * Provides a set of methods to parse a given model, query or expression.
     * You can also use `cds.compile(csn).to('<output>')` as a fluent variant.
     */
    export const compile: {
    
        /** Shortcut for `cds.compile.to.csn()` */
        cdl (model: CDL, o?: _options): csn.CSN,
    
        for: {
            odata (model: csn.CSN, o?: _options): csn.CSN,
            sql (model: csn.CSN, o?: _options): csn.CSN,
            nodejs (model: csn.CSN, o?: _options): linked.LinkedCSN,
        },
        to: {
            parsed: {
                csn (files: filename[], o?: _options): Promise<csn.CSN>,
                csn (model: CDL, o?: _options): csn.CSN,
            },
            xtended: {
                csn (files: filename[], o?: _options): Promise<csn.CSN>,
                csn (model: CDL, o?: _options): csn.CSN,
            },
            inferred: {
                csn (files: filename[], o?: _options): Promise<csn.CSN>,
                csn (model: CDL, o?: _options): csn.CSN,
            },
            csn (files: filename[], o?: _options): Promise<csn.CSN>,
            csn (model: CDL, o?: _options): csn.CSN,
            yml (model: csn.CSN, o?: _options): YAML,
            yaml (model: csn.CSN, o?: _options): YAML,
            json (model: csn.CSN, o?: _options): JSON_2,
            sql (model: csn.CSN, o?: _options): SQL[],
            cdl (model: csn.CSN, o?: _options): CDL | Iterable<[CDL, { file: filename }]>,
            edm (model: csn.CSN, o?: _options | _odata_options): EDM | string,
            edmx (model: csn.CSN, o?: _options | _odata_options): EDMX | Iterable<[EDMX, { file: filename }]>,
            hdbcds (model: csn.CSN, o?: _options): SQL | Iterable<[SQL, { file: filename }]>,
            hdbtable (model: csn.CSN, o?: _options): SQL | Iterable<[SQL, { file: filename }]>,
        },
    
        /** Fluent API variant */
        (model: csn.CSN | CDL): {
            for: {
                odata (o?: _options): csn.CSN,
                sql (o?: _options): csn.CSN,
            },
            to: {
                parsed: { csn (o?: _options): csn.CSN },
                xtended: { csn (o?: _options): csn.CSN },
                inferred: { csn (o?: _options): csn.CSN },
                csn (o?: _options): csn.CSN,
                yml (o?: _options): YAML,
                yaml (o?: _options): YAML,
                json (o?: _options): JSON_2,
                sql (o?: _options): SQL[],
                cdl (o?: _options): CDL | Iterable<[CDL, { file: filename }]>,
                edm (o?: _options | _odata_options): EDM | string,
                edmx (o?: _options | _odata_options): EDMX | Iterable<[EDMX, { file: filename }]>,
                hdbcds (o?: _options): SQL | Iterable<[SQL, { file: filename }]>,
                hdbtable (o?: _options): SQL | Iterable<[SQL, { file: filename }]>,
            },
        },
    
        /** Async fluent variant reading from files */
        (files: filename[]): {
            for: {
                odata (o?: _options): Promise<csn.CSN>,
                sql (o?: _options): Promise<csn.CSN>,
            },
            to: {
                parsed: { csn (o?: _options): Promise <csn.CSN> },
                xtended: { csn (o?: _options): Promise <csn.CSN> },
                inferred: { csn (o?: _options): Promise <csn.CSN> },
                csn (o?: _options): Promise <csn.CSN>,
                yml (o?: _options): Promise <YAML>,
                yaml (o?: _options): Promise <YAML>,
                json (o?: _options): Promise <JSON_2>,
                sql (o?: _options): Promise <SQL[]>,
                cdl (o?: _options): Promise <CDL | Iterable<[CDL, { file: filename }]>>,
                edm (o?: _options | _odata_options): Promise <EDM | string>,
                edmx (o?: _options | _odata_options): Promise <EDMX | Iterable<[EDMX, { file: filename }]>>,
                hdbcds (o?: _options): Promise <SQL | Iterable<[SQL, { file: filename }]>>,
                hdbtable (o?: _options): Promise <SQL | Iterable<[SQL, { file: filename }]>>,
            },
        },
    };
    
    export class Composition extends Association {
        isComposition: true
    }
    
    export const connect: {
    
        /**
                  * Connects to a specific datasource.
                  * @example await cds.connect.to ('service')
                  * @see [capire](https://cap.cloud.sap/docs/node.js/cds-connect#cds-connect-to)
                  */
        to(datasource: string, options?: cds_connect_options): Promise<Service>,
    
        /**
              * Shortcut for 'db' as the primary database returning `cds.DatabaseService`
              * @example await cds.connect.to ('db')
             */
        to(datasource: 'db', options?: cds_connect_options): Promise<cds.DatabaseService>,
    
        /**
              * Connects to a specific datasource via a Service subclass
              * @example await cds.connect.to (ServiceClass)
              * @see [capire](https://cap.cloud.sap/docs/node.js/cds-connect#cds-connect-to)
              */
        to<S extends Service>(datasource: {new(): S}, options?: cds_connect_options): Promise<S>,
    
        /**
              * Connects to a specific datasource via a Service class from cds-typer
              * @example
              *   import ServiceClass from '#cds-models/SomeService'
              *   await cds.connect.to (ServiceClass)
              * @see [capire](https://cap.cloud.sap/docs/node.js/cds-connect#cds-connect-to)
              */
        to<S>(datasource: S, options?: cds_connect_options): Promise<cds.CdsFunctions<S> & Service>,
    
        /**
                  * Connects to a specific datasource via options.
                  * @example cds.connect.to ({ kind:..., impl:... })
                  * @see [capire](https://cap.cloud.sap/docs/node.js/cds-connect#cds-connect-to)
                  */
        to(options: cds_connect_options): Promise<Service>,
    
        /**
                  * Connects the primary datasource.
                  * @see [capire](https://cap.cloud.sap/docs/node.js/cds-connect)
                  */
        // API extractor cannot handle the direct usages of the cds namespace in typeof cds, so add an indirection.
        (options?: string | cds_connect_options): Promise<_cds>, // > cds.connect(<options>)
    };
    
    interface Constructable<T = any> {
        new(...args: any[]): T
    }
    
    class ConstructedQuery<T> {
        // branded type to break covariance for the subclasses
        // that don't make explicit use of the generic. So `UPDATE<Books> !<: UPDATE<number>`
        private _: T
        then (_resolved: (x: any) => any, _rejected: (e: Error) => any): any
    
    }
    
    /**
     * @see [docs](https://cap.cloud.sap/docs/node.js/cds-tx#event-contexts
     */
    export let context: EventContext | undefined;
    
    interface context_ extends csn.context {}
    
    class context_ extends any_ { }
    
    interface context_2 extends any__2 { }
    
    namespace CQN {
        export {
            Query,
            SELECT_2 as SELECT,
            INSERT_2 as INSERT,
            UPSERT_2 as UPSERT,
            UPDATE_2 as UPDATE,
            DELETE_2 as DELETE,
            CREATE_2 as CREATE,
            DROP_2 as DROP,
            primitive,
            data,
            name,
            source,
            column_expr,
            predicate,
            ordering_term,
            expr,
            ref,
            _segment,
            _named,
            val,
            xpr,
            _xpr,
            operator,
            function_call,
            enum_literal,
            expr_literal
        }
    }
    
    export const create: Service['create'];
    
    type CREATE_2 = { CREATE: {
            entity: entity_2 | name,
            as: SELECT_2,
        }, }
    export { CREATE_2 as CREATE }
    
    class CREATE_3<T> extends ConstructedQuery<T> {
        private constructor();
    
        static entity (entity: EntityDescription): CREATE_3<EntityDescription>
    
        CREATE: CQN.CREATE['CREATE']
    
    }
    
    export namespace CRUDEventHandler {
        export type Before<P, R = P | void | Error> = (req: Request_2<P>) => Promise<R> | R
        export type On<P, R = P | void | Error> = (req: Request_2<P>, next: (...args: any[]) => Promise<R> | R) => Promise<R> | R
        export type After<P, R = P | void | Error> = (data: undefined | P, req: Request_2<P>) => Promise<R> | R
    }
    
    /**
     * A parsed CDS model in CSN object notation.
     */
    interface CSN {
    
        /**
         * The assigned namespace. If parsed from multiple sources,
         * this is the topmost model's namespace, if any, not the
         * ones of imported models.
         */
        namespace?: string
    
        /**
         * The list of usings in this parsed model. Not available after
         * imports have been resolved into a merged model.
         */
        requires?: string[]
    
        /**
         * All definitions in the model including those from imported models.
         */
        definitions?: Record<FQN, Definition>
    
        /**
         * All extensions in the model including those from imported models.
         * Not available after extensions have been applied.
         */
        extensions?: Extension[]
    
        /**
         * The names of the files from which this model has been loaded.
         */
        $sources?: string[]
    }
    
    namespace csn {
        export {
            CSN,
            FQN,
            Definition,
            Extension,
            Element,
            kinds,
            any__2 as any_,
            context_2 as context,
            service_2 as service,
            type_2 as type,
            struct_2 as struct,
            entity_2 as entity,
            EntityElements,
            Association_2 as Association
        }
    }
    export { csn }
    
    /** @private */
    export type data = Record<string, any>
    
    export class DatabaseService extends Service {
        deploy (model?: csn.CSN | string): Promise<csn.CSN>
        begin (): Promise<void>
        commit (): Promise<void>
        rollback (): Promise<void>
    }
    
    class DataUtil {
    
        delete (db?: Service): Promise<void>
    
        reset (db?: Service): Promise<void>
    
        /**
         * @deprecated if needed, call `reset()`, considering test performance
         */
        autoReset (enabled: boolean): this
    
    }
    
    class date extends scalar { }
    
    class Date_2 extends date { }
    
    class DateTime extends date { }
    
    export const db: DatabaseService;
    
    /**
     * Shortcut to `cds.log(...).debug`, returning `undefined` if `cds.log(...)._debug` is `false`.
     * Use like this:
     * @example
     * ```js
     *   const dbg = cds.debug('foo')
     *   ...
     *   dbg && dbg('message')
     * ```
     *
     * @param name - logger name
     */
    export function debug (name: string): undefined | Log
    
    class Decimal extends Float { 
        precision?: number
        scale?: number
    }
    
    export namespace default_2 {
        export {
            log,
            debug,
            test,
            ql,
            QLExtensions,
            csn,
            delete_ as delete,
            version,
            home,
            root,
            cli,
            requires,
            extend,
            lazify,
            lazified,
            entity,
            event,
            type,
            array,
            struct,
            Association,
            Composition,
            builtin,
            on,
            once,
            exit,
            _cds,
            cds_services,
            connect,
            server,
            serve,
            services,
            service,
            cds_serve_fluent,
            cds_connect_options,
            Middlewares,
            middlewares,
            app,
            env,
            _TODO,
            get,
            load,
            resolve,
            minify,
            reflect,
            _flavor,
            _odata_options,
            _options,
            JSON_2 as JSON,
            YAML,
            CDL,
            SQL,
            XML,
            EDM,
            EDMX,
            filename,
            model,
            parse,
            linked,
            __type,
            __aspect,
            __any_,
            __scalar,
            __Boolean,
            __UUID,
            __String,
            __LargeString,
            __Binary,
            __LargeBinary,
            __Vector,
            __Integer,
            __UInt8,
            __Int16,
            __Int32,
            __Int64,
            __Float,
            __Double,
            __Decimal,
            __date,
            __Date,
            __Time,
            __DateTime,
            __TimeStamp,
            __array,
            __struct,
            __context_,
            __service,
            __entity,
            __Association,
            __Composition,
            compile,
            spawn,
            Key,
            QueryAPI,
            Service,
            ApplicationService,
            MessagingService,
            RemoteService,
            DatabaseService,
            Transaction,
            ResultSet,
            ServiceImpl,
            EventHandler,
            OnEventHandler,
            OnErrorHandler,
            Partial_2 as Partial,
            OneOrMany,
            CdsFunction,
            CdsFunctions,
            HandlerFunction,
            CRUDEventHandler,
            ActionEventHandler,
            ResultsHandler,
            SpawnEvents,
            SpawnEventEmitter,
            types,
            SpawnOptions,
            context,
            tx,
            entities,
            run,
            foreach,
            stream,
            read,
            create,
            insert,
            update,
            transaction,
            db,
            outboxed,
            unboxed,
            EventContext,
            Event_2 as Event,
            Request_2 as Request,
            User,
            Anonymous,
            Privileged,
            utils,
            Query,
            SELECT_2 as SELECT,
            INSERT_2 as INSERT,
            UPSERT_2 as UPSERT,
            UPDATE_2 as UPDATE,
            DELETE_2 as DELETE,
            CREATE_2 as CREATE,
            DROP_2 as DROP,
            primitive,
            data,
            name,
            source,
            column_expr,
            predicate,
            ordering_term,
            expr,
            ref,
            _segment,
            _named,
            val,
            xpr,
            _xpr,
            operator,
            function_call,
            enum_literal,
            expr_literal
        }
    }
    
    /**
     * Definitions are the central elements of a CDS model.
     */
    type Definition = context_2 & service_2 & type_2 & struct_2 & entity_2 & Association_2
    
    type Definition_2 = any_
    
    /**
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#iterable)
     */
    type Definitions<T extends any_ = any_> = IterableMap<T>
    
    const delete_: Service['delete'];
    export { delete_ as delete };
    
    type DELETE_2 = { DELETE: {
            from: ref | name,
            where?: predicate,
        }, }
    export { DELETE_2 as DELETE }
    
    interface DELETE_3<T> extends Where<T>, And, ByKey {}
    
    class DELETE_3<T> extends ConstructedQuery<T> {
        private constructor();
    
        static from:
        TaggedTemplateQueryPart<Awaitable<SELECT_3<unknown>, InstanceType<StaticAny>>>
        & (<T>(entity: EntityDescription | ArrayConstructable, primaryKey?: PK) => DELETE_3<T>)
        & ((subject: ref) => DELETE_3<_TODO_2>)
    
        DELETE: CQN.DELETE['DELETE']
    
    }
    
    class Double extends Float { }
    
    type DROP_2 = { DROP: {
            entity: name,
            table: ref,
            view: ref,
        }, }
    export { DROP_2 as DROP }
    
    class DROP_3<T> extends ConstructedQuery<T> {
        private constructor();
    
        static entity (entity: EntityDescription): DROP_3<EntityDescription>
    
        DROP: CQN.DROP['DROP']
    
    }
    
    export type EDM = { $version: string }
    
    export type EDMX = XML
    
    type Element = type_2 & struct_2 & Association_2
    
    export const entities: Service['entities'];
    
    /**
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#cds-entity)
     */
    export interface entity extends Omit<csn.entity, 'elements' | 'items' | 'keys' | 'drafts'> {}
    
    export class entity extends struct<'entity'> {
        is_entity: true
    
        keys: Definitions<type>
    
        associations: Definitions<Association>
    
        compositions: Definitions<Composition>
    
        actions: Definitions<action>
    
        texts?: entity
    
        drafts?: entity
    }
    
    interface entity_2 extends Omit<struct_2, 'elements'> {
    
        /**
         * Entities with a query signify a view
         */
        query?: SELECT_2
    
        /**
         * Elements of entities may have additional qualifiers
         */
        elements: EntityElements
        // REVISIT: following should move to LinkedCSN
        keys: { [name: string]: Definition }
        drafts?: entity_2
    }
    
    type EntityDescription = entity | Definition | string
    
    type EntityElements = {
        [name: string]: Element & {
            key?: boolean,
            virtual?: boolean,
            unique?: boolean,
            notNull?: boolean,
            precision?: number,
            scale?: number,
            length?: number,
        },
    }
    
    type Entries<T = any> = {[key:string]: T} | {[key:string]: T}
    
    export type enum_literal = { '#': string }
    
    /**
     * Access to the configuration for Node.js runtime and tools.
     * The object is the effective result of configuration merged from various sources,
     * filtered through the currently active profiles, thus highly dependent on the current working
     * directory and process environment.
     */
    export const env: {
        build: _TODO,
        hana: _TODO,
        i18n: {
            languages: string[],
            default_language: string,
            folders: string[],
            [key: string]: any,
        },
        profiles: string[],
        log: {
            user: boolean,
            levels: Record<string, Lowercase<keyof typeof levels>>,
            als_custom_fields: Record<string, number>,
            cls_custom_fields: string[],
        },
        requires: env.Requires,
        folders: {
            app: string,
            db: string,
            srv: string,
            fts: string,
            [key: string]: string, // to allow additional values
        },
        odata: _TODO,
        query: _TODO,
        sql: _TODO,
    } & { [key: string]: any };
    
    export namespace env {
    
        export interface MockUser {
            tenant?: string
            roles?: string[]
            features?: string[]
        }
    
        export interface MockUsers {
            alice: MockUser
            bob: MockUser
            carol: MockUser
            dave: MockUser
            erin: MockUser
            fred: MockUser
            [key: string]: MockUser | undefined
        }
    
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        export type Requires = {
            auth: {
                kind: 'dummy' | 'mocked' | 'basic' | 'xsuaa' | 'ias' | string,
                impl: string,
                users?: MockUsers,
                tenants?: {
                    [key: string]: {
                        features?: string[],
                    },
                },
                credentials?: Credentials,
                binding?: Binding,
                [key: string]: any,
            },
            db: {
                kind: 'hana' | 'sqlite' | 'sql' | string,
                binding?: Binding,
                [key: string]: any,
            },
            multitenancy?: boolean | { kind: string, jobs: {
                    clusterSize: number,
                    workerSize: number,
                    t0: string,
                    [key: string]: any,
                },},
            toggles?: boolean,
            extensibility?: boolean | {
                model: string[],
                tenantCheckInterval: number,
                [key: string]: any,
            },
            messaging?: {
                kind: 'file-based-messaging' | 'redis-messaging' | 'local-messaging' | 'enterprise-messaging' | 'enterprise-messaging-shared' | string,
                format: 'cloudevents' | string,
                [key: string]: any,
            },
            'cds.xt.SaasProvisioningService'?: {
                model: string,
                kind: string,
                alwaysUpgradeModel?: boolean,
                [key: string]: any,
            },
            'cds.xt.SmsProvisioningService'?: {
                model: string,
                kind: string,
                [key: string]: any,
            },
            'cds.xt.ExtensibilityService'?: {
                model: string,
                kind?: string,
                [key: string]: any,
            },
            'cds.xt.ModelProviderService'?: {
                model: string,
                root: string,
                kind?: string,
                [key: string]: any,
            },
            'cds.xt.DeploymentService'?: {
                model: string,
                kind?: string,
                [key: string]: any,
            },
            [key: string]: any,
        }
    
        export type Binding = {
            type: 'cf' | 'k8s' | string,
            apiEndpoint?: string,
            org?: string,
            space?: string,
            instance?: string,
            key?: string,
        }
    
        export type Credentials = {
            clientid?: string,
            clientsecret?: string,
            url?: string,
            xsappname?: string,
            certurl?: string,
            certificate?: string,
            [key: string]: any,
        }
    }
    
    export class event extends aspect<'event'> {}
    
    /**
     * @see [capire docs](https://cap.cloud.sap/docs/node.js/events)
     */
    class Event_2<T = unknown> extends EventContext {
    
        event: string
    
        data: T
    
        headers: any
    
        before(phase: 'commit', handler: () => void)
    
        on(phase: 'succeeded' | 'failed' | 'done', handler: () => void)
    
    }
    export { Event_2 as Event }
    
    /**
     * Represents the invocation context of incoming request and event messages.
     * @see [capire docs](https://cap.cloud.sap/docs/node.js/events)
     */
    export class EventContext {
    
        constructor (properties: { event: string, data?: object, query?: object, headers?: object })
        http?: { req: import('express').Request, res: import('express').Response }
    
        tenant: string
    
        user: User
    
        id: string
    
        locale: `${string}_${string}`
    
        timestamp: Date
    
        features?: { [key: string]: boolean }
    
        model: LinkedCSN
    
    }
    
    export interface EventHandler {
        // (msg : types.EventMessage) : Promise<any> | any | void
        (req: Request_2): Promise<any> | any | void
    }
    
    /**
     * Provides a graceful shutdown for running servers, by first emitting `cds.emit('shutdown')`.
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-facade#cds-exit)
     */
    export function exit (): void
    
    export type expr = ref | val | xpr | function_call | SELECT_2
    
    export type expr_literal = { '=': string }
    
    type Expression<E extends string | number | bigint | boolean> = `${E}${WS}${Op}${WS}`
    
    type Expressions<L,E> = KVPairs<L, Expression<Exclude<keyof E, symbol>>, ColumnValue> extends true 
    ? L 
    // fallback: allow for any string. Important for when user renamed properties
    : KVPairs<L, Expression<string>, ColumnValue> extends true
    ? L
    : never
    
    /**
     * Add aspects to a given object, for example:
     *
     * @example
     * ```js
     *    extend (Object.prototype) .with (class {
     *       get foo() { return ... }
     *       bar() {...}
     *    }.prototype)
     * ```
     */
    export function extend<T> (target: T): {
        with<E extends readonly any[]>(...ext: E): T & Intersect<E>,
    }
    
    /**
     * Extensions capture `extend Foo with { ... }` directives.
     */
    type Extension = {
        extend: FQN,
        elements?: { [name: string]: Element },
        includes?: FQN[],
    }
    
    export type filename = string
    
    type Filter = string | (<T extends any_ = any_>(def: T) => boolean)
    
    export type _flavor = 'parsed' | 'xtended' | 'inferred'
    
    class Float extends number { }
    
    export const foreach: Service['foreach'];
    
    type Formatter = {
    
        /**
         * Custom format function
         *
         * @param module - logger name
         * @param level - log level
         * @param args - additional arguments
         * @returns an array of arguments, which are passed to the logger (for example, `console.log()`)
         */
        (module: string, level: number, args: any[]): any[],
    }
    
    /**
     * The fully-quality name of a definition.
     */
    type FQN = string
    
    /** @private */
    export type function_call = { func: string, args: { [key: string]: any }[] }
    
    /**
     * Loads and parses models from the specified files.
     * Uses `cds.resolve` to fetch the respective models.
     * Essentially a shortcut for `cds.compile.to.csn(files)`
     * @param files - filenames of models or if folder containing models
     */
    export function get (files: '*' | filename | filename[], o?: _options): Promise<csn.CSN>
    
    interface GroupBy {
        groupBy: TaggedTemplateQueryPart<this>
        & ((columns: Partial<{[column in KeyOfTarget<this extends ConstructedQuery<infer E> ? E : never, never>]: any}>) => this)
        & ((...expr: string[]) => this)
        & ((ref: ref) => this)
        // columns currently not being auto-completed due to complexity
    }
    
    /**
     * Types herein can be used to type handler functions that are not declared in line:
     * @example
     * ```ts
     * import { myAction } from '#cds-models/myService'
     * 
     * function onMyFunction (req: HandlerFunction<typeof myAction>['parameters']['req']): HandlerFunction<typeof myAction>['returns'] {
     *   ...
     * }
     * 
     * srv.on(myAction, onMyFunction)
     * ```
     */
    export type HandlerFunction<F extends CdsFunction> = {
        parameters: {
            /** @beta helper */
            req: Request_2<F['__parameters']>,
        },
        /** @beta helper */
        returns: F['__returns'],
    }
    
    interface Having<T> {
        having: HavingWhere<this, T>
    }
    
    type HavingWhere<This, E> = 
    /**
    * @param predicate - An object with keys that are valid fields of the target entity and values that are compared to the respective fields.
    * @example
    * ```js
    * SELECT.from(Books).where({ ID: 42 })  // where ID is a valid field of Book
    * SELECT.from(Books).having({ ID: 42 })  // where ID is a valid field of Book
    * ```
    */
    ((predicate: Partial<{[column in KeyOfTarget<This extends ConstructedQuery<infer E> ? E : never, never>]: any}>) => This)
    /**
    * @param expr - An array of expressions, where every odd element is a valid field of the target entity and every even element is a value that is compared to the respective field.
    * @example
    * ```js
    * SELECT.from(Books).where(['ID =', 42 ])  // where ID is a valid, numerical field of Book
    * SELECT.from(Books).having(['ID =', 42 ])  // where ID is a valid, numerical field of Book
    *```
    */
    & (<const L extends unknown[]>(...expr: Expressions<L, UnwrappedInstanceType<E>>) => This)
    & ((...expr: string[]) => This)
    & TaggedTemplateQueryPart<This>
    
    export const home: string;
    
    export const insert: Service['insert'];
    
    type INSERT_2 = { INSERT: {
            into: ref | name,
            entries: data[],
            columns: string[],
            values: primitive[],
            rows: primitive[][],
            as: SELECT_2,
        }, }
    export { INSERT_2 as INSERT }
    
    interface INSERT_3<T> extends Columns<T>, InUpsert<T> {}
    
    class INSERT_3<T> extends ConstructedQuery<T> {
        private constructor();
    
        static into: (<T extends ArrayConstructable> (entity: T, ...entries: SingularInstanceType<T>[]) => INSERT_3<SingularInstanceType<T>>)
        & (<T extends ArrayConstructable> (entity: T, entries?: SingularInstanceType<T>[]) => INSERT_3<SingularInstanceType<T>>)
        & (TaggedTemplateQueryPart<INSERT_3<unknown>>)
        & ((entity: EntityDescription, ...entries: Entries[]) => INSERT_3<StaticAny>)
        & ((entity: EntityDescription, entries?: Entries) => INSERT_3<StaticAny>)
        & (<T> (entity: Constructable<T>, ...entries: T[]) => INSERT_3<T>)
        & (<T> (entity: Constructable<T>, entries?: T[]) => INSERT_3<T>)
    
        /**
         * @deprected
         */
        as (select: SELECT_3<T>): this
        from (select: SELECT_3<T>): this
        INSERT: CQN.INSERT['INSERT']
    
    }
    
    class Int16 extends Integer { }
    
    class Int32 extends Integer { }
    
    class Int64 extends Integer { }
    
    class Integer extends number { }
    
    type Intersect<T extends readonly unknown[]> = T extends [infer Head, ...infer Tail]
    ? Head & Intersect<Tail>
    : unknown
    
    interface InUpsert<T> {
        data (block: (e: T) => void): this
    
        entries (...entries: T[]): this
        entries (entries: T[]): this
    
        values (...val: (null | Primitive)[]): this
        values (val: (null | Primitive)[]): this
    
        rows (...row: (null | Primitive)[][]): this
        rows (row: (null | Primitive)[][]): this
    
        into: (<T extends ArrayConstructable> (entity: T) => this)
        & TaggedTemplateQueryPart<this>
        & ((entity: EntityDescription) => this)
    }
    
    /**
     * Object structure that exposes both array-like and object-like behaviour.
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#iterable)
     */
    
    type IterableMap<T> = { [name: string]: T } & Iterable<T>
    
    type JSON_2 = string
    export { JSON_2 as JSON }
    
    export type Key = number | string | any
    
    type KeyOfSingular<T> = Unwrap<T> extends T
    ? keyof T
    : keyof Unwrap<T>
    
    type KeyOfTarget<T, F = string | column_expr> = T extends ConstructedQuery<infer U>
    ? (U extends ArrayConstructable  // Books
    ? keyof SingularInstanceType<U>
    : U extends Constructable  // Book
    ? keyof InstanceType<U>
    : F)
    : F
    
    type kinds = 'aspect' | 'entity' | 'type' | 'event' | 'action' | 'function' | 'service' | 'context' | 'elements' | 'element'
    
    /**
     * T is a tuple of alternating K, V pairs -> true, else false
     * Allows for variadic parameter lists with alternating expecing types,
     * like we have in cql.SELECT.where
     */
    type KVPairs<T,K,V> = T extends []
    ? true
    : T extends [K, V, ...infer R]
    ? KVPairs<R,K,V>
    : false
    
    class LargeBinary extends Binary { }
    
    class LargeString extends String_2 { }
    
    /**
     * @deprecated since version 8.1
     */
    export function lazified<T> (target: T): T
    
    /**
     * @deprecated since version 8.1
     */
    export function lazify<T> (target: T): T
    
    enum levels {
        // SILLY and VERBOSE are aliases for TRACE
        /* eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values */
        SILENT = 0, ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4, TRACE = 5, SILLY = 5, VERBOSE = 5
    }
    
    interface Limit {
        limit: TaggedTemplateQueryPart<this>
        & ((rows: number, offset?: number) => this)
    }
    
    export const linked: {
    
        /**
         * Turns the given plain CSN model into a linked model
         * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect)
         */
        (model: csn.CSN): linked_2.LinkedCSN,
    
        /**
         * Base classes of linked definitions from reflected models.
         * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#cds-builtin-classes)
         */
        classes: typeof classes,
    
        /**
         * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#linked-csn)
         */
        LinkedCSN: linked_2.LinkedCSN,
    
        /**
         * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#iterable)
         */
        LinkedDefinitions: IterableMap<linked_2.classes.any_>,
    };
    
    export namespace linked {
        export type LinkedDefinitions = IterableMap<linked_2.classes.any_>
        export type LinkedCSN = linked_2.LinkedCSN
    
        export namespace classes {
            export type type = __type
            export type aspect = __aspect
    
            export type any_ = __any_
    
            export type scalar = __scalar
            // can not shadow builtins. Same for string and number...
            //export type boolean = LinkedClasses.Boolean  // on purpose
            export type Boolean = __Boolean
    
            export type UUID = __UUID
            //export type string = LinkedClasses.String  // on purpose
            export type String = __String
            export type LargeString = __LargeString
            export type Binary = __Binary
            export type LargeBinary = __LargeBinary
            export type Vector = __Vector
    
            //export type number = LinkedClasses.scalar  // currently no better way to do this
            export type Integer = __Integer
            export type UInt8 = __UInt8
            export type Int16 = __Int16
            export type Int32 = __Int32
            export type Int64 = __Int64
            export type Float = __Float
            export type Double = __Double
            export type Decimal = __Decimal
    
            export type date = __date
            export type Date = __Date
            export type Time = __Time
            export type DateTime = __DateTime
            export type TimeStamp = __TimeStamp
    
            export type array = __array
    
            export type struct = __struct
            export type context_ = __context_
            export type service = __service
            export type entity = __entity
            export type Association = __Association
            export type Composition = __Composition
        }
    }
    
    namespace linked_2 {
        export {
            ModelPart,
            Definition_2 as Definition,
            LinkedCSN,
            classes
        }
    }
    
    interface LinkedCSN extends Omit<csn.CSN, 'definitions'> {
    
        /**
              * Fetches definitions matching the given filter, returning an iterator on them.
              * @example
              * ```js
              *   let m = cds.reflect (aParsedModel)
              *   for (let d of m.each('entity'))  console.log (d.kind, d.name)
              *   let entities = [...m.each('entity')]  //> capture all
              *   let entities = m.all('entity')        //> equivalent shortcut
              * ```
              */
        each<T extends any_>(x: Filter, defs?: Definitions<T>): IterableIterator<T>
    
        /**
              * Fetches definitions matching the given filter, returning them in an array.
              * Convenience shortcut for `[...reflect.each('entity')]`
              */
        all<T extends any_>(x: Filter, defs?: Definitions<T>): T[]
    
        /**
              * Fetches definitions matching the given filter, returning the first match, if any.
              * @example
              *      let service = model.find('service')
              * @param x - the filter
              * @param defs - the definitions to fetch in, default: `this.definitions`
              */
        find<T extends any_>(x: Filter, defs?: Definitions<T>): T | undefined
    
        /**
              * Calls the visitor for each definition matching the given filter.
              * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#foreach)
              */
        foreach(x: Filter, visitor: Visitor, defs?: Definitions): this
        foreach(visitor: Visitor, defs?: Definitions): this
    
        /**
              * Same as foreach but recursively visits each element definition
              * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#foreach)
              */
        forall(x: Filter, visitor: Visitor, defs?: Definitions): this
        forall(visitor: Visitor, defs?: Definitions): this
    
        /**
              * Fetches definitions declared as children of a given parent context or service.
              * It fetches all definitions whose fully-qualified names start with the parent's name.
              * Returns the found definitions as an object with the local names as keys.
              * @example
              * ```js
              *   let service  = model.find ('service')
              *   let entities = m.childrenOf (service)
              * ```
              * @param parent - either the parent itself or its fully-qualified name
              * @param filter - an optional filter to apply before picking a child
              */
        childrenOf(parent: any | string, filter?: ((def: any_) => boolean)): Definitions
    
        /**
              * Provides convenient access to the model's top-level definitions.
              * For example, you can use it in an es6-import-like fashion to avoid
              * working with fully-qualified names as follows:
              *
              * @example
              * ```js
              * let model = cds.reflect (cds.parse(`
              *     namespace our.lovely.bookshop;
              *     entity Books {...}
              *     entity Authors {...}
              * `))
              * const {Books,Authors} = model.exports
              * SELECT.from (Books) .where ({ID:11})
              * ```
              */
        exports: IterableMap<any_>
        definitions: IterableMap<any_>
        entities: ModelPart<entity>
        services: ModelPart<service_>
    
    }
    
    /**
     * Shortcut for `cds.get(files, 'inferred')`
     * @param files - filenames of models or if folder containing models
     */
    export function load (files: '*' | filename | filename[], o?: _options): Promise<csn.CSN>
    
    type Log = {
    
        /**
         * Logs a message
         *
         * @param message - text to log
         * @param optionalParams - additional parameters, same as in `console.log(text, param1, ...)`
         */
        (message?: any, ...optionalParams: any[]): void,
    }
    
    /**
     * Create a new logger, or install a custom log formatter
     */
    export const log: LogFactory;
    
    type LogFactory = {
    
        /**
         * Returns a trace logger for the given module if trace is switched on for it,
         * otherwise returns null. All cds runtime packages use this method for their
         * trace and debug output.
         *
         * By default this logger would prefix all output with `[sql] - `
         * You can change this by specifying another prefix in the options:
         * @example
         * ```js
         *   const LOG = cds.log('sql|db', { prefix: 'cds.ql' })
         * ```
         *
         * Call `cds.log()` for a given module again to dynamically change the log level
         * of all formerly created loggers, for example:
         * @example
         * ```js
         *   const LOG = cds.log('sql')
         *   LOG.info ('this will show, as default level is info')
         *   cds.log('sql', 'warn')
         *   LOG.info('this will be suppressed now')
         * ```
         *
         * @param name - logger name
         * @param options - level, label and prefix
         * @returns the logger
         * @see [capire](https://cap.cloud.sap/docs/node.js/cds-log)
         */
        (name: string, options?: string | number | { level?: LogLevel, label?: string, prefix?: string }): Logger,
    
        /**
         * Set a custom formatter function like that:
         * ```js
         *   cds.log.format = (module, level, ...args) => [ '[', module, ']', ...args ]
         * ```
         *
         * The formatter shall return an array of arguments, which are passed to the logger (for example, `console.log()`)
         */
        format: Formatter,
    
        /**
         * Set a custom logger.
         * ```js
         *   cds.log.Logger = ...
         * ```
         */
        Logger: Logger,
    
        // FIXME
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        winstonLogger (LoggerOptions?: { level?: string, levels?: any, format?: any, transports?: any, exitOnError?: boolean | Function, silent?: boolean }),
    }
    
    class Logger {
    
    
        /**
         * Logs with 'trace' level
         */
        trace: Log
    
        /**
         * Logs with 'debug' level
         */
        debug: Log
    
        /**
         * Logs with 'info' level
         */
        info: Log
    
        /**
         * Logs with 'warn' level
         */
        warn: Log
    
        /**
         * Logs with 'error' level
         */
        error: Log
    
        /**
         * Logs with default level
         */
        log: Log
    
        /**
         * @returns whether 'trace' level is active
         */
        _trace: boolean
    
        /**
         * @returns whether 'debug' level is active
         */
        _debug: boolean
    
        /**
         * @returns whether 'info' level is active
         */
        _info: boolean
    
        /**
         * @returns whether 'warn' level is active
         */
        _warn: boolean
    
        /**
         * @returns whether 'error' level is active
         */
        _error: boolean
    
        /**
         * Change the format for this logger instance:
         * ```
         *   cds.log('foo').setFormat((module, level, ...args) => [ '[', module, ']', ...args ])
         * ```
         *
         * The formatter shall return an array of arguments, which are passed to the logger (for example, `console.log()`)
         */
        setFormat (formatter: Formatter)
    
    }
    
    type LogLevel = keyof typeof levels | Lowercase<keyof typeof levels> | levels
    
    type ManagedAssociation = Association & {
        foreignKeys: Definitions<type>,
        keys: Column[],
    }
    
    export class MessagingService extends Service {}
    
    export type Middlewares = 'context' | 'trace' | 'auth' | 'ctx_model' | string
    
    export const middlewares: {
        add: (middleware: import('express').RequestHandler, pos?: XOR<XOR<{ at: number }, { after: Middlewares }>, { before: Middlewares }>) => void,
    };
    
    /**
     * Minifies a given CSN model by removing all unused1 types and aspects, as well all entities tagged with `@cds.persistence.skip:'if-unused'`
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-compile#cds-minify)
     */
    export function minify (model: csn.CSN): csn.CSN
    
    /**
     * Allows arbitrary property access. Can be used for explicitly casting
     * classes you have added {@link mixin}s to.
     * Use with caution, as the type system will no longer
     * warn you about possibly missing properties.
     * @example
     * ```ts
     * mixin(class struct { foo: string }))
     *
     * const s1 = new struct() as MixedIn<struct>
     * s1.is_struct
     * s1.foo
     * s1.bar  // no error, despite not being defined :(
     *
     * const s2 = new struct() as struct & { foo: string }  // better!
     * s2.is_struct
     * s2.foo
     * s2.bar  // error :)
     * ```
     */
    type MixedIn<T> = T & { [key: string | number | symbol]: unknown }
    
    /**
     * Using this will require you to explicitly cast all classes you added mixins to
     * to be able to access the additional properties. If you want to allow any additional
     * properties, you can use the {@link MixedIn} type.
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#mixin)
     */
    function mixin (...classes: (new () => any)[]): void
    
    /**
     * The effective CDS model loaded during bootstrapping, which contains all service and entity definitions,
     * including required services.
     * Should only be ever set explictly in test scenarios!
     */
    export let model: linked_2.LinkedCSN | undefined;
    
    type ModelPart<T extends any_> = IterableMap<T> & ((namespace: string) => IterableMap<T>)
    
    namespace models {
        export {
            get,
            load,
            resolve,
            minify,
            reflect,
            _flavor,
            _odata_options,
            _options,
            JSON_2 as JSON,
            YAML,
            CDL,
            SQL,
            XML,
            EDM,
            EDMX,
            filename,
            model,
            parse,
            linked,
            __type,
            __aspect,
            __any_,
            __scalar,
            __Boolean,
            __UUID,
            __String,
            __LargeString,
            __Binary,
            __LargeBinary,
            __Vector,
            __Integer,
            __UInt8,
            __Int16,
            __Int32,
            __Int64,
            __Float,
            __Double,
            __Decimal,
            __date,
            __Date,
            __Time,
            __DateTime,
            __TimeStamp,
            __array,
            __struct,
            __context_,
            __service,
            __entity,
            __Association,
            __Composition,
            compile
        }
    }
    
    /** @private */
    export type name = string
    
    /** @private */
    export type _named = { [key: name]: expr }
    
    const number: typeof number_;
    
    class number_ extends scalar { }
    
    export type _odata_options = {
        flavor?: 'v2' | 'v4' | 'w4' | 'x4',
        version?: 'v2' | 'v4',
        structs?: boolean,
        refs?: boolean,
    }
    
    /**
          * Emitted whenever a model is loaded using cds.load().
          */
    // FIXME: this is actually supposed to be part of models.d.ts
    // but had to be moved here so export * would not clash their definitions
    export function on (event: 'loaded', listener: (model: CSN) => void): _cds
    
    /**
          * Emitted whenever a specific service is connected for the first time.
          */
    export function on (event: 'connect', listener: (srv: Service) => void): _cds
    
    /**
          * Emitted at the very beginning of the bootstrapping process, when the
          * express application has been constructed but no middlewares or routes
          * added yet.
          */
    export function on (event: 'bootstrap', listener: (app: import('express').Application) => void): _cds
    
    /**
          * Emitted for each service served by cds.serve().
          */
    export function on (event: 'serving', listener: (srv: Service) => void): _cds
    
    /**
          * Emitted by the default, built-in `server.js` when all services are
          * constructed and mounted by cds.serve().
          */
    export function on (event: 'served', listener: (all: cds_services) => void): _cds
    
    /**
          * Emitted by the default, built-in `server.js` when the http server
          * is started and listening for incoming requests.
          */
    export function on (event: 'listening', listener: (args: { server: import('http').Server, url: string }) => void): _cds
    
    /**
          * Emitted by the default, built-in `server.js` when the http server
          * is shutdown.
          */
    export function on (event: 'shutdown', listener: () => void): _cds
    
    export function once (event: 'bootstrap', listener: (app: import('express').Application) => void): _cds
    
    export function once (event: 'served', listener: (all: cds_services) => void): _cds
    
    export function once (event: 'listening', listener: (args: { server: import('http').Server, url: string }) => void): _cds
    
    export function once (event: 'shutdown', listener: () => void): _cds
    
    export type OneOrMany<T> = T | T[]
    
    export interface OnErrorHandler {
        (err: Error, req: Request_2): any | void
    }
    
    export interface OnEventHandler {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
        (req: Request_2, next: Function): Promise<any> | any | void
    }
    
    type Op = '=' | '<' | '>' | '<=' | '>=' | '!=' | 'in' | 'like'
    
    /** @private */
    export type operator = string
    
    export type _options = {
        flavor?: _flavor,
        plain?: boolean,
        docs?: boolean,
        names?: string,
        odata?: _odata_options,
    } | _flavor
    
    interface OrderBy<T> {
        orderBy: TaggedTemplateQueryPart<this>
        & ((...col: KeyOfSingular<T>[]) => this)
        & ((...expr: string[]) => this)
    }
    
    /** @private */
    export type ordering_term = UnionToIntersection<expr> & { sort?: 'asc' | 'desc', nulls?: 'first' | 'last' }
    
    export const outboxed: (service: Service) => Service;
    
    /**
     * Provides a set of methods to parse a given model, query or expression.
     * You can also use `cds.parse()` as a shortcut to `cds.parse.cdl()`.
     */
    export const parse: {
    
        /** Shortcut to `cds.parse.cdl()` */
        (cdl: CDL): csn.CSN,
        cdl (cdl: CDL): csn.CSN,
        cql (src: string): Query,
        expr (src: string): expr,
        xpr (src: string): _xpr,
        ref (src: string): string[],
    };
    
    type Partial_2<T> = { [Key in keyof T]: undefined | T[Key] }
    export { Partial_2 as Partial }
    
    type PK = number | string | object
    
    type PluralInstanceType<T extends Constructable> = Array<InstanceType<T>>
    
    export type predicate = UnionsToIntersections<_xpr>
    
    type Primitive = string | number | boolean | Date
    
    /** @private */
    export type primitive = number | string | boolean | null
    
    /**
     * Subclass for executing code with superuser privileges.
     */
    export class Privileged extends User {
    
        constructor ()
    
        is (): boolean
    
    }
    
    type Projection<T> = (e: QLExtensions<T extends ArrayConstructable ? SingularInstanceType<T> : T>) => void
    
    /**
     * @alpha
     * related to .protocols getters
     */
    type Protocol = 'odata' | 'rest'
    
    type QbeOp = '=' | '-=' | '+=' | '*=' | '/=' | '%='
    
    class QL<T> {
    
        SELECT: StaticSELECT<T>
    
        INSERT: typeof INSERT_3<T>
        & ((...entries: object[]) => INSERT_3<T>) & ((entries: object[]) => INSERT_3<T>)
    
        UPSERT: typeof UPSERT_3
        & ((...entries: object[]) => UPSERT_3<T>) & ((entries: object[]) => UPSERT_3<T>)
    
        UPDATE: typeof UPDATE_3<T>
        & typeof UPDATE_3.entity
    
        DELETE: typeof DELETE_3<T>
        & ((...entries: object[]) => DELETE_3<T>) & ((entries: object[]) => DELETE_3<T>)
    
        CREATE: typeof CREATE_3<T>
    
        DROP: typeof DROP_3<T>
    
    }
    
    namespace ql {
        export {
            Query_2 as Query,
            QLExtensions,
            ConstructedQuery,
            StaticSELECT,
            QL,
            SELECT_3 as SELECT,
            INSERT_3 as INSERT,
            UPSERT_3 as UPSERT,
            DELETE_3 as DELETE,
            UPDATE_3 as UPDATE,
            CREATE_3 as CREATE,
            DROP_3 as DROP
        }
    }
    export { ql }
    
    export type QLExtensions<T> = T extends QLExtensions_<any> ? T : QLExtensions_<Required<T>>
    
    /**
     * QLExtensions are properties that are attached to entities in CQL contexts.
     * They are passed down to all properties recursively.
     */
    // have to exclude undefined from the type, or we'd end up with a distribution of Subqueryable
    // over T and undefined, which gives us zero code completion within the callable.
    type QLExtensions_<T> = { [Key in keyof T]: QLExtensions<T[Key]> } & QueryArtefact & Subqueryable<Exclude<T, undefined>>
    
    export type Query = { 
        /** @since 7.4.0 */
        elements: { [key: string]: Definition },
    } & Partial<SELECT_2 & INSERT_2 & UPDATE_2 & DELETE_2 & CREATE_2 & DROP_2 & UPSERT_2>
    
    type Query_2 = CQN.Query
    
    export class QueryAPI {
    
        entities: linked_2.LinkedCSN['entities']
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#crud-style-api)
         */
        read: {
            <T extends ArrayConstructable>(entity: T, key?: Key): Awaitable<SELECT_3<T>, InstanceType<T>>,
            <T>(entity: linked_2.Definition | string, key?: Key): SELECT_3<T>,
            (entity: ref, key?: Key): SELECT_3<unknown>,
        }
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#crud-style-api)
         */
        create: {
            <T extends ArrayConstructable>(entity: T, key?: Key): INSERT_3<T>,
            <T>(entity: linked_2.Definition | string, key?: Key): INSERT_3<T>,
        }
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#crud-style-api)
         */
        insert: {
            <T extends ArrayConstructable>(data: T): INSERT_3<T>,
            <T>(data: object | object[]): INSERT_3<T>,
        }
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#crud-style-api)
         */
        upsert: {
            <T extends ArrayConstructable>(data: T): UPSERT_3<T>,
            <T>(data: object | object[]): UPSERT_3<T>,
        }
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#crud-style-api)
         */
        update: {
            <T extends ArrayConstructable>(entity: T, key?: Key): UPDATE_3<T>,
            <T>(entity: linked_2.Definition | string, key?: Key): UPDATE_3<T>,
        }
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#crud-style-api)
         */
        run: {
            (query: ConstructedQuery<_TODO_2> | ConstructedQuery<_TODO_2>[]): Promise<ResultSet | any>,
            (query: Query_2): Promise<ResultSet | any>,
            (query: string, args?: any[] | object): Promise<ResultSet | any>,
        }
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#srv-stream-column)
         */
        stream: {
            (column: string): {
                from(entity: linked_2.Definition | string): {
                    where(filter: any): import('node:stream/web').ReadableStream,
                },
            },
            (query: Query_2): Promise<import('node:stream/web').ReadableStream>,
        }
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#crud-style-api)
         */
        delete<T>(entity: linked_2.Definition | string, key?: Key): DELETE_3<T>
    
        /**
         * @see [docs](https://cap.cloud.sap/docs/node.js/core-services#srv-foreach-entity)
         */
        foreach (query: Query_2, callback: (row: object) => void): this
    
        /**
         * @deprecated use {@link QueryAPI.tx} instead
         */
        transaction: QueryAPI['tx']
    
        tx: {
            (fn: (tx: Transaction) => object): Promise<unknown>,
            (context?: object): Transaction,
            (context: object, fn: (tx: Transaction) => object): Promise<unknown>,
        }
    
    }
    
    type QueryArtefact = {
    
        /**
              * Alias for this attribute.
              */
        as (alias: string): void,
    
        /**
              * Accesses any nested attribute based on a [path](https://cap.cloud.sap/cap/docs/java/query-api#path-expressions):
              * `X.get('a.b.c.d')`. Note that you will not receive
              * proper typing after this call.
              * To still have access to typed results, use
              * `X.a().b().c().d()` instead.
              */
        get (path: string): any,
    
    }
    
    export const read: Service['read'];
    
    /** @private */
    export type ref = { ref: _segment[] }
    
    /**
     * Turns the given plain CSN model into a reflected model
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect)
     */
    export function reflect (model: csn.CSN): linked_2.LinkedCSN
    
    export class RemoteService extends Service {}
    
    /**
     * @see [capire docs](https://cap.cloud.sap/docs/node.js/events)
     */
    class Request_2<T = any> extends Event_2<T> {
    
        params: (string | object)[]
    
        method: string
    
        path: string
    
        target: Definition_2
    
        /**
         * Shortcut to {@link Request.target | target (entity) name}
         * @see https://cap.cloud.sap/docs/node.js/events#req-entity
         */
        entity: string
    
        query: Query
    
        subject: ref
    
        reply (results: any): void
    
        notify (code: number, message: string, target?: string, args?: any[]): Error
    
        info (code: number, message: string, target?: string, args?: any[]): Error
    
        warn (code: number, message: string, target?: string, args?: any[]): Error
    
        error (code: number, message: string, target?: string, args?: any[]): Error
    
        reject (code: number, message: string, target?: string, args?: any[]): Error
    
        notify (code: number, message: string, args?: any[]): Error
    
        info (code: number, message: string, args?: any[]): Error
    
        warn (code: number, message: string, args?: any[]): Error
    
        error (code: number, message: string, args?: any[]): Error
    
        reject (code: number, message: string, args?: any[]): Error
    
        notify (message: string, target?: string, args?: any[]): Error
    
        info (message: string, target?: string, args?: any[]): Error
    
        warn (message: string, target?: string, args?: any[]): Error
    
        error (message: string, target?: string, args?: any[]): Error
    
        reject (message: string, target?: string, args?: any[]): Error
    
        notify (message: { code?: number | string, message: string, target?: string, args?: any[] }): Error
    
        info (message: { code?: number | string, message: string, target?: string, args?: any[] }): Error
    
        warn (message: { code?: number | string, message: string, target?: string, args?: any[] }): Error
    
        error (message: { code?: number | string, message: string, target?: string, args?: any[], status?: number }): Error
    
        reject (message: { code?: number | string, message: string, target?: string, args?: any[], status?: number }): Error
    
    }
    export { Request_2 as Request }
    
    export const requires: env.Requires;
    
    /**
     * Resolves given file or module name(s) to an array of absolute file names.
     * Uses Node's `require.resolve` internally with the following additions:
     * - relative names are resolved relative to the current working directory instead of the current JavaScript module; hence, use __dirname if you want to find or load models relative to the current module.
     * - if no file extension is given, `.csn` and `.cds` will be appended in that order.
     * @param files - The file or module name(s) of a model or a folder containing models. Specify `'*'` to fetch moels from default locations, i.e. `[ 'db/', 'srv/', 'app/' ]`
     * @returns An array of absolute file names or `undefined` if none could be resolved.
     */
    export function resolve (files: '*' | filename | filename[]): filename[] | undefined
    
    export interface ResultSet extends Array<object> {}
    
    export interface ResultsHandler {
        (results: any[], req: Request_2): void
        (each: any, req: Request_2): void
    }
    
    export const root: string;
    
    export const run: Service['run'];
    
    class scalar extends type { }
    
    type Scalarise<A> = A extends Array<infer N> ? N : A
    
    /** @private */
    export type _segment = name | {
        id?: string,
        where?: _xpr,
        args?: _named,
        groupBy: expr[],
        having: _xpr,
        orderBy: ordering_term[],
        limit: { rows: expr, offset: expr },
    }
    
    type SELECT_2 = { SELECT: {
            distinct?: true,
            one?: boolean,
            from: source,
            mixin?: { [key: string]: expr },
            columns?: column_expr[],
            excluding?: string[],
            where?: predicate,
            groupBy?: expr[],
            having?: predicate,
            orderBy?: ordering_term[],
            limit?: { rows: val, offset: val },
            forUpdate?: { wait: number },
            forShareLock?: { wait: number },
            search?: predicate,
            count?: boolean,
        }, }
    export { SELECT_2 as SELECT }
    
    interface SELECT_3<T> extends Where<T>, And, Having<T>, GroupBy, OrderBy<T>, Limit {
        // overload specific to SELECT
        columns: Columns<T, this>['columns'] & ((projection: Projection<T>) => this)
    }
    
    class SELECT_3<T, Q = SELECT_from> extends ConstructedQuery<T> {
        private constructor();
    
        static one: SELECT_one & { from: SELECT_one } & { localized: SELECT_one }
    
        static distinct: typeof SELECT_3<StaticAny>
    
        static from: SELECT_from & { localized: SELECT_from }
    
        static localized: SELECT_from & { from: SELECT_from }
    
        from: Q  // SELECT_from | SELECT_one
        & TaggedTemplateQueryPart<this>
        & ((entity: EntityDescription, primaryKey?: PK, projection?: Projection<unknown>) => this)
    
        forShareLock (): this
    
        forUpdate ({ wait }?: { wait?: number }): this
    
        alias (as: string): this
        elements: EntityElements
    
    
        // Not yet public
        // fullJoin (other: string, as: string) : this
        // leftJoin (other: string, as: string) : this
        // 	rightJoin (other: string, as: string) : this
        // 	innerJoin (other: string, as: string) : this
        // 	join (other: string, as: string, kind?: string) : this
        // on : TaggedTemplateQueryPart<this>
        //   & ((...expr : string[]) => this)
        //   & ((predicate:object) => this)
    
        SELECT: CQN.SELECT['SELECT'] & {
            forUpdate?: { wait: number },
            forShareLock?: { wait: number },
            search?: CQN.predicate,
            count?: boolean,
        }
    
    }
    
    type SELECT_from =
    // tagged template
    TaggedTemplateQueryPart<Awaitable<SELECT_3<_TODO_2>, InstanceType<_TODO_2>>>
    &
    // calling with class
    (<E extends ArrayConstructable>
    (entityType: E, projection?: Projection<QLExtensions<SingularInstanceType<E>>>)
    => Awaitable<SELECT_3<E>, InstanceType<E>>)
    &
    (<E extends ArrayConstructable>
    (entityType: E, primaryKey: PK, projection?: Projection<SingularInstanceType<E>>)
    => Awaitable<SELECT_3<SingularInstanceType<E>>, SingularInstanceType<E> | null>) // when specifying a key, we expect a single element as result
    // calling with definition
    & (<T>(entity: EntityDescription, primaryKey?: PK, projection?: Projection<T>) => SELECT_3<T>)
    // calling with concrete list
    & (<T> (entity: T[], projection?: Projection<T>) => SELECT_3<T> & Promise<T[]>)
    & (<T> (entity: T[], primaryKey: PK, projection?: Projection<T>) => Awaitable<SELECT_3<T>, T>)
    & ((subject: ref) => SELECT_3<_TODO_2>)
    // put these overloads at the very end, as they would also match the above
    // We expect these to be the overloads for scalars since we covered arrays above -> wrap them back in Array
    & (<T extends Constructable>(
    entityType: T,
    columns: string[]  // could be keyof in the future
    ) => Awaitable<SELECT_3<PluralInstanceType<T>>, PluralInstanceType<T>>)
    & (<T extends Constructable>(
    entityType: T,
    primaryKey: PK,
    columns: string[]  // could be keyof in the future
    ) => Awaitable<SELECT_3<InstanceType<T>>, InstanceType<T>>)
    & (<T extends Constructable>(
    entityType: T,
    projection?: Projection<InstanceType<T>>
    ) => Awaitable<SELECT_3<PluralInstanceType<T>>, PluralInstanceType<T>>)
    & (<T extends Constructable>(
    entityType: T,
    primaryKey: PK,
    projection?: Projection<InstanceType<T>>
    ) => Awaitable<SELECT_3<InstanceType<T>>, InstanceType<T>>)
    
    type SELECT_one =
    TaggedTemplateQueryPart<Awaitable<SELECT_3<_TODO_2, SELECT_one>, InstanceType<_TODO_2>>>
    &
    // calling with class
    (<T extends ArrayConstructable>
    (entityType: T, projection?: Projection<QLExtensions<SingularInstanceType<T>>>)
    => Awaitable<SELECT_3<SingularInstanceType<T>, SELECT_one>, SingularInstanceType<T> | null>)
    &
    (<T extends ArrayConstructable>
    (entityType: T, primaryKey: PK, projection?: Projection<QLExtensions<SingularInstanceType<T>>>)
    => Awaitable<SELECT_3<SingularInstanceType<T>, SELECT_one>, SingularInstanceType<T> | null>)
    
    & ((entity: EntityDescription, primaryKey?: PK, projection?: Projection<unknown>) => SELECT_3<_TODO_2, SELECT_one>)
    & (<T> (entity: T[], projection?: Projection<T>) => Awaitable<SELECT_3<T, SELECT_one>, T | null>)
    & (<T> (entity: T[], primaryKey: PK, projection?: Projection<T>) => Awaitable<SELECT_3<T, SELECT_one>, T | null>)
    & (<T> (entity: { new(): T }, projection?: Projection<T>) => Awaitable<SELECT_3<T, SELECT_one>, T | null>)
    & (<T> (entity: { new(): T }, primaryKey: PK, projection?: Projection<T>) => Awaitable<SELECT_3<T, SELECT_one>, T | null>)
    & ((subject: ref) => SELECT_3<_TODO_2>)
    
    /**
          * Constructs service providers from respective service definitions
          * @see [capire](https://cap.cloud.sap/docs/node.js/cds-serve)
          */
    export const serve: (service: string, options?: {
        service?: string,
        from?: '*' | 'all' | string,
        [key: string]: any,
    }) => Promise<cds_services> & cds_serve_fluent;
    
    /**
          * The default bootstrap function as loaded from server.js
          */
    export const server: Function;
    
    /**
     * Class cds.Service
     * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services)
     */
    export class Service extends QueryAPI {
    
        constructor (
        name?: string,
        model?: csn.CSN,
        options?: {
            kind: string,
            impl: string | ServiceImpl,
        }
        )
    
        /**
         * The kind of the service
         */
        kind: string
    
        /**
         * The name of the service
         */
        name: string
    
        /**
         * The model from which the service's definition was loaded
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services)
         */
        model: linked_2.LinkedCSN
    
        /**
         * Provides access to the entities exposed by a service
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services)
         */
        entities: linked_2.ModelPart<linked_2.classes.entity>
    
        /**
         * Provides access to the events declared by a service
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services)
         */
        events: linked_2.ModelPart<linked_2.classes.event>
    
        /**
         * Provides access to the types exposed by a service
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services)
         */
        types: linked_2.ModelPart<linked_2.classes.type>
    
        /**
         * Provides access to the operations, i.e. actions and functions, exposed by a service
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services)
         */
        operations: linked_2.ModelPart<linked_2.classes.action>
    
        /**
         * Acts like a parameter-less constructor. Ensure to call `await super.init()` to have the base class’s handlers added.
         * You may register own handlers before the base class’s ones, to intercept requests before the default handlers snap in.
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services#srv-init)
         */
        init (): Promise<void>
    
        /**
         * Constructs and emits an asynchronous event.
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services#srv-emit-event)
         */
        emit: {
            <T = any>(details: { event: types.event, data?: object, headers?: object }): Promise<T>,
            <T = any>(event: types.event, data?: object, headers?: object): Promise<T>,
        }
    
        /**
         * Constructs and sends a synchronous request.
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services#srv-send-request)
         */
        send: {
            <T = any>(event: types.event, path: string, data?: object, headers?: object): Promise<T>,
            <T = any>(event: types.event, data?: object, headers?: object): Promise<T>,
            <T = any>(details: { event: types.event, data?: object, headers?: object }): Promise<T>,
            <T = any>(details: { query: ConstructedQuery<T>, data?: object, headers?: object }): Promise<T>,
            <T = any>(details: { method: types.eventName, path: string, data?: object, headers?: object }): Promise<T>,
            <T = any>(details: { event: types.eventName, entity: linked_2.Definition | string, data?: object, params?: object, headers?: object }): Promise<T>,
        }
    
        /**
         * Constructs and sends a GET request.
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services#rest-style-api)
         */
        get<T = any>(entityOrPath: types.target, data?: object): Promise<T>
    
        /**
         * Constructs and sends a POST request.
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services#rest-style-api)
         */
        post<T = any>(entityOrPath: types.target, data?: object): Promise<T>
    
        /**
         * Constructs and sends a PUT request.
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services#rest-style-api)
         */
        put<T = any>(entityOrPath: types.target, data?: object): Promise<T>
    
        /**
         * Constructs and sends a PATCH request.
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/core-services#rest-style-api)
         */
        patch<T = any>(entityOrPath: types.target, data?: object): Promise<T>
    
        /**
         * Constructs and sends a DELETE request.
         */
        delete: {
            <T = any>(entityOrPath: types.target, data?: object): DELETE_3<T>,
            <T extends ArrayConstructable>(entity: T, key?: Key): DELETE_3<T>,
            <T>(entity: linked_2.Definition | string, key?: Key): DELETE_3<T>,
        }
    
        // The central method to dispatch events
        dispatch (msg: types.event): Promise<any>
    
        // FIXME: not yet documented, will come in future version
        // disconnect (tenant?: string): Promise<void>
    
        // Provider API
        prepend (fn: ServiceImpl): this
    
        on<T extends ArrayConstructable>(eve: types.event, entity: T | T[], handler: CRUDEventHandler.On<Unwrap<T>>): this
        on<T extends Constructable>(eve: types.event, entity: T | T[], handler: CRUDEventHandler.On<InstanceType<T>>): this
        on<F extends CdsFunction>(boundAction: F, service: string, handler: ActionEventHandler<F['__parameters'], void | Error | F['__returns']>): this
        on<F extends CdsFunction>(unboundAction: F, handler: ActionEventHandler<F['__parameters'], void | Error | F['__returns']>): this
        on (eve: types.event, entity: types.target, handler: OnEventHandler): this
        on (eve: types.event, handler: OnEventHandler): this
        on (eve: 'error', handler: OnErrorHandler): this
    
        // onSucceeded (eve: types.Events, entity: types.Target, handler: types.EventHandler): this
        // onSucceeded (eve: types.Events, handler: types.EventHandler): this
        // onFailed (eve: types.Events, entity: types.Target, handler: types.EventHandler): this
        // onFailed (eve: types.Events, handler: types.EventHandler): this
        before<F extends CdsFunction>(boundAction: F, service: string, handler: CRUDEventHandler.Before<F['__parameters'], void | Error | F['__returns']>): this
        before<F extends CdsFunction>(unboundAction: F, handler: CRUDEventHandler.Before<F['__parameters'], void | Error | F['__returns']>): this
        before<T extends ArrayConstructable>(eve: types.event, entity: T | T[], handler: CRUDEventHandler.Before<Unwrap<T>>): this
        before<T extends Constructable>(eve: types.event, entity: T | T[], handler: CRUDEventHandler.Before<InstanceType<T>>): this
        before (eve: types.event, entity: types.target, handler: EventHandler): this
        before (eve: types.event, handler: EventHandler): this
    
        // order relevant:
        // (2) check if T is arrayable -> unwrap array type
        // (3) check if T is scalar -> use T directly
        // this streamlines that in _most_ cases, handlers will receive a single object.
        // _Except_ for after.read handlers (1), which will change its inflection based on T.
        after<T extends ArrayConstructable>(event: 'READ', entity: T | T[], handler: CRUDEventHandler.After<InstanceType<T>>): this
        after<T extends ArrayConstructable>(event: 'each', entity: T | T[], handler: CRUDEventHandler.After<Unwrap<T>>): this
        after<T extends Constructable>(event: 'READ' | 'each', entity: T | T[], handler: CRUDEventHandler.After<InstanceType<T>>): this
        after<T extends ArrayConstructable>(eve: types.event, entity: T | T[], handler: CRUDEventHandler.After<Unwrap<T>>): this
        after<T extends Constructable>(eve: types.event, entity: T | T[], handler: CRUDEventHandler.After<InstanceType<T>>): this
        after<F extends CdsFunction>(boundAction: F, service: string, handler: CRUDEventHandler.After<F['__parameters'], void | Error | F['__returns']>): this
        after<F extends CdsFunction>(unboundAction: F, handler: CRUDEventHandler.After<F['__parameters'], void | Error | F['__returns']>): this
        after (eve: types.event, entity: types.target, handler: ResultsHandler): this
        after (eve: types.event, handler: ResultsHandler): this
    
        reject (eves: types.event, ...entity: types.target[]): this
    
    }
    
    /**
          * Shortcut to base class for all service definitions from linked models.
          * Plus accessors to impl functions and constructed providers.
          */
    export const service: service;
    
    export type service = {
    
        /**
              * Dummy wrapper for service implementation functions.
              * Use that in modules to get IntelliSense.
              */
        impl (impl: ServiceImpl): typeof impl,
        // impl <T> (srv:T, impl: (  _cds: T, srv: (T) ) => any) : typeof impl
    
        /**
              * Array of all services constructed.
              */
        providers: Service[],
    }
    
    /**
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#cds-service)
     */
    interface service_ extends csn.service {}
    
    class service_ extends context_ {
        is_service: true
        get entities (): Definitions<entity>
        get types (): Definitions<type>
        get events (): Definitions<event>
        get actions (): Definitions<action>
    
        /**
         * @deprecated use `.actions` instead
         */
        get operations (): Definitions<action>
    
        /**
         * @alpha
         * not public yet
         */
        get protocols (): { [protocol in Protocol]?: boolean | undefined }
    }
    
    interface service_2 extends any__2 { }
    
    export interface ServiceImpl {
        (this: Service, srv: Service): any
    }
    
    /**
          * Dictionary of all services constructed and/or connected.
          */
    export const services: cds_services;
    
    type SingularInstanceType<T extends ArrayConstructable> = InstanceType<T>[number]
    
    /** @private */
    export type source = UnionToIntersection<ref | SELECT_2> & { as?: name, join?: name, on?: xpr }
    
    /**
     * @see [docs](https://cap.cloud.sap/docs/node.js/cds-tx#cds-spawn)
     */
    export function spawn (options: SpawnOptions, fn: (tx: Transaction) => object): SpawnEventEmitter
    
    export class SpawnEventEmitter {
    
        on<U extends keyof SpawnEvents>(
        event: U, listener: SpawnEvents[U]
        ): this
    
        emit<U extends keyof SpawnEvents>(
        event: U, ...args: Parameters<SpawnEvents[U]>
        ): boolean
        timer: any
    
    }
    
    export interface SpawnEvents {
        succeeded: (res: any) => void
        failed: (error: any) => void
        done: () => void
    }
    
    export type SpawnOptions = {
        [key: string]: any,
        every?: number,
        after?: number,
    }
    
    export type SQL = string
    
    type StaticAny = any
    
    type StaticSELECT<T> = { columns: SELECT_3<T>['columns'] }
    & typeof SELECT_3<T>
    & SELECT_3<T>['columns']
    & SELECT_from // as it is not directly quantified, ...
    & SELECT_one
    
    export const stream: Service['stream'];
    
    const string: typeof string_;
    
    class string_ extends scalar { 
        length?: number
    }
    
    class String_2 extends string { }
    
    /**
     * @see [capire](https://cap.cloud.sap/docs/node.js/cds-reflect#cds-struct)
     */
    export interface struct extends Omit<csn.struct, 'items' | 'elements'> {}
    
    export class struct<K extends kinds = 'elements' | 'type'> extends type<K> implements WithElements {
        is_struct: true
    
        elements: Definitions<type<'type'>>
    }
    
    interface struct_2 extends type_2 {
    
        /**
         * References to definitions to be included.
         * Not available after extensions have been applied.
         */
        includes?: FQN[]
        elements: { [name: string]: Element }
    }
    
    /**
     * Adds the ability for subqueries to structured properties.
     * The final result of each subquery will be the property itself:
     * `Book.title` == `Subqueryable<Book>.title()`
     */
    type Subqueryable<T> = T extends Primitive ? unknown
    // composition of many/ association to many
    : T extends readonly unknown[] ? {
    
        /**
              * @example
              * ```js
              * SELECT.from(Books, b => b.author)
              * ```
              * means: "select all books and project each book's author"
              *
              * whereas
              * ```js
              * SELECT.from(Books, b => b.author(a => a.ID))
              * ```
              * means: "select all books, subselect each book's author's ID
              *
              * Note that you do not need to return anything from these subqueries.
              */
        (fn: ((a: QLExtensions<T[number]>) => any) | '*'): T[number],
    }
    // composition of one/ association to one
    : {
    
        /**
              * @example
              * ```js
              * SELECT.from(Books, b => b.author)
              * ```
              * means: "select all books and project each book's author"
              *
              * whereas
              * ```js
              * SELECT.from(Books, b => b.author(a => a.ID))
              * ```
              * means: "select all books, subselect each book's author's ID
              *
              * Note that you do not need to return anything from these subqueries.
              */
        (fn: ((a: QLExtensions<T>) => any) | '*'): T,
    }
    
    type TaggedTemplateQueryPart<T> = (strings: TemplateStringsArray, ...params: unknown[]) => T
    
    type TaggedTemplateRequest = (strings: TemplateStringsArray, ...params: unknown[]) => Promise<import('axios').AxiosResponse>
    
    class Test extends Axios {
    
        test: Test
    
        run (cmd: string, ...args: string[]): this
    
        in (...paths: string[]): this
    
        silent (): this
    
        /**
         * @deprecated Server log is shown by default. Use `log()` to get control over it.
         */
        verbose (v: boolean): this
    
        get chai (): typeof import('chai')
    
        get expect (): typeof import('chai').expect
    
        get assert (): typeof import('chai').assert
    
        get data (): DataUtil
    
        get cds (): _cds_2
    
        log (): {
            output: string,
            clear(): void,
            release(): void,
        }
    
        then (r: (args: { server: import('http').Server, url: string }) => void): void
    
        // get sleep(): (ms: number) => Promise<void>;
        // get spy(): <T, K extends keyof T>(o: T, f: K) => T[K] extends (...args: infer TArgs) => infer TReturnValue
        //   ? Spy<TArgs, TReturnValue>
        //   : Spy;
    
    }
    
    export const test: {
        Test: typeof Test,
    
        /**
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/cds-test#class-cds-test-test)
         */
        (dirname: string): Test,
    
        /**
         * @see [capire docs](https://cap.cloud.sap/docs/node.js/cds-test#class-cds-test-test)
         */
        (command: string, ...args: string[]): Test,
    
        in (dirname: string): Test,
    
        log: Test['log'],
    };
    
    class Time extends date { }
    
    class TimeStamp extends DateTime { }
    
    /**
     * DO NOT USE
     * @internal
     */
    export type _TODO = any
    
    /** @internal */
    type _TODO_2 = any
    
    export interface Transaction extends Service {
        commit(): Promise<void>
        rollback(): Promise<void>
    }
    
    export const transaction: Service['transaction'];
    
    /**
     * Starts or joins a transaction
     * @see [docs](https://cap.cloud.sap/docs/node.js/cds-tx)
     */
    export const tx: {
        (fn: (tx: Transaction) => object): Promise<any>,
        (context?: object): Transaction,
        (context: object, fn: (tx: Transaction) => object): Promise<any>,
    };
    
    export interface type extends Omit<csn.type, 'items'> {
        items?: type
        key?: boolean
        notNull?: boolean
        virtual?: boolean
    }
    
    export class type<K extends kinds = 'type'> extends any_<K> { }
    
    interface type_2 extends any__2 {
        type?: 'cds.Boolean' |
        'cds.UUID' | 'cds.String' | 'cds.LargeString' | 'cds.Binary' | 'cds.LargeBinary' | 'cds.Vector' |
        'cds.Integer' | 'cds.UInt8' | 'cds.Int16' | 'cds.Int32' | 'cds.Int64' | 'cds.Double' | 'cds.Decimal' |
        'cds.Date' | 'cds.Time' | 'cds.DateTime' | 'cds.Timestamp' |
        'cds.Association' | 'cds.Composition' |
        FQN & Record<never,never> // allow any other CDS type as well (e.g. 'User')
        items?: type_2
    }
    
    export namespace types {
        export type event = eventName | eventName[]
        export type eventName = { name: string } | string
        | 'CREATE' | 'READ' | 'UPDATE' | 'DELETE'
        | 'NEW' | 'EDIT' | 'PATCH' | 'SAVE'
        | 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
        | 'COMMIT' | 'ROLLBACK'
        export type target = string | linked_2.Definition | linked_2.classes.entity | (string | linked_2.Definition | linked_2.classes.entity)[] | ArrayConstructable
    }
    
    class UInt8 extends Integer { }
    
    export const unboxed: (service: Service) => Service;
    
    type UnionsToIntersections<U> = Array<UnionToIntersection<Scalarise<U>>>
    
    type UnionToIntersection<U> = Partial<(U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never>
    
    type Unwrap<T> = T extends ArrayConstructable
    ? SingularInstanceType<T>
    : T extends Array<infer U>
    ? U
    : T
    
    type UnwrappedInstanceType<T> = Unwrap<T> extends Constructable ? InstanceType<Unwrap<T>> : Unwrap<T>
    
    export const update: Service['update'];
    
    type UPDATE_2 = { UPDATE: {
            entity: ref | name,
            data: { [key: string]: expr },
            where?: predicate,
        }, }
    export { UPDATE_2 as UPDATE }
    
    interface UPDATE_3<T> extends Where<T>, And, ByKey {}
    
    class UPDATE_3<T> extends ConstructedQuery<T> {
        private constructor();
    
        static entity: (TaggedTemplateQueryPart<UPDATE_3<StaticAny>>)
        // UPDATE<SingularInstanceType<T>> is used here so type inference in set/with has the property keys of the singular type
        & (<T extends ArrayConstructable> (entity: T, primaryKey?: PK) => UPDATE_3<SingularInstanceType<T>>)
        & (<T extends Constructable> (entity: T, primaryKey?: PK) => UPDATE_3<InstanceType<T>>)
        & ((entity: EntityDescription | ref | Definition_2, primaryKey?: PK) => UPDATE_3<StaticAny>)
        & (<T> (entity: T, primaryKey?: PK) => UPDATE_3<T>)
    
        set: UpdateSet<this, T>
        with: UpdateSet<this, T>
    
        UPDATE: CQN.UPDATE['UPDATE']
    
    }
    
    /**
     * Represents updatable block that can be passed to either `.set` or `.with`
     * of an `UPDATE` query
     */
    type UpdateSet<This, T> = TaggedTemplateQueryPart<This>
    // simple value   > title: 'Some Title'
    // qbe expression > stock: { '-=': quantity }  
    // cqn expression > descr: {xpr: [{ref:[descr]}, '||', 'Some addition to descr.']}
    & ((data: {[P in keyof T]?: T[P] | {[op in QbeOp]?: T[P]} | CQN.xpr}) => This)
    
    type UPSERT_2 = { UPSERT: {
            into: ref | name,
            columns: string[],
            entries: data[],
            values: primitive[],
            rows: primitive[][],
        }, }
    export { UPSERT_2 as UPSERT }
    
    interface UPSERT_3<T> extends Columns<T>, InUpsert<T> {}
    
    class UPSERT_3<T> extends ConstructedQuery<T> {
        private constructor();
    
        static into: (<T extends ArrayConstructable> (entity: T, ...entries: SingularInstanceType<T>[]) => UPSERT_3<SingularInstanceType<T>>)
        & (<T extends ArrayConstructable> (entity: T, entries?: SingularInstanceType<T>[]) => UPSERT_3<SingularInstanceType<T>>)
        & (TaggedTemplateQueryPart<UPSERT_3<StaticAny>>)
        & ((entity: EntityDescription, ...entries: Entries[]) => UPSERT_3<StaticAny>)
        & ((entity: EntityDescription, entries?: Entries) => UPSERT_3<StaticAny>)
        & (<T> (entity: Constructable<T>, ...entries: T[]) => UPSERT_3<T>)
        & (<T> (entity: Constructable<T>, entries?: T[]) => UPSERT_3<T>)
    
        UPSERT: CQN.UPSERT['UPSERT']
    
    }
    
    /**
     * Represents the user in a given context.
     * @see [capire docs](https://cap.cloud.sap/docs/node.js/authentication#cds-user)
     */
    export class User {
    
        constructor (obj?: string | { id: string, attr: Record<string, string>, roles: Array<string> | Record<string, string> } | User)
        id: string
    
        /**
         * @deprecated Use https://cap.cloud.sap/docs/node.js/events#locale instead
         */
        locale: string
    
        /**
         * @deprecated Use https://cap.cloud.sap/docs/node.js/events#tenant instead
         */
        tenant: string | undefined
    
        attr: Record<string, string>
    
        roles: Array<string> | Record<string, string>
    
        static Anonymous: typeof Anonymous
    
        static anonymous: Anonymous
    
        static Privileged: typeof Privileged
    
        static privileged: Privileged
    
        static default: User
    
        is (role: string): boolean
    
    }
    
    /**
     * Provides a set of utility functions
     */
    export const utils: {
    
        /**
              * Generates a new v4 UUID
              * @see https://cap.cloud.sap/docs/node.js/cds-facade#cds-utils
              */
        uuid (): string,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#decodeuri
              */
        decodeURI(input: string): string,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#decodeuricomponent
              */
        decodeURIComponent(input: string): string,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#local-filename
              */
        local(filename: string): string,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#exists-file
              */
        exists(file: string): boolean,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#isdir-file
              */
        isdir(file: string): string,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#isdir-file
              */
        isfile(file: string): string,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#async-read-file
              */
        read(file: string): Promise<Buffer | object>,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#async-write-data-to-file
              */
        write: {
            (data: object): {
                to(...file: string[]): Promise<ReturnType<typeof import('node:fs').promises.writeFile>>,
            },
            (file: string, data: object): Promise<ReturnType<typeof import('node:fs').promises.writeFile>>,
        },
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#async-copy-src-to-dst
              */
        copy: {
            (src: string): {
                to(...dst: string[]): Promise<ReturnType<typeof import('node:fs').promises.copyFile>>,
            },
            (dst: string, src: string): Promise<ReturnType<typeof import('node:fs').promises.copyFile>>,
        },
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#async-mkdirp-path
              */
        mkdirp: (...path: string[]) => Promise<string>,
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#async-rmdir-path
              */
        rmdir: (...path: string[]) => Promise<ReturnType<typeof import('node:fs').promises.rm>>,
    
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#async-rimraf-path
              */
        rimraf: (...path: string[]) => Promise<ReturnType<typeof import('node:fs').promises.rm>>,
    
    
        /**
              * @see https://cap.cloud.sap/docs/node.js/cds-utils#async-rm-path
              */
        rm: (...path: string[]) => Promise<ReturnType<typeof import('node:fs').promises.rm>>,
    
        /**
         * @since 8.3.0
         * @see https://cap.cloud.sap/docs/node.js/cds-utils#colors
         */
        colors: {
            enabled: boolean,
            RESET: '\x1b[0m',
            BOLD: '\x1b[1m' | '',
            BRIGHT: '\x1b[1m' | '',
            DIMMED: '\x1b[2m' | '',
            ITALIC: '\x1b[3m' | '',
            UNDER: '\x1b[4m' | '',
            BLINK: '\x1b[5m' | '',
            FLASH: '\x1b[6m' | '',
            INVERT: '\x1b[7m' | '',
            BLACK: '\x1b[30m' | '',
            RED: '\x1b[31m' | '',
            GREEN: '\x1b[32m' | '',
            YELLOW: '\x1b[33m' | '',
            BLUE: '\x1b[34m' | '',
            PINK: '\x1b[35m' | '',
            CYAN: '\x1b[36m' | '',
            LIGHT_GRAY: '\x1b[37m' | '',
            DEFAULT: '\x1b[39m' | '',
            GRAY: '\x1b[90m' | '',
            LIGHT_RED: '\x1b[91m' | '',
            LIGHT_GREEN: '\x1b[92m' | '',
            LIGHT_YELLOW: '\x1b[93m' | '',
            LIGHT_BLUE: '\x1b[94m' | '',
            LIGHT_PINK: '\x1b[95m' | '',
            LIGHT_CYAN: '\x1b[96m' | '',
            WHITE: '\x1b[97m' | '',
            bg: {
                BLACK: '\x1b[40m' | '',
                RED: '\x1b[41m' | '',
                GREEN: '\x1b[42m' | '',
                YELLOW: '\x1b[43m' | '',
                BLUE: '\x1b[44m' | '',
                PINK: '\x1b[45m' | '',
                CYAN: '\x1b[46m' | '',
                WHITE: '\x1b[47m' | '',
                DEFAULT: '\x1b[49m' | '',
                LIGHT_GRAY: '\x1b[100m' | '',
                LIGHT_RED: '\x1b[101m' | '',
                LIGHT_GREEN: '\x1b[102m' | '',
                LIGHT_YELLOW: '\x1b[103m' | '',
                LIGHT_BLUE: '\x1b[104m' | '',
                LIGHT_PINK: '\x1b[105m' | '',
                LIGHT_CYAN: '\x1b[106m' | '',
                LIGHT_WHITE: '\x1b[107m' | '',
            },
        },
    };
    
    class UUID extends string { }
    
    /** @private */
    export type val = { val: any }
    
    class Vector extends Binary { }
    
    export const version: string;
    
    type Visitor = (def: any_, name: string, parent: any_, defs: Definitions) => void
    
    interface Where<T> {
        where: HavingWhere<this, T>
    }
    
    interface WithElements {
        elements: Definitions<type>
    }
    
    /**
     * https://stackoverflow.com/a/53229567
     * @internal
     */
    type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
    
    type WS = '' | ' '
    
    export type XML = string
    
    /** @internal */
    type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U
    
    /** @private */
    export type xpr = { xpr: _xpr }
    
    /** @private */
    export type _xpr = (expr | operator) []
    
    export type YAML = string
    
    export { }
    
    global {
      // these provide the functionality from SELECT, INSERT, etc in the global facade
      const SELECT: ql.QL<any>['SELECT']
      const INSERT: ql.QL<any>['INSERT']
      const UPSERT: ql.QL<any>['UPSERT']
      const UPDATE: ql.QL<any>['UPDATE']
      const DELETE: ql.QL<any>['DELETE']
      const CREATE: ql.QL<any>['CREATE']
      const DROP: ql.QL<any>['DROP']
    
      // and these allow us to use them as type too, i.e. `const q: SELECT<Book> = ...`
      type SELECT<T> = ql.SELECT<T>
      type INSERT<T> = ql.INSERT<T>
      type UPSERT<T> = ql.UPSERT<T>
      type UPDATE<T> = ql.UPDATE<T>
      type DELETE<T> = ql.DELETE<T>
      type CREATE<T> = ql.CREATE<T>
      type DROP<T> = ql.DROP<T>
    }
    
    }