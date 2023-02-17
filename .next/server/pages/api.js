"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api";
exports.ids = ["pages/api"];
exports.modules = {

/***/ "./Models/userModel.js":
/*!*****************************!*\
  !*** ./Models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    phone: {\n        type: String,\n        required: true,\n        unique: true\n    }\n});\nuserSchema.set(\"timestamps\", true);\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2RlbHMvdXNlck1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxhQUFhLElBQUlILDRDQUFNQSxDQUFDO0lBQzVCSSxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtJQUNoQjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkRSxRQUFRLElBQUk7SUFDZDtJQUNBQyxPQUFPO1FBQ0xMLE1BQU1DO1FBQ05DLFVBQVUsSUFBSTtRQUNkRSxRQUFRLElBQUk7SUFDZDtBQUNGO0FBRUFOLFdBQVdRLEdBQUcsQ0FBQyxjQUFjLElBQUk7QUFFakMsTUFBTUMsT0FBT1YsaURBQVcsSUFBSUQsK0NBQUtBLENBQUMsUUFBUUU7QUFFMUMsaUVBQWVTLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMS8uL01vZGVscy91c2VyTW9kZWwuanM/ZGJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBwaG9uZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcblxyXG51c2VyU2NoZW1hLnNldCgndGltZXN0YW1wcycsIHRydWUpO1xyXG5cclxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJ1c2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGhvbmUiLCJzZXQiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Models/userModel.js\n");

/***/ }),

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Models_userModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Models/userModel */ \"./Models/userModel.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const user = await _Models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n                res.status(200).json({\n                    succesful: true,\n                    data: user\n                });\n            } catch (error) {\n                res.status(400).json({\n                    succesful: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                if (!req.body.name) {\n                    res.status(400).json({\n                        succesful: false,\n                        data: `Please Put the Name, Name field cannot be empty`\n                    });\n                } else if (!req.body.email) {\n                    res.status(400).json({\n                        succesful: false,\n                        data: `Please Put the E-mail, E-mail field cannot be empty`\n                    });\n                } else if (!req.body.email.includes( true && \".\")) {\n                    res.status(400).json({\n                        succesful: false,\n                        data: `Please Put Valid email`\n                    });\n                } else if (!req.body.phone) {\n                    res.status(400).json({\n                        succesful: false,\n                        data: `Please Put the Phone Number, Phone number field cannot be empty`\n                    });\n                }\n                const user = await _Models_userModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(req.body);\n                console.log(user);\n                res.status(200).json({\n                    succesful: true,\n                    data: user\n                });\n            } catch (error) {\n                res.status(400).json({\n                    succesful: false,\n                    data: error.message\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                successful: false\n            });\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQ0k7QUFFOUNDLDREQUFTQTtBQUVULDhEQUE4RDtBQUM5RCw2QkFBZSwwQ0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBQ25CLE9BQVFFO1FBQ04sS0FBSztZQUNILElBQUk7Z0JBQ0YsTUFBTUMsT0FBTyxNQUFNTCw4REFBUyxDQUFDLENBQUM7Z0JBQzlCRyxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxXQUFXLElBQUk7b0JBQUVDLE1BQU1MO2dCQUFLO1lBQ3JELEVBQUUsT0FBT00sT0FBTztnQkFDZFIsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsV0FBVyxLQUFLO2dCQUFDO1lBQzFDO1lBQ0EsS0FBTTtRQUNSLEtBQUs7WUFDSCxJQUFJO2dCQUNGLElBQUksQ0FBQ1AsSUFBSVUsSUFBSSxDQUFDQyxJQUFJLEVBQUU7b0JBQ2xCVixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUNuQkMsV0FBVyxLQUFLO3dCQUNoQkMsTUFBTSxDQUFDLCtDQUErQyxDQUFDO29CQUN6RDtnQkFDRixPQUFPLElBQUksQ0FBQ1IsSUFBSVUsSUFBSSxDQUFDRSxLQUFLLEVBQUU7b0JBQzFCWCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUNuQkMsV0FBVyxLQUFLO3dCQUNoQkMsTUFBTSxDQUFDLG1EQUFtRCxDQUFDO29CQUM3RDtnQkFDRixPQUFPLElBQUksQ0FBQ1IsSUFBSVUsSUFBSSxDQUFDRSxLQUFLLENBQUNDLFFBQVEsQ0FBQyxTQUFPLE1BQU07b0JBQy9DWixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUNuQkMsV0FBVyxLQUFLO3dCQUNoQkMsTUFBTSxDQUFDLHNCQUFzQixDQUFDO29CQUNoQztnQkFDRixPQUFPLElBQUksQ0FBQ1IsSUFBSVUsSUFBSSxDQUFDSSxLQUFLLEVBQUU7b0JBQzFCYixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUNuQkMsV0FBVyxLQUFLO3dCQUNoQkMsTUFBTSxDQUFDLCtEQUErRCxDQUFDO29CQUN6RTtnQkFDRixDQUFDO2dCQUNELE1BQU1MLE9BQU8sTUFBTUwsZ0VBQVcsQ0FBQ0UsSUFBSVUsSUFBSTtnQkFDdkNNLFFBQVFDLEdBQUcsQ0FBQ2Q7Z0JBQ1pGLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFdBQVcsSUFBSTtvQkFBRUMsTUFBTUw7Z0JBQUs7WUFDckQsRUFBRSxPQUFPTSxPQUFPO2dCQUNkUixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxXQUFXLEtBQUs7b0JBQUVDLE1BQU1DLE1BQU1TLE9BQU87Z0JBQUM7WUFDL0Q7WUFDQSxLQUFNO1FBRVI7WUFDRWpCLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVhLFlBQVksS0FBSztZQUFDO1lBQ3pDLEtBQU07SUFDVjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMS8uL3BhZ2VzL2FwaS9pbmRleC5qcz9jNWZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL01vZGVscy91c2VyTW9kZWwnO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uL3V0aWxzL2RiQ29ubmVjdCc7XHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZCh7fSk7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNmdWw6IHRydWUsIGRhdGE6IHVzZXIgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNmdWw6IGZhbHNlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCFyZXEuYm9keS5uYW1lKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGBQbGVhc2UgUHV0IHRoZSBOYW1lLCBOYW1lIGZpZWxkIGNhbm5vdCBiZSBlbXB0eWAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFyZXEuYm9keS5lbWFpbCkge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNmdWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhOiBgUGxlYXNlIFB1dCB0aGUgRS1tYWlsLCBFLW1haWwgZmllbGQgY2Fubm90IGJlIGVtcHR5YCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCdAJyAmJiAnLicpKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGBQbGVhc2UgUHV0IFZhbGlkIGVtYWlsYCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlcS5ib2R5LnBob25lKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IGBQbGVhc2UgUHV0IHRoZSBQaG9uZSBOdW1iZXIsIFBob25lIG51bWJlciBmaWVsZCBjYW5ub3QgYmUgZW1wdHlgLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNmdWw6IHRydWUsIGRhdGE6IHVzZXIgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNmdWw6IGZhbHNlLCBkYXRhOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2Vzc2Z1bDogZmFsc2UgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiVXNlciIsImRiQ29ubmVjdCIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXIiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc2Z1bCIsImRhdGEiLCJlcnJvciIsImJvZHkiLCJuYW1lIiwiZW1haWwiLCJpbmNsdWRlcyIsInBob25lIiwiY3JlYXRlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzdWNjZXNzZnVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst connection = {};\nconst dbConnect = async ()=>{\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(process.env.MONGO_URI).then(()=>{\n        console.log(\"connected to database succesfully\");\n    }).catch((err)=>console.log(err));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBQ25DQyxvREFBd0I7QUFFeEIsTUFBTUUsYUFBYSxDQUFDO0FBRXBCLE1BQU1DLFlBQVksVUFBWTtJQUM1QixJQUFJRCxXQUFXRSxXQUFXLEVBQUU7UUFDMUI7SUFDRixDQUFDO0lBQ0QsTUFBTUMsS0FBSyxNQUFNTixpREFBT0EsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQzNDQyxJQUFJLENBQUMsSUFBTTtRQUNWQyxRQUFRQyxHQUFHLENBQUM7SUFDZCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUgsUUFBUUMsR0FBRyxDQUFDRTtBQUNoQztBQUVBLGlFQUFlVixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzazEvLi91dGlscy9kYkNvbm5lY3QuanM/YzNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmNvbnN0IGRiQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIGRhdGFiYXNlIHN1Y2Nlc2Z1bGx5Jyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdCIsInJlcXVpcmUiLCJjb25maWciLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/index.js"));
module.exports = __webpack_exports__;

})();