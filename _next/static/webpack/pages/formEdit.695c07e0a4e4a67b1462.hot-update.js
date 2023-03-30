webpackHotUpdate_N_E("pages/formEdit",{

/***/ "./pagesComponents/editForm/ejsUtils/index.ts":
/*!****************************************************!*\
  !*** ./pagesComponents/editForm/ejsUtils/index.ts ***!
  \****************************************************/
/*! exports provided: transSchemaItem, transFormSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transSchemaItem\", function() { return transSchemaItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transFormSchema\", function() { return transFormSchema; });\n/* harmony import */ var _template_formItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/formItem */ \"./pagesComponents/editForm/ejsUtils/template/formItem.ts\");\n\nvar defaultFormItemName = 'FormItem';\nvar varRecord;\n\nvar setAttrStr = function setAttrStr(attr, prop) {\n  if (!attr) return '';\n  var attrList = [];\n  Object.keys(attr).forEach(function (key) {\n    switch (typeof attr[key]) {\n      case 'boolean':\n        attrList.push(\"\".concat(key, \"={\").concat(attr[key] ? 'true' : 'false', \"}\"));\n        break;\n\n      case 'object':\n        varRecord.push({\n          key: \"\".concat(prop, \"_\").concat(key),\n          value: Object(_template_formItem__WEBPACK_IMPORTED_MODULE_0__[\"getValueStr\"])(attr[key], 0)\n        });\n        attrList.push(\"\".concat(key, \"={\").concat(prop, \"_\").concat(key, \"}\"));\n        break;\n\n      case 'string':\n        attrList.push(\"\".concat(key, \"='\").concat(attr[key], \"'\"));\n        break;\n\n      case 'number':\n        attrList.push(\"\".concat(key, \"={\").concat(attr[key], \"}\"));\n        break;\n\n      default:\n        break;\n    }\n  });\n  return attrList.join(' ');\n};\n\nvar transSchemaItem = function transSchemaItem(schemaItem) {\n  if (schemaItem.prop) {\n    return Object(_template_formItem__WEBPACK_IMPORTED_MODULE_0__[\"renderFormItem\"])({\n      formItemName: defaultFormItemName,\n      innerHtml: schemaItem.innerHtml,\n      component: schemaItem.component,\n      prop: schemaItem.prop,\n      label: schemaItem.label,\n      formItemAttr: setAttrStr({\n        hidden: schemaItem.hidden\n      }, schemaItem.prop),\n      attrStr: setAttrStr(schemaItem.attr, schemaItem.prop),\n      needRules: !!schemaItem.rules\n    }, 3);\n  } // default\n  // const data = schemaItem\n\n\n  return '';\n};\nvar transFormSchema = function transFormSchema(formSchema) {\n  var content = formSchema.content; // init varRecord\n\n  varRecord = [];\n  var str = content.map(function (contentItem) {\n    return transSchemaItem(contentItem);\n  });\n  console.log('transFormSchema', 'content', str);\n  var formStr = str.join(\"\\n\");\n  var varStr = varRecord.map(function (_ref) {\n    var key = _ref.key,\n        value = _ref.value;\n    return \"const \".concat(key, \" =\").concat(value);\n  }).join(\"\\n\");\n  return \"// \\u6B64\\u6A21\\u7248\\u4E3A\\u81EA\\u52A8\\u751F\\u6210\\nconst App = () => {\\n\".concat(varStr, \"\\n\\n  return (\\n    <>\\n      <h1>\\u6A21\\u677F\\u8868\\u5355</h1>\\n      <Form>\\n\").concat(formStr, \"\\n      </Form>\\n    </>\\n  )\\n}\\n\\n\");\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXNDb21wb25lbnRzL2VkaXRGb3JtL2Vqc1V0aWxzL2luZGV4LnRzP2RlNzciXSwibmFtZXMiOlsiZGVmYXVsdEZvcm1JdGVtTmFtZSIsInZhclJlY29yZCIsInNldEF0dHJTdHIiLCJhdHRyIiwicHJvcCIsImF0dHJMaXN0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwdXNoIiwidmFsdWUiLCJnZXRWYWx1ZVN0ciIsImpvaW4iLCJ0cmFuc1NjaGVtYUl0ZW0iLCJzY2hlbWFJdGVtIiwicmVuZGVyRm9ybUl0ZW0iLCJmb3JtSXRlbU5hbWUiLCJpbm5lckh0bWwiLCJjb21wb25lbnQiLCJsYWJlbCIsImZvcm1JdGVtQXR0ciIsImhpZGRlbiIsImF0dHJTdHIiLCJuZWVkUnVsZXMiLCJydWxlcyIsInRyYW5zRm9ybVNjaGVtYSIsImZvcm1TY2hlbWEiLCJjb250ZW50Iiwic3RyIiwibWFwIiwiY29udGVudEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZm9ybVN0ciIsInZhclN0ciJdLCJtYXBwaW5ncyI6IkFBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLG1CQUFtQixHQUFHLFVBQTVCO0FBRUEsSUFBSUMsU0FBSjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVlDLElBQVosRUFBNkI7QUFDOUMsTUFBSSxDQUFDRCxJQUFMLEVBQVcsT0FBTyxFQUFQO0FBQ1gsTUFBTUUsUUFBa0IsR0FBRyxFQUEzQjtBQUNBQyxRQUFNLENBQUNDLElBQVAsQ0FBWUosSUFBWixFQUFrQkssT0FBbEIsQ0FBMEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDLFlBQU8sT0FBT04sSUFBSSxDQUFDTSxHQUFELENBQWxCO0FBQ0UsV0FBSyxTQUFMO0FBQ0VKLGdCQUFRLENBQUNLLElBQVQsV0FBaUJELEdBQWpCLGVBQXlCTixJQUFJLENBQUNNLEdBQUQsQ0FBSixHQUFZLE1BQVosR0FBcUIsT0FBOUM7QUFDQTs7QUFDRixXQUFLLFFBQUw7QUFDRVIsaUJBQVMsQ0FBQ1MsSUFBVixDQUFlO0FBQ2JELGFBQUcsWUFBS0wsSUFBTCxjQUFhSyxHQUFiLENBRFU7QUFFYkUsZUFBSyxFQUFFQyxzRUFBVyxDQUFDVCxJQUFJLENBQUNNLEdBQUQsQ0FBTCxFQUFZLENBQVo7QUFGTCxTQUFmO0FBSUFKLGdCQUFRLENBQUNLLElBQVQsV0FBaUJELEdBQWpCLGVBQXlCTCxJQUF6QixjQUFpQ0ssR0FBakM7QUFDQTs7QUFDRixXQUFLLFFBQUw7QUFDRUosZ0JBQVEsQ0FBQ0ssSUFBVCxXQUFpQkQsR0FBakIsZUFBeUJOLElBQUksQ0FBQ00sR0FBRCxDQUE3QjtBQUNBOztBQUNGLFdBQUssUUFBTDtBQUNFSixnQkFBUSxDQUFDSyxJQUFULFdBQWlCRCxHQUFqQixlQUF5Qk4sSUFBSSxDQUFDTSxHQUFELENBQTdCO0FBQ0E7O0FBQ0Y7QUFDRTtBQWxCSjtBQW9CRCxHQXJCRDtBQXNCQSxTQUFPSixRQUFRLENBQUNRLElBQVQsQ0FBYyxHQUFkLENBQVA7QUFDRCxDQTFCRDs7QUE0Qk8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxVQUFELEVBQTZCO0FBQzFELE1BQUlBLFVBQVUsQ0FBQ1gsSUFBZixFQUFxQjtBQUNuQixXQUFPWSx5RUFBYyxDQUFDO0FBQ3BCQyxrQkFBWSxFQUFFakIsbUJBRE07QUFFcEJrQixlQUFTLEVBQUVILFVBQVUsQ0FBQ0csU0FGRjtBQUdwQkMsZUFBUyxFQUFFSixVQUFVLENBQUNJLFNBSEY7QUFJcEJmLFVBQUksRUFBRVcsVUFBVSxDQUFDWCxJQUpHO0FBS3BCZ0IsV0FBSyxFQUFHTCxVQUFVLENBQUNLLEtBTEM7QUFNcEJDLGtCQUFZLEVBQUVuQixVQUFVLENBQUM7QUFDdkJvQixjQUFNLEVBQUVQLFVBQVUsQ0FBQ087QUFESSxPQUFELEVBRXJCUCxVQUFVLENBQUNYLElBRlUsQ0FOSjtBQVNwQm1CLGFBQU8sRUFBRXJCLFVBQVUsQ0FBQ2EsVUFBVSxDQUFDWixJQUFaLEVBQWtCWSxVQUFVLENBQUNYLElBQTdCLENBVEM7QUFVcEJvQixlQUFTLEVBQUUsQ0FBQyxDQUFDVCxVQUFVLENBQUNVO0FBVkosS0FBRCxFQVdsQixDQVhrQixDQUFyQjtBQVlELEdBZHlELENBZ0IxRDtBQUNBOzs7QUFDQSxTQUFPLEVBQVA7QUFDRCxDQW5CTTtBQXFCQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFVBQUQsRUFBNkI7QUFBQSxNQUV4REMsT0FGd0QsR0FHdERELFVBSHNELENBRXhEQyxPQUZ3RCxFQUkxRDs7QUFDQTNCLFdBQVMsR0FBRyxFQUFaO0FBRUEsTUFBTTRCLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0MsV0FBRDtBQUFBLFdBQWlCakIsZUFBZSxDQUFDaUIsV0FBRCxDQUFoQztBQUFBLEdBQVosQ0FBWjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQixTQUEvQixFQUEwQ0osR0FBMUM7QUFDQSxNQUFNSyxPQUFPLEdBQUdMLEdBQUcsQ0FBQ2hCLElBQUosTUFBaEI7QUFFQSxNQUFNc0IsTUFBTSxHQUFHbEMsU0FBUyxDQUFDNkIsR0FBVixDQUFjO0FBQUEsUUFBRXJCLEdBQUYsUUFBRUEsR0FBRjtBQUFBLFFBQU9FLEtBQVAsUUFBT0EsS0FBUDtBQUFBLDJCQUEyQkYsR0FBM0IsZUFBbUNFLEtBQW5DO0FBQUEsR0FBZCxFQUEwREUsSUFBMUQsTUFBZjtBQUVBLDZGQUVBc0IsTUFGQSw0RkFRQUQsT0FSQTtBQWVELENBNUJNIiwiZmlsZSI6Ii4vcGFnZXNDb21wb25lbnRzL2VkaXRGb3JtL2Vqc1V0aWxzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZWpzIGZyb20gJ2Vqcy9lanMubWluLmpzJztcbmltcG9ydCB7IElGb3JtU2NoZW1hLCBJU2NoZW1hSXRlbSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL1l1YmlGb3JtL3R5cGUnO1xuaW1wb3J0IHsgZ2V0VmFsdWVTdHIsIHJlbmRlckZvcm1JdGVtIH0gZnJvbSAnLi90ZW1wbGF0ZS9mb3JtSXRlbSc7XG5cbmNvbnN0IGRlZmF1bHRGb3JtSXRlbU5hbWUgPSAnRm9ybUl0ZW0nO1xuXG5sZXQgdmFyUmVjb3JkOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH1bXTtcblxuY29uc3Qgc2V0QXR0clN0ciA9IChhdHRyOiBhbnksIHByb3A6IHN0cmluZykgPT4ge1xuICBpZiAoIWF0dHIpIHJldHVybiAnJ1xuICBjb25zdCBhdHRyTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgT2JqZWN0LmtleXMoYXR0cikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgc3dpdGNoKHR5cGVvZiBhdHRyW2tleV0pIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBhdHRyTGlzdC5wdXNoKGAke2tleX09eyR7YXR0cltrZXldID8gJ3RydWUnIDogJ2ZhbHNlJ319YCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgdmFyUmVjb3JkLnB1c2goe1xuICAgICAgICAgIGtleTogYCR7cHJvcH1fJHtrZXl9YCxcbiAgICAgICAgICB2YWx1ZTogZ2V0VmFsdWVTdHIoYXR0cltrZXldLCAwKSxcbiAgICAgICAgfSlcbiAgICAgICAgYXR0ckxpc3QucHVzaChgJHtrZXl9PXske3Byb3B9XyR7a2V5fX1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBhdHRyTGlzdC5wdXNoKGAke2tleX09JyR7YXR0cltrZXldfSdgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBhdHRyTGlzdC5wdXNoKGAke2tleX09eyR7YXR0cltrZXldfX1gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGF0dHJMaXN0LmpvaW4oJyAnKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc1NjaGVtYUl0ZW0gPSAoc2NoZW1hSXRlbTogSVNjaGVtYUl0ZW0pID0+IHtcbiAgaWYgKHNjaGVtYUl0ZW0ucHJvcCkge1xuICAgIHJldHVybiByZW5kZXJGb3JtSXRlbSh7XG4gICAgICBmb3JtSXRlbU5hbWU6IGRlZmF1bHRGb3JtSXRlbU5hbWUsXG4gICAgICBpbm5lckh0bWw6IHNjaGVtYUl0ZW0uaW5uZXJIdG1sLFxuICAgICAgY29tcG9uZW50OiBzY2hlbWFJdGVtLmNvbXBvbmVudCxcbiAgICAgIHByb3A6IHNjaGVtYUl0ZW0ucHJvcCxcbiAgICAgIGxhYmVsOiAoc2NoZW1hSXRlbS5sYWJlbCBhcyBzdHJpbmcpLFxuICAgICAgZm9ybUl0ZW1BdHRyOiBzZXRBdHRyU3RyKHtcbiAgICAgICAgaGlkZGVuOiBzY2hlbWFJdGVtLmhpZGRlbixcbiAgICAgIH0sIHNjaGVtYUl0ZW0ucHJvcCksXG4gICAgICBhdHRyU3RyOiBzZXRBdHRyU3RyKHNjaGVtYUl0ZW0uYXR0ciwgc2NoZW1hSXRlbS5wcm9wKSxcbiAgICAgIG5lZWRSdWxlczogISFzY2hlbWFJdGVtLnJ1bGVzIFxuICAgIH0sIDMpO1xuICB9IFxuXG4gIC8vIGRlZmF1bHRcbiAgLy8gY29uc3QgZGF0YSA9IHNjaGVtYUl0ZW1cbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zRm9ybVNjaGVtYSA9IChmb3JtU2NoZW1hOiBJRm9ybVNjaGVtYSkgPT4ge1xuICBjb25zdCB7XG4gICAgY29udGVudCxcbiAgfSA9IGZvcm1TY2hlbWE7XG4gIC8vIGluaXQgdmFyUmVjb3JkXG4gIHZhclJlY29yZCA9IFtdO1xuXG4gIGNvbnN0IHN0ciA9IGNvbnRlbnQubWFwKChjb250ZW50SXRlbSkgPT4gdHJhbnNTY2hlbWFJdGVtKGNvbnRlbnRJdGVtKSk7XG4gIGNvbnNvbGUubG9nKCd0cmFuc0Zvcm1TY2hlbWEnLCAnY29udGVudCcsIHN0cilcbiAgY29uc3QgZm9ybVN0ciA9IHN0ci5qb2luKGBcbmApO1xuICBjb25zdCB2YXJTdHIgPSB2YXJSZWNvcmQubWFwKCh7a2V5LCB2YWx1ZX0pID0+IGBjb25zdCAke2tleX0gPSR7dmFsdWV9YCkuam9pbihgXG5gKTtcbiAgcmV0dXJuIGAvLyDmraTmqKHniYjkuLroh6rliqjnlJ/miJBcbmNvbnN0IEFwcCA9ICgpID0+IHtcbiR7dmFyU3RyfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT7mqKHmnb/ooajljZU8L2gxPlxuICAgICAgPEZvcm0+XG4ke2Zvcm1TdHJ9XG4gICAgICA8L0Zvcm0+XG4gICAgPC8+XG4gIClcbn1cblxuYDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pagesComponents/editForm/ejsUtils/index.ts\n");

/***/ })

})