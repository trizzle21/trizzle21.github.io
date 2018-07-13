webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(33);
	var globals_1 = __webpack_require__(179);
	globals_1.initGlobals();
	var Root_1 = __webpack_require__(206);
	ReactDOM.render(React.createElement(Root_1.Root, null), document.getElementById('app'));
	console.info('Initialized ventura.');


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var redux_1 = __webpack_require__(180);
	var redux_thunk_1 = __webpack_require__(201);
	var Config_1 = __webpack_require__(202);
	var gamesReducer_1 = __webpack_require__(204);
	function initGlobals() {
	    exports.config = new Config_1.Config();
	    exports.store = redux_1.createStore(redux_1.combineReducers({
	        games: gamesReducer_1.gamesReducer,
	    }), redux_1.applyMiddleware(redux_thunk_1.default));
	}
	exports.initGlobals = initGlobals;


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lodash_1 = __webpack_require__(203);
	var Config = (function () {
	    function Config() {
	        this.gamesDataURL = "https://clientupdate-v6.cursecdn.com/Feed/games/v10/games.json";
	        this.gameIconURLTemplate = lodash_1.template("https://clientupdate-v6.cursecdn.com/GameAssets/<%= gameID %>/Icon64.png");
	    }
	    return Config;
	}());
	exports.Config = Config;


/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var games_1 = __webpack_require__(205);
	var initialState = {
	    games: [],
	    isFetching: false,
	    progress: 0
	};
	function gamesReducer(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case games_1.FETCH_GAMES_STARTED:
	            return __assign({}, state, { isFetching: true, progress: .5 });
	        case games_1.FETCH_GAMES_FAILED:
	            return __assign({}, state, { isFetching: false });
	        case games_1.FETCH_GAMES_SUCCEEDED:
	            return __assign({}, state, { games: action.game, isFetching: false, progress: 1 });
	    }
	    return state;
	}
	exports.gamesReducer = gamesReducer;


/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var globals_1 = __webpack_require__(179);
	exports.FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
	function fetchGamesStarted() {
	    return { type: exports.FETCH_GAMES_STARTED };
	}
	exports.FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
	function fetchGamesSucceeded(Game) {
	    return { type: exports.FETCH_GAMES_SUCCEEDED, game: Game };
	}
	exports.FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
	function fetchGamesFailed() {
	    return { type: exports.FETCH_GAMES_FAILED };
	}
	function comparator(a, b) {
	    return a.Order - b.Order;
	}
	function turnDataIntoGameArray(gameArray) {
	    var length = gameArray.length;
	    var Games = new Array(length);
	    for (var _i = 0, gameArray_1 = gameArray; _i < gameArray_1.length; _i++) {
	        var a = gameArray_1[_i];
	        var game = void 0;
	        Games.push({
	            ID: a.ID,
	            Order: a.Order,
	            Name: a.Name,
	            SupportsAddons: a.SupportsAddons,
	            SupportsVoice: a.SupportsAddons,
	            Icon: globals_1.config.gameIconURLTemplate({ 'gameID': a.ID }),
	            Slug: a.Slug,
	            GameFiles: a.GameFiles,
	            Category: a.CategorySections,
	        });
	    }
	    return Games.sort(comparator);
	}
	// Fetch Games Thunk
	function fetchGames() {
	    return function (dispatch, getState) {
	        dispatch(fetchGamesStarted());
	        fetch(globals_1.config.gamesDataURL)
	            .then(function (response) { return response.json(); })
	            .then(function (json) { return dispatch(fetchGamesSucceeded(turnDataIntoGameArray(json['data']))); }, function (json) { return dispatch(fetchGamesFailed()); });
	    };
	}
	exports.fetchGames = fetchGames;


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var react_router_1 = __webpack_require__(207);
	var react_redux_1 = __webpack_require__(262);
	var globals_1 = __webpack_require__(179);
	var App_1 = __webpack_require__(269);
	var GameListContainer_1 = __webpack_require__(270);
	var Root = (function (_super) {
	    __extends(Root, _super);
	    function Root() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Root.prototype.render = function () {
	        return (React.createElement(react_redux_1.Provider, { store: globals_1.store },
	            React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
	                React.createElement(react_router_1.Route, { path: '/Curse', component: App_1.App },
	                    React.createElement(react_router_1.IndexRoute, { component: GameListContainer_1.GameListContainer })),
	                React.createElement(react_router_1.Route, { path: 'Curse/game/:GameID', component: App_1.App },
	                    React.createElement(react_router_1.IndexRoute, { component: GameListContainer_1.GamePageContainer })))));
	    };
	    return Root;
	}(React.Component));
	exports.Root = Root;


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    App.prototype.render = function () {
	        return (React.createElement("div", null, this.props.children));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var redux_1 = __webpack_require__(180);
	var react_redux_1 = __webpack_require__(262);
	var GameList_1 = __webpack_require__(271);
	var GamePage_1 = __webpack_require__(272);
	var games_1 = __webpack_require__(205);
	function mapStateToProps(state, props) {
	    return {
	        games: state.games.games,
	        isFetching: state.games.isFetching,
	        progress: state.games.progress,
	    };
	}
	;
	function mapDispatchToProps(dispatch) {
	    return redux_1.bindActionCreators({
	        fetchGames: games_1.fetchGames,
	    }, dispatch);
	}
	;
	// tslint:disable-next-line:variable-name
	exports.GameListContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GameList_1.GameList);
	exports.GamePageContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GamePage_1.GamePage);


/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var react_router_1 = __webpack_require__(207);
	var GameList = (function (_super) {
	    __extends(GameList, _super);
	    function GameList() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    GameList.prototype.componentDidMount = function () {
	        var fetchGames = this.props.fetchGames;
	        fetchGames();
	    };
	    GameList.prototype.render = function () {
	        //Uses Opacity as progress.
	        if (this.props.isFetching) {
	            return (React.createElement("div", { className: 'GameList--root' },
	                React.createElement("img", { src: "/assets/images/flame.png" }),
	                React.createElement("br", null),
	                React.createElement("h2", { style: { opacity: this.props.progress } }, "Loading...")));
	        }
	        else {
	            return (React.createElement("div", { className: 'GameList--root' },
	                React.createElement("img", { src: "/assets/images/flame.png" }),
	                React.createElement("h1", null, "Curse Games"),
	                React.createElement("ul", null, this.props.games.map(function (game) {
	                    return React.createElement(react_router_1.Link, { className: "Link", to: "Curse/game/" + game.ID, key: game.ID },
	                        " ",
	                        React.createElement("div", { className: "Game" },
	                            React.createElement("div", { className: "leftSideSquare" },
	                                React.createElement("img", { className: "icon", src: game.Icon }),
	                                React.createElement("div", { className: "Title" }, game.Name)),
	                            React.createElement("div", { className: "rightSideSquare" },
	                                React.createElement("div", null,
	                                    "Supports AddOn: ",
	                                    game.SupportsAddons.toString()),
	                                React.createElement("div", null,
	                                    "Supports Video: ",
	                                    game.SupportsVoice.toString()))));
	                }))));
	        }
	    };
	    return GameList;
	}(React.Component));
	exports.GameList = GameList;


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var react_router_1 = __webpack_require__(207);
	var GamePage = (function (_super) {
	    __extends(GamePage, _super);
	    function GamePage() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    GamePage.prototype.componentDidMount = function () {
	        //Checks if games is empty
	        if (this.props.games.length === 0) {
	            this.props.fetchGames();
	        }
	    };
	    GamePage.prototype.search = function (nameKey, gameList) {
	        //Searches for right Game in list
	        for (var i = 0; i < gameList.length; i++) {
	            if (gameList[i].ID == nameKey) {
	                return gameList[i];
	            }
	        }
	    };
	    GamePage.prototype.render = function () {
	        var game = this.search(this.props.params.GameID, this.props.games);
	        if (this.props.games.length !== 0) {
	            return (React.createElement("div", null,
	                React.createElement(react_router_1.Link, { to: "/Curse", className: "Return" }, "Return"),
	                React.createElement("div", { className: "GameData" },
	                    React.createElement("div", { className: "GameInfo" },
	                        React.createElement("img", { className: "GameImage", src: game.Icon }),
	                        React.createElement("div", { className: "GameNameInfo" },
	                            React.createElement("div", { className: "GameTitle" }, game.Name),
	                            React.createElement("div", { className: "Slug" }, game.Slug)),
	                        React.createElement("div", null,
	                            "Supports AddOn: ",
	                            game.SupportsAddons.toString()),
	                        React.createElement("div", null,
	                            "Supports Video: ",
	                            game.SupportsVoice.toString())),
	                    React.createElement("div", { className: "GameFiles" },
	                        React.createElement("h4", { className: "subtitle" }, "Game Files"),
	                        game.GameFiles.map(function (file) {
	                            return (React.createElement("div", { className: "GameFile", key: file.FileName }, file.FileName));
	                        })),
	                    React.createElement("div", { className: "Categories" },
	                        React.createElement("h4", { className: "subtitle" }, "Categories"),
	                        game.Category.map(function (file) {
	                            return React.createElement("div", { className: "Category", key: file }, file.Name);
	                        })))));
	        }
	        else {
	            return (React.createElement("div", { className: 'GameList--root' },
	                React.createElement("img", { src: "/assets/images/flame.png" }),
	                React.createElement("br", null),
	                React.createElement("h2", { style: { opacity: this.props.progress } }, "Loading...")));
	        }
	    };
	    return GamePage;
	}(React.Component));
	exports.GamePage = GamePage;


/***/ }

});
//# sourceMappingURL=app.js.map