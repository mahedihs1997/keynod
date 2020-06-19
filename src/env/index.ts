const PORT = process.env.PORT || 4000;
const DEBUG = !!process.env.DEBUG;
const SECRET = process.env.SECRET;
const IS_TEST = !!process.env.TEST_DATABASE;
const IS_PRODUCTION = !!process.env.DATABASE_URL;
const RESET_DB = !!process.env.RESET_DB;

export default { PORT, DEBUG, SECRET, IS_TEST, IS_PRODUCTION, RESET_DB };