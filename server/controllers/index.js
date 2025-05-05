export { default as registerController } from './auth/registerController.js'

/** The above line is equivalent to :
 * import registerController from './auth/registerController.js';
 * export registerController
 * // NOTE:
 *  This is a named export now & not a default export now.
 *
 * So, in our routes folder's index.js file we have to import it as {registerController}
 *
 * routes/index.js
 * import { registerController } from './../controllers/index.js'
 */
