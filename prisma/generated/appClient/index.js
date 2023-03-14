
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/generated/appClient",
    "generated/appClient",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ClientEmailChangeRequestScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  clientId: 'clientId'
});

exports.Prisma.ClientPasswordResetRequestScalarFieldEnum = makeEnum({
  token: 'token',
  createdAt: 'createdAt',
  email: 'email',
  wasUsed: 'wasUsed',
  clientId: 'clientId'
});

exports.Prisma.ClientPushTokenScalarFieldEnum = makeEnum({
  token: 'token',
  clientId: 'clientId'
});

exports.Prisma.ClientScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  numericPasswordHash: 'numericPasswordHash',
  name: 'name',
  notifyAnnouncements: 'notifyAnnouncements',
  notifyNewProducts: 'notifyNewProducts',
  notifyEventsAndActions: 'notifyEventsAndActions'
});

exports.Prisma.ClientSessionScalarFieldEnum = makeEnum({
  token: 'token',
  clientId: 'clientId'
});

exports.Prisma.ContractWithdrawRequestScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  contractId: 'contractId',
  value: 'value',
  status: 'status'
});

exports.Prisma.CustomerServiceScalarFieldEnum = makeEnum({
  id: 'id',
  tel: 'tel',
  email: 'email',
  whatsapp: 'whatsapp',
  address: 'address'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.NotificationScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  title: 'title',
  body: 'body',
  createdAt: 'createdAt',
  payload: 'payload'
});

exports.Prisma.NotificationsClientsScalarFieldEnum = makeEnum({
  isViewed: 'isViewed',
  notificationId: 'notificationId',
  clientId: 'clientId'
});

exports.Prisma.NullableJsonNullValueInput = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
});

exports.Prisma.PanelUserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  name: 'name'
});

exports.Prisma.PanelUserSessionScalarFieldEnum = makeEnum({
  token: 'token',
  panelUserId: 'panelUserId'
});

exports.Prisma.ProductScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  tel: 'tel',
  whatsapp: 'whatsapp',
  email: 'email',
  name: 'name',
  shortDescription: 'shortDescription',
  imageSrc: 'imageSrc',
  order: 'order',
  show: 'show'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.ClientEmailChangeRequestStatus = makeEnum({
  open: 'open',
  finished: 'finished',
  cancelled: 'cancelled'
});

exports.ContractWithdrawRequestStatus = makeEnum({
  open: 'open',
  finished: 'finished',
  cancelled: 'cancelled'
});

exports.NotificationType = makeEnum({
  basic: 'basic',
  navigator: 'navigator'
});

exports.Prisma.ModelName = makeEnum({
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
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"ClientEmailChangeRequestStatus\",\"values\":[{\"name\":\"open\",\"dbName\":null},{\"name\":\"finished\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null}],\"dbName\":null},{\"name\":\"ContractWithdrawRequestStatus\",\"values\":[{\"name\":\"open\",\"dbName\":null},{\"name\":\"finished\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null}],\"dbName\":null},{\"name\":\"NotificationType\",\"values\":[{\"name\":\"basic\",\"dbName\":null},{\"name\":\"navigator\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"PanelUser\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PanelUserSession\",\"relationName\":\"PanelUserToPanelUserSession\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"PanelUserSession\",\"dbName\":null,\"fields\":[{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"panelUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PanelUser\",\"relationName\":\"PanelUserToPanelUserSession\",\"relationFromFields\":[\"panelUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"panelUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Client\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numericPasswordHash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientPasswordResetRequest\",\"relationName\":\"ClientToClientPasswordResetRequest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailChangeRequests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientEmailChangeRequest\",\"relationName\":\"ClientToClientEmailChangeRequest\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pushTokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientPushToken\",\"relationName\":\"ClientToClientPushToken\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientSession\",\"relationName\":\"ClientToClientSession\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifyAnnouncements\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifyNewProducts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifyEventsAndActions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notifications\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationsClients\",\"relationName\":\"ClientToNotificationsClients\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ClientSession\",\"dbName\":null,\"fields\":[{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Client\",\"relationName\":\"ClientToClientSession\",\"relationFromFields\":[\"clientId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ClientPasswordResetRequest\",\"dbName\":null,\"fields\":[{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wasUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Client\",\"relationName\":\"ClientToClientPasswordResetRequest\",\"relationFromFields\":[\"clientId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ClientEmailChangeRequest\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClientEmailChangeRequestStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Client\",\"relationName\":\"ClientToClientEmailChangeRequest\",\"relationFromFields\":[\"clientId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ClientPushToken\",\"dbName\":null,\"fields\":[{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Client\",\"relationName\":\"ClientToClientPushToken\",\"relationFromFields\":[\"clientId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ContractWithdrawRequest\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contractId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContractWithdrawRequestStatus\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Notification\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payload\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clients\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NotificationsClients\",\"relationName\":\"NotificationToNotificationsClients\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"NotificationsClients\",\"dbName\":\"NotificationsClients\",\"fields\":[{\"name\":\"isViewed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NotificationToNotificationsClients\",\"relationFromFields\":[\"notificationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Client\",\"relationName\":\"ClientToNotificationsClients\",\"relationFromFields\":[\"clientId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clientId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"notificationId\",\"clientId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"CustomerService\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"whatsapp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Product\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"whatsapp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"PanelUser\",\"plural\":\"panelUsers\",\"findUnique\":\"findUniquePanelUser\",\"findUniqueOrThrow\":\"findUniquePanelUserOrThrow\",\"findFirst\":\"findFirstPanelUser\",\"findFirstOrThrow\":\"findFirstPanelUserOrThrow\",\"findMany\":\"findManyPanelUser\",\"create\":\"createOnePanelUser\",\"createMany\":\"createManyPanelUser\",\"delete\":\"deleteOnePanelUser\",\"update\":\"updateOnePanelUser\",\"deleteMany\":\"deleteManyPanelUser\",\"updateMany\":\"updateManyPanelUser\",\"upsert\":\"upsertOnePanelUser\",\"aggregate\":\"aggregatePanelUser\",\"groupBy\":\"groupByPanelUser\"},{\"model\":\"PanelUserSession\",\"plural\":\"panelUserSessions\",\"findUnique\":\"findUniquePanelUserSession\",\"findUniqueOrThrow\":\"findUniquePanelUserSessionOrThrow\",\"findFirst\":\"findFirstPanelUserSession\",\"findFirstOrThrow\":\"findFirstPanelUserSessionOrThrow\",\"findMany\":\"findManyPanelUserSession\",\"create\":\"createOnePanelUserSession\",\"createMany\":\"createManyPanelUserSession\",\"delete\":\"deleteOnePanelUserSession\",\"update\":\"updateOnePanelUserSession\",\"deleteMany\":\"deleteManyPanelUserSession\",\"updateMany\":\"updateManyPanelUserSession\",\"upsert\":\"upsertOnePanelUserSession\",\"aggregate\":\"aggregatePanelUserSession\",\"groupBy\":\"groupByPanelUserSession\"},{\"model\":\"Client\",\"plural\":\"clients\",\"findUnique\":\"findUniqueClient\",\"findUniqueOrThrow\":\"findUniqueClientOrThrow\",\"findFirst\":\"findFirstClient\",\"findFirstOrThrow\":\"findFirstClientOrThrow\",\"findMany\":\"findManyClient\",\"create\":\"createOneClient\",\"createMany\":\"createManyClient\",\"delete\":\"deleteOneClient\",\"update\":\"updateOneClient\",\"deleteMany\":\"deleteManyClient\",\"updateMany\":\"updateManyClient\",\"upsert\":\"upsertOneClient\",\"aggregate\":\"aggregateClient\",\"groupBy\":\"groupByClient\"},{\"model\":\"ClientSession\",\"plural\":\"clientSessions\",\"findUnique\":\"findUniqueClientSession\",\"findUniqueOrThrow\":\"findUniqueClientSessionOrThrow\",\"findFirst\":\"findFirstClientSession\",\"findFirstOrThrow\":\"findFirstClientSessionOrThrow\",\"findMany\":\"findManyClientSession\",\"create\":\"createOneClientSession\",\"createMany\":\"createManyClientSession\",\"delete\":\"deleteOneClientSession\",\"update\":\"updateOneClientSession\",\"deleteMany\":\"deleteManyClientSession\",\"updateMany\":\"updateManyClientSession\",\"upsert\":\"upsertOneClientSession\",\"aggregate\":\"aggregateClientSession\",\"groupBy\":\"groupByClientSession\"},{\"model\":\"ClientPasswordResetRequest\",\"plural\":\"clientPasswordResetRequests\",\"findUnique\":\"findUniqueClientPasswordResetRequest\",\"findUniqueOrThrow\":\"findUniqueClientPasswordResetRequestOrThrow\",\"findFirst\":\"findFirstClientPasswordResetRequest\",\"findFirstOrThrow\":\"findFirstClientPasswordResetRequestOrThrow\",\"findMany\":\"findManyClientPasswordResetRequest\",\"create\":\"createOneClientPasswordResetRequest\",\"createMany\":\"createManyClientPasswordResetRequest\",\"delete\":\"deleteOneClientPasswordResetRequest\",\"update\":\"updateOneClientPasswordResetRequest\",\"deleteMany\":\"deleteManyClientPasswordResetRequest\",\"updateMany\":\"updateManyClientPasswordResetRequest\",\"upsert\":\"upsertOneClientPasswordResetRequest\",\"aggregate\":\"aggregateClientPasswordResetRequest\",\"groupBy\":\"groupByClientPasswordResetRequest\"},{\"model\":\"ClientEmailChangeRequest\",\"plural\":\"clientEmailChangeRequests\",\"findUnique\":\"findUniqueClientEmailChangeRequest\",\"findUniqueOrThrow\":\"findUniqueClientEmailChangeRequestOrThrow\",\"findFirst\":\"findFirstClientEmailChangeRequest\",\"findFirstOrThrow\":\"findFirstClientEmailChangeRequestOrThrow\",\"findMany\":\"findManyClientEmailChangeRequest\",\"create\":\"createOneClientEmailChangeRequest\",\"createMany\":\"createManyClientEmailChangeRequest\",\"delete\":\"deleteOneClientEmailChangeRequest\",\"update\":\"updateOneClientEmailChangeRequest\",\"deleteMany\":\"deleteManyClientEmailChangeRequest\",\"updateMany\":\"updateManyClientEmailChangeRequest\",\"upsert\":\"upsertOneClientEmailChangeRequest\",\"aggregate\":\"aggregateClientEmailChangeRequest\",\"groupBy\":\"groupByClientEmailChangeRequest\"},{\"model\":\"ClientPushToken\",\"plural\":\"clientPushTokens\",\"findUnique\":\"findUniqueClientPushToken\",\"findUniqueOrThrow\":\"findUniqueClientPushTokenOrThrow\",\"findFirst\":\"findFirstClientPushToken\",\"findFirstOrThrow\":\"findFirstClientPushTokenOrThrow\",\"findMany\":\"findManyClientPushToken\",\"create\":\"createOneClientPushToken\",\"createMany\":\"createManyClientPushToken\",\"delete\":\"deleteOneClientPushToken\",\"update\":\"updateOneClientPushToken\",\"deleteMany\":\"deleteManyClientPushToken\",\"updateMany\":\"updateManyClientPushToken\",\"upsert\":\"upsertOneClientPushToken\",\"aggregate\":\"aggregateClientPushToken\",\"groupBy\":\"groupByClientPushToken\"},{\"model\":\"ContractWithdrawRequest\",\"plural\":\"contractWithdrawRequests\",\"findUnique\":\"findUniqueContractWithdrawRequest\",\"findUniqueOrThrow\":\"findUniqueContractWithdrawRequestOrThrow\",\"findFirst\":\"findFirstContractWithdrawRequest\",\"findFirstOrThrow\":\"findFirstContractWithdrawRequestOrThrow\",\"findMany\":\"findManyContractWithdrawRequest\",\"create\":\"createOneContractWithdrawRequest\",\"createMany\":\"createManyContractWithdrawRequest\",\"delete\":\"deleteOneContractWithdrawRequest\",\"update\":\"updateOneContractWithdrawRequest\",\"deleteMany\":\"deleteManyContractWithdrawRequest\",\"updateMany\":\"updateManyContractWithdrawRequest\",\"upsert\":\"upsertOneContractWithdrawRequest\",\"aggregate\":\"aggregateContractWithdrawRequest\",\"groupBy\":\"groupByContractWithdrawRequest\"},{\"model\":\"Notification\",\"plural\":\"notifications\",\"findUnique\":\"findUniqueNotification\",\"findUniqueOrThrow\":\"findUniqueNotificationOrThrow\",\"findFirst\":\"findFirstNotification\",\"findFirstOrThrow\":\"findFirstNotificationOrThrow\",\"findMany\":\"findManyNotification\",\"create\":\"createOneNotification\",\"createMany\":\"createManyNotification\",\"delete\":\"deleteOneNotification\",\"update\":\"updateOneNotification\",\"deleteMany\":\"deleteManyNotification\",\"updateMany\":\"updateManyNotification\",\"upsert\":\"upsertOneNotification\",\"aggregate\":\"aggregateNotification\",\"groupBy\":\"groupByNotification\"},{\"model\":\"NotificationsClients\",\"plural\":\"notificationsClients\",\"findUnique\":\"findUniqueNotificationsClients\",\"findUniqueOrThrow\":\"findUniqueNotificationsClientsOrThrow\",\"findFirst\":\"findFirstNotificationsClients\",\"findFirstOrThrow\":\"findFirstNotificationsClientsOrThrow\",\"findMany\":\"findManyNotificationsClients\",\"create\":\"createOneNotificationsClients\",\"createMany\":\"createManyNotificationsClients\",\"delete\":\"deleteOneNotificationsClients\",\"update\":\"updateOneNotificationsClients\",\"deleteMany\":\"deleteManyNotificationsClients\",\"updateMany\":\"updateManyNotificationsClients\",\"upsert\":\"upsertOneNotificationsClients\",\"aggregate\":\"aggregateNotificationsClients\",\"groupBy\":\"groupByNotificationsClients\"},{\"model\":\"CustomerService\",\"plural\":\"customerServices\",\"findUnique\":\"findUniqueCustomerService\",\"findUniqueOrThrow\":\"findUniqueCustomerServiceOrThrow\",\"findFirst\":\"findFirstCustomerService\",\"findFirstOrThrow\":\"findFirstCustomerServiceOrThrow\",\"findMany\":\"findManyCustomerService\",\"create\":\"createOneCustomerService\",\"createMany\":\"createManyCustomerService\",\"delete\":\"deleteOneCustomerService\",\"update\":\"updateOneCustomerService\",\"deleteMany\":\"deleteManyCustomerService\",\"updateMany\":\"updateManyCustomerService\",\"upsert\":\"upsertOneCustomerService\",\"aggregate\":\"aggregateCustomerService\",\"groupBy\":\"groupByCustomerService\"},{\"model\":\"Product\",\"plural\":\"products\",\"findUnique\":\"findUniqueProduct\",\"findUniqueOrThrow\":\"findUniqueProductOrThrow\",\"findFirst\":\"findFirstProduct\",\"findFirstOrThrow\":\"findFirstProductOrThrow\",\"findMany\":\"findManyProduct\",\"create\":\"createOneProduct\",\"createMany\":\"createManyProduct\",\"delete\":\"deleteOneProduct\",\"update\":\"updateOneProduct\",\"deleteMany\":\"deleteManyProduct\",\"updateMany\":\"updateManyProduct\",\"upsert\":\"upsertOneProduct\",\"aggregate\":\"aggregateProduct\",\"groupBy\":\"groupByProduct\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/isaacbatst/www/freelas/quant-capital/quant-capital-backend/prisma/generated/appClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/generated/appClient/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/appClient/schema.prisma")
