var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import propTypes from "prop-types";
import React, { PureComponent } from "react";
import "../pannellum/css/pannellum.css";
import "../pannellum/css/style-textInfo.css";

import "../pannellum/js/libpannellum.js";
import "../pannellum/js/pannellum.js";
import "../pannellum/js/RequestAnimationFrame";

var Pannellum = (_temp = _class = function (_PureComponent) {
  _inherits(Pannellum, _PureComponent);

  function Pannellum(props) {
    _classCallCheck(this, Pannellum);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.renderImage = function (state) {
      var children = _this.props.children;
      // make the array of sub components, even if its one, it become array of one

      var hotspots = [].concat(children);
      var hotspotArray = [];
      if (Array.isArray(hotspots)) {
        hotspots.map(function (hotspot) {
          switch (hotspot.props.type) {
            case "info":
              return hotspotArray.push({
                id: Math.random().toString(36).substr(2, 9),
                type: hotspot.props.type,
                pitch: hotspot.props.pitch ? hotspot.props.pitch : 10,
                yaw: hotspot.props.yaw ? hotspot.props.yaw : 10,
                text: hotspot.props.text ? hotspot.props.text : "",
                URL: hotspot.props.URL ? hotspot.props.URL : ""
              });
            case "custom":
              return hotspotArray.push({
                id: Math.random().toString(36).substr(2, 9),
                pitch: hotspot.props.pitch ? hotspot.props.pitch : 10,
                yaw: hotspot.props.yaw ? hotspot.props.yaw : 10,
                cssClass: hotspot.props.cssClass ? hotspot.props.cssClass : "tooltipcss",
                createTooltipFunc: hotspot.props.tooltip ? hotspot.props.tooltip : _this.hotspotTooltip,
                createTooltipArgs: hotspot.props.tooltipArg ? hotspot.props.tooltipArg : {},
                clickHandlerFunc: hotspot.props.handleClick ? hotspot.props.handleClick : _this.handleClickHotspot,
                clickHandlerArgs: hotspot.props.handleClickArg ? hotspot.props.handleClickArg : { name: "test" }
              });
            default:
              return [];
          }
        });
      }

      var jsonConfig = {
        type: "equirectangular",
        panorama: _this.props.image,
        haov: _this.props.haov,
        vaov: _this.props.vaov,
        vOffset: _this.props.vOffset,
        yaw: _this.props.yaw,
        pitch: _this.props.pitch,
        hfov: _this.props.hfov,
        minHfov: _this.props.minHfov,
        maxHfov: _this.props.maxHfov,
        minPitch: _this.props.minPitch,
        maxPitch: _this.props.maxPitch,
        minYaw: _this.props.minYaw,
        maxYaw: _this.props.maxYaw,
        autoRotate: _this.props.autoRotate,
        compass: _this.props.compass,
        preview: _this.props.preview,
        previewTitle: _this.props.previewTitle,
        previewAuthor: _this.props.previewAuthor,
        author: _this.props.author,
        title: _this.props.title,
        autoLoad: _this.props.autoLoad,
        orientationOnByDefault: _this.props.orientationOnByDefault,
        showZoomCtrl: _this.props.showZoomCtrl,
        keyboardZoom: _this.props.keyboardZoom,
        mouseZoom: _this.props.mouseZoom,
        draggable: _this.props.draggable,
        disableKeyboardCtrl: _this.props.disableKeyboardCtrl,
        showFullscreenCtrl: _this.props.showFullscreenCtrl,
        showControls: _this.props.showControls,
        hotSpotDebug: _this.props.hotspotDebug,
        hotSpots: hotspotArray,
        onRender: _this.props.onRender
      };

      Object.keys(jsonConfig).forEach(function (key) {
        return jsonConfig[key] === "" && delete jsonConfig[key];
      });
      // this.setState({ jsonConfig });

      if (state === "update") {
        _this.panorama.destroy();
      }
      _this.panorama = pannellum.viewer(_this.props.id ? _this.props.id : _this.state.id, jsonConfig);

      _this.panorama.on("load", _this.props.onLoad);
      _this.panorama.on("scenechange", _this.props.onScenechange);
      _this.panorama.on("scenechangefadedone", _this.props.onScenechangefadedone);
      _this.panorama.on("error", _this.props.onError);
      _this.panorama.on("errorcleared", _this.props.onErrorcleared);
      _this.panorama.on("mousedown", _this.props.onMousedown);
      _this.panorama.on("mouseup", _this.props.onMouseup);
      _this.panorama.on("touchstart", _this.props.onTouchstart);
      _this.panorama.on("touchend", _this.props.onTouchend);
    };

    _this.componentDidMount = function () {
      _this.renderImage("mount");
    };

    _this.handleClickHotspot = function (e, args) {
      console.log("hotspot clicked", args.name);
    };

    _this.hotspotTooltip = function (hotSpotDiv, args) {
      hotSpotDiv.setAttribute("id", "textInfo");
      var hDiv = document.createElement("div");
      hDiv.classList.add("hotspot");
      var outDiv = document.createElement("div");
      outDiv.classList.add("out");
      var inDiv = document.createElement("div");
      inDiv.classList.add("in");
      var imageDiv = document.createElement("div");
      imageDiv.classList.add("image");
      hotSpotDiv.appendChild(hDiv);
      hDiv.appendChild(inDiv);
      hDiv.appendChild(outDiv);
    };

    _this.getViewer = function () {
      return _this.panorama;
    };

    _this.forceRender = function () {
      _this.renderImage("update");
    };

    _this.state = {
      id: Math.random().toString(36).substr(2, 9)
    };
    return _this;
  }

  Pannellum.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.image !== this.props.image || prevProps.width !== this.props.width || prevProps.height !== this.props.height || prevProps.compass !== this.props.compass || prevProps.title !== this.props.title || prevProps.author !== this.props.author || prevProps.preview !== this.props.preview || prevProps.previewTitle !== this.props.previewTitle || prevProps.previewAuthor !== this.props.previewAuthor || prevProps.showZoomCtrl !== this.props.showZoomCtrl || prevProps.showFullscreenCtrl !== this.props.showFullscreenCtrl || prevProps.showControls !== this.props.showControls || prevProps.children.length !== this.props.children.length) {
      this.renderImage("update");
    }
    if (prevProps.maxYaw !== this.props.maxYaw || prevProps.minYaw !== this.props.minYaw || prevProps.maxPitch !== this.props.maxPitch || prevProps.minPitch !== this.props.minPitch || prevProps.maxHfov !== this.props.maxHfov || prevProps.minHfov !== this.props.minHfov) {
      this.panorama.setYawBounds([this.props.minYaw, this.props.maxYaw]);
      this.panorama.setPitchBounds([this.props.minPitch, this.props.maxPitch]);
      this.panorama.setHfovBounds([this.props.minHfov, this.props.maxHfov]);
    }
    if (prevProps.yaw !== this.props.yaw) {
      this.panorama.setYaw(this.props.yaw);
    }
    if (prevProps.pitch !== this.props.pitch) {
      this.panorama.setPitch(this.props.pitch);
    }
    if (prevProps.hfov !== this.props.hfov) {
      this.panorama.setHfov(this.props.hfov);
    }
  };

  Pannellum.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        width = _props.width,
        height = _props.height;

    var divStyle = {
      width: width,
      height: height
    };
    return React.createElement("div", {
      id: this.props.id ? this.props.id : this.state.id,
      style: divStyle,
      ref: function ref(node) {
        return _this2.imageNode = node;
      }
    });
  };

  return Pannellum;
}(PureComponent), _class.defaultProps = {
  children: [],
  width: "100%",
  height: "400px",
  image: "",
  haov: 360,
  vaov: 180,
  vOffset: 0,
  yaw: 0,
  pitch: 0,
  hfov: 100,
  minHfov: 50,
  maxHfov: 150,
  minPitch: -90,
  maxPitch: 90,
  minYaw: -180,
  maxYaw: 180,
  autoRotate: 0,
  compass: false,
  preview: "",
  previewTitle: "",
  previewAuthor: "",
  title: "",
  author: "",
  autoLoad: false,
  orientationOnByDefault: false,
  showZoomCtrl: true,
  keyboardZoom: true,
  mouseZoom: true,
  draggable: true,
  disableKeyboardCtrl: false,
  showFullscreenCtrl: true,
  showControls: true,
  onLoad: function onLoad() {},
  onScenechange: function onScenechange() {},
  onScenechangefadedone: function onScenechangefadedone() {},
  onError: function onError() {},
  onErrorcleared: function onErrorcleared() {},
  onMousedown: function onMousedown() {},
  onMouseup: function onMouseup() {},
  onTouchstart: function onTouchstart() {},
  onTouchend: function onTouchend() {},
  hotspotDebug: false,
  onRender: null
}, _temp);
Pannellum.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  id: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  image: propTypes.string,
  haov: propTypes.number,
  vaov: propTypes.number,
  vOffset: propTypes.number,
  yaw: propTypes.number,
  pitch: propTypes.number,
  hfov: propTypes.number,
  minHfov: propTypes.number,
  maxHfov: propTypes.number,
  minPitch: propTypes.number,
  maxPitch: propTypes.number,
  minYaw: propTypes.number,
  maxYaw: propTypes.number,
  autoRotate: propTypes.number,
  compass: propTypes.bool,
  preview: propTypes.string,
  previewTitle: propTypes.string,
  previewAuthor: propTypes.string,
  title: propTypes.string,
  author: propTypes.string,
  autoLoad: propTypes.bool,
  orientationOnByDefault: propTypes.bool,
  showZoomCtrl: propTypes.bool,
  keyboardZoom: propTypes.bool,
  mouseZoom: propTypes.bool,
  draggable: propTypes.bool,
  disableKeyboardCtrl: propTypes.bool,
  showFullscreenCtrl: propTypes.bool,
  showControls: propTypes.bool,
  onLoad: propTypes.func,
  onScenechange: propTypes.func,
  onScenechangefadedone: propTypes.func,
  onError: propTypes.func,
  onErrorcleared: propTypes.func,
  onMousedown: propTypes.func,
  onMouseup: propTypes.func,
  onTouchstart: propTypes.func,
  onTouchend: propTypes.func,
  hotspotDebug: propTypes.bool,
  tooltip: propTypes.func,
  tooltipArg: propTypes.object,
  handleClick: propTypes.func,
  handleClickArg: propTypes.object,
  cssClass: propTypes.string,
  onRender: propTypes.func
} : {};

Pannellum.Hotspot = function () {};
Pannellum.Hotspot = function () {};
export default Pannellum;