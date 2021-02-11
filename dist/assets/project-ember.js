'use strict';



;define("project-ember/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("project-ember/app", ["exports", "ember-resolver", "ember-load-initializers", "project-ember/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("project-ember/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("project-ember/components/footer", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield}}
  
  <footer class="footer">
      <span class="todo-count">
          <strong>{{this.todos.incomplete.length}}</strong>
          {{#if this.todos.todoCountIsOne}}{{!--- if this.todos.todoCountIsOne "todo" "todos" ---}}
          todo
          {{else}}
          todos
          {{/if}}
          left
      </span>
      <ul class="filters">
          <li>
              <LinkTo @route='index'>All</LinkTo>
              <LinkTo @route='active'>Active</LinkTo>
              <LinkTo @route='completed'>Completed</LinkTo>
          </li>
      </ul>
  
      <button type="button" class="clear-completed"{{on 'click' this.todos.clearCompleted}}>
          Clear Completed
      </button>
  </footer>
  */
  {
    "id": "rpN5/43X",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[18,1,null],[2,\"\\n\\n\"],[10,\"footer\"],[14,0,\"footer\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"todo-count\"],[12],[2,\"\\n        \"],[10,\"strong\"],[12],[1,[32,0,[\"todos\",\"incomplete\",\"length\"]]],[13],[2,\"\\n        \"],[6,[37,0],[[32,0,[\"todos\",\"todoCountIsOne\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"\\n        todo\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        todos\\n\"]],\"parameters\":[]}]]],[2,\"        left\\n    \"],[13],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"filters\"],[12],[2,\"\\n        \"],[10,\"li\"],[12],[2,\"\\n            \"],[8,\"link-to\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"All\"]],\"parameters\":[]}]]],[2,\"\\n            \"],[8,\"link-to\",[],[[\"@route\"],[\"active\"]],[[\"default\"],[{\"statements\":[[2,\"Active\"]],\"parameters\":[]}]]],[2,\"\\n            \"],[8,\"link-to\",[],[[\"@route\"],[\"completed\"]],[[\"default\"],[{\"statements\":[[2,\"Completed\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[11,\"button\"],[24,0,\"clear-completed\"],[24,4,\"button\"],[4,[38,1],[\"click\",[32,0,[\"todos\",\"clearCompleted\"]]],null],[12],[2,\"\\n        Clear Completed\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"if\",\"on\"]}",
    "moduleName": "project-ember/components/footer.hbs"
  });

  let FooterComponent = (_dec = Ember.inject.service('todo-data'), (_class = (_temp = class FooterComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FooterComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, FooterComponent);
});
;define("project-ember/components/header", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield}}
  <input 
   class="new-todo" 
   aria-label="What needs to be done?" 
   placeholder="What needs to be done?" 
   autofocus
   {{on 'keydown' this.onKeyDown}}
  >
  
  
  
  */
  {
    "id": "A5xirjuY",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[18,1,null],[2,\"\\n\"],[11,\"input\"],[24,0,\"new-todo\"],[24,\"aria-label\",\"What needs to be done?\"],[24,\"placeholder\",\"What needs to be done?\"],[24,\"autofocus\",\"\"],[4,[38,0],[\"keydown\",[32,0,[\"onKeyDown\"]]],null],[12],[13],[2,\"\\n\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"on\"]}",
    "moduleName": "project-ember/components/header.hbs"
  });

  let HeaderComponent = (_dec = Ember.inject.service('todo-data'), _dec2 = Ember._action, (_class = (_temp = class HeaderComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    onKeyDown({
      target,
      key
    }) {
      let text = target.value.trim();
      let hasValue = Boolean(text);

      if (key === 'Enter' && hasValue) {
        this.todos.add(text);
        target.value = '';
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "onKeyDown", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "onKeyDown"), _class.prototype)), _class));
  _exports.default = HeaderComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, HeaderComponent);
});
;define("project-ember/components/todo-list", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield}}
  
  <section class="main">
          <input id="mark-all-complete" class="toggle-all" type="checkbox">
          <label for="mark-all-complete">Mark all as complete</label>
  
          <ul class="todo-list">
              {{#each @todos as |todo|}}
              <Todo @todo={{todo}} />
              {{/each}}
          </ul>
  </section>
  */
  {
    "id": "mFwnOOSs",
    "block": "{\"symbols\":[\"todo\",\"&default\",\"@todos\"],\"statements\":[[18,2,null],[2,\"\\n\\n\"],[10,\"section\"],[14,0,\"main\"],[12],[2,\"\\n        \"],[10,\"input\"],[14,1,\"mark-all-complete\"],[14,0,\"toggle-all\"],[14,4,\"checkbox\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[14,\"for\",\"mark-all-complete\"],[12],[2,\"Mark all as complete\"],[13],[2,\"\\n\\n        \"],[10,\"ul\"],[14,0,\"todo-list\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,3]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"todo\",[],[[\"@todo\"],[[32,1]]],null],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"        \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "moduleName": "project-ember/components/todo-list.hbs"
  });

  let TodoListComponent = (_dec = Ember.inject.service('todo-data'), (_class = (_temp = class TodoListComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TodoListComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TodoListComponent);
});
;define("project-ember/components/todo", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield}}
  
  <li class="{{ if @todo.isCompleted 'completed' }}">
      <div class="view">
          <input 
          class="toggle" 
          type="checkbox"
          aria-label="Toggle the completion of this todo"
          checked={{ @todo.isCompleted }}
          {{ on 'change' (fn this.todos.toggleCompletion @todo ) }}
          >
          <label>{{@todo.text}}</label>
          <button 
          type="button" 
          class="destroy" 
          title="Remove this todo"
          ></button>
      </div>
  
      <input autofocus class="edit" value="Todo Text">
  </li>
  */
  {
    "id": "yFZ3dh/Z",
    "block": "{\"symbols\":[\"&default\",\"@todo\"],\"statements\":[[18,1,null],[2,\"\\n\\n\"],[10,\"li\"],[15,0,[31,[[30,[36,0],[[32,2,[\"isCompleted\"]],\"completed\"],null]]]],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"view\"],[12],[2,\"\\n        \"],[11,\"input\"],[24,0,\"toggle\"],[24,\"aria-label\",\"Toggle the completion of this todo\"],[16,\"checked\",[32,2,[\"isCompleted\"]]],[24,4,\"checkbox\"],[4,[38,2],[\"change\",[30,[36,1],[[32,0,[\"todos\",\"toggleCompletion\"]],[32,2]],null]],null],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[1,[32,2,[\"text\"]]],[13],[2,\"\\n        \"],[10,\"button\"],[14,0,\"destroy\"],[14,\"title\",\"Remove this todo\"],[14,4,\"button\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"input\"],[14,\"autofocus\",\"\"],[14,0,\"edit\"],[14,2,\"Todo Text\"],[12],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"if\",\"fn\",\"on\"]}",
    "moduleName": "project-ember/components/todo.hbs"
  });

  let TodoComponent = (_dec = Ember.inject.service('todo-data'), (_class = (_temp = class TodoComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TodoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TodoComponent);
});
;define("project-ember/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("project-ember/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("project-ember/helpers/app-version", ["exports", "project-ember/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("project-ember/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("project-ember/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("project-ember/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("project-ember/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("project-ember/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "project-ember/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("project-ember/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("project-ember/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("project-ember/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("project-ember/initializers/export-application-global", ["exports", "project-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("project-ember/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("project-ember/router", ["exports", "project-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('completed');
    this.route('active');
  });
});
;define("project-ember/routes/active", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ActiveRoute = (_dec = Ember.inject.service('todo-data'), (_class = (_temp = class ActiveRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    model() {
      let todos = this.todos;
      return {
        get activeTodos() {
          return todos.incomplete;
        }

      };
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ActiveRoute;
});
;define("project-ember/routes/completed", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CompletedRoute = (_dec = Ember.inject.service('todo-data'), (_class = (_temp = class CompletedRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    model() {
      let todos = this.todos;
      return {
        get completedTodos() {
          return todos.completed;
        }

      };
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CompletedRoute;
});
;define("project-ember/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_dec = Ember.inject.service('todo-data'), (_class = (_temp = class IndexRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor, this);
    }

    model() {
      let todos = this.todos;
      return {
        get allTodos() {
          return todos.all;
        }

      };
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "todos", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = IndexRoute;
});
;define("project-ember/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("project-ember/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("project-ember/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("project-ember/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("project-ember/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("project-ember/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("project-ember/services/todo-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp, _dec3, _dec4, _dec5, _dec6, _class3, _descriptor3, _temp2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Todo = (_dec = Ember._tracked, _dec2 = Ember._tracked, (_class = (_temp = class Todo {
    constructor(text) {
      _initializerDefineProperty(this, "text", _descriptor, this);

      _initializerDefineProperty(this, "isCompleted", _descriptor2, this);

      this.text = text;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "text", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isCompleted", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class));
  let TodoDataService = (_dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, (_class3 = (_temp2 = class TodoDataService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "todos", _descriptor3, this);
    }

    get all() {
      return this.todos;
    }

    get incomplete() {
      return this.todos.filter(todo => {
        return todo.isCompleted === false;
      });
    }

    get todoCountIsOne() {
      return this.incomplete.length === 1;
    }

    get completed() {
      return this.todos.filter(todo => todo.isCompleted);
    }

    add(text) {
      let newTodo = new Todo(text);
      this.todos = [...this.todos, newTodo];
    }

    clearCompleted() {
      this.todos = this.incomplete;
    }

    toggleCompletion(todo) {
      todo.isCompleted = !todo.isCompleted;
    }

  }, _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "todos", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class3.prototype, "add", [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, "add"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "clearCompleted", [_dec5], Object.getOwnPropertyDescriptor(_class3.prototype, "clearCompleted"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "toggleCompletion", [_dec6], Object.getOwnPropertyDescriptor(_class3.prototype, "toggleCompletion"), _class3.prototype)), _class3));
  _exports.default = TodoDataService;
});
;define("project-ember/templates/active", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bDZBhGuy",
    "block": "{\"symbols\":[\"@model\"],\"statements\":[[1,[30,[36,0],[\"Active\"],null]],[2,\"\\n\"],[8,\"todo-list\",[],[[\"@todos\"],[[32,1,[\"activeTodos\"]]]],null]],\"hasEval\":false,\"upvars\":[\"page-title\"]}",
    "moduleName": "project-ember/templates/active.hbs"
  });

  _exports.default = _default;
});
;define("project-ember/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CQUEnJag",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[2,\"\\n\"],[2,\"\\n\\n\"],[10,\"section\"],[14,0,\"todoapp\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"EmberMDN\"],[13],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"nZoump_dev\"],[13],[2,\"\\n\\n    \"],[8,\"header\",[],[[],[]],null],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n    \"],[8,\"footer\",[],[[],[]],null],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "project-ember/templates/application.hbs"
  });

  _exports.default = _default;
});
;define("project-ember/templates/completed", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "QKLlYOX3",
    "block": "{\"symbols\":[\"@model\"],\"statements\":[[1,[30,[36,0],[\"Completed\"],null]],[2,\"\\n\"],[8,\"todo-list\",[],[[\"@todos\"],[[32,1,[\"completedTodos\"]]]],null]],\"hasEval\":false,\"upvars\":[\"page-title\"]}",
    "moduleName": "project-ember/templates/completed.hbs"
  });

  _exports.default = _default;
});
;define("project-ember/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "62KkBnF3",
    "block": "{\"symbols\":[\"@model\"],\"statements\":[[1,[30,[36,0],[\"Index\"],null]],[2,\"\\n\"],[8,\"todo-list\",[],[[\"@todos\"],[[32,1,[\"allTodos\"]]]],null]],\"hasEval\":false,\"upvars\":[\"page-title\"]}",
    "moduleName": "project-ember/templates/index.hbs"
  });

  _exports.default = _default;
});
;define("project-ember/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("project-ember/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("project-ember/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("project-ember/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('project-ember/config/environment', [], function() {
  var prefix = 'project-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("project-ember/app")["default"].create({"name":"project-ember","version":"0.0.0+5c00b7ce"});
          }
        
//# sourceMappingURL=project-ember.map
