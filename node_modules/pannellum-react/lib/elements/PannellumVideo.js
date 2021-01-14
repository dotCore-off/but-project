'use strict';

exports.__esModule = true;

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _video = require('video.js');

var _video2 = _interopRequireDefault(_video);

require('../pannellum/css/video-js.css');

require('../pannellum/css/pannellum.css');

require('../pannellum/css/style-textInfo.css');

require('../pannellum/js/libpannellum.js');

require('../pannellum/js/RequestAnimationFrame');

require('../pannellum/js/pannellum.js');

require('../pannellum/js/videojs-pannellum-plugin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PannellumVideo = (_temp = _class = function (_Component) {
  _inherits(PannellumVideo, _Component);

  function PannellumVideo(props) {
    _classCallCheck(this, PannellumVideo);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.renderVideo = function (state) {
      var children = _this.props.children;
      // make the array of sub components, even if its one, it become array of one 

      var hotspots = [].concat(children);
      var hotspotArray = [];
      if (Array.isArray(hotspots)) {
        hotspots.map(function (hotspot) {
          switch (hotspot.props.type) {

            case "info":
              return hotspotArray.push({
                "id": Math.random().toString(36).substr(2, 9),
                "type": hotspot.props.type,
                "pitch": hotspot.props.pitch ? hotspot.props.pitch : 10,
                "yaw": hotspot.props.yaw ? hotspot.props.yaw : 10,
                "text": hotspot.props.text ? hotspot.props.text : "",
                "URL": hotspot.props.URL ? hotspot.props.URL : ""
              });
            case "custom":
              return hotspotArray.push({
                "id": Math.random().toString(36).substr(2, 9),
                "pitch": hotspot.props.pitch ? hotspot.props.pitch : 10,
                "yaw": hotspot.props.yaw ? hotspot.props.yaw : 10,
                "cssClass": hotspot.props.cssClass ? hotspot.props.cssClass : 'tooltipcss',
                "createTooltipFunc": hotspot.props.tooltip ? hotspot.props.tooltip : _this.hotspotTooltip,
                "createTooltipArgs": hotspot.props.tooltipArg ? hotspot.props.tooltipArg : {},
                "clickHandlerFunc": hotspot.props.handleClick ? hotspot.props.handleClick : _this.handleClickHotspot,
                "clickHandlerArgs": hotspot.props.handleClickArg ? hotspot.props.handleClickArg : { name: "test" }
              });
            default:
              return [];
          }
        });
      }

      if (state === "update") {

        _this.video = (0, _video2.default)(_this.videoNode);
        var cuurentHS = [].concat(_this.video.pnlmViewer.getConfig().hotSpots);
        _this.video.pnlmViewer.setYaw(_this.props.yaw);
        _this.video.pnlmViewer.setPitch(_this.props.pitch);
        _this.video.pnlmViewer.setHfov(_this.props.hfov);
        _this.video.pnlmViewer.setHfovBounds([_this.props.minHfov, _this.props.maxHfov]);

        //remove all hotspots
        cuurentHS.map(function (hs) {
          return _this.video.pnlmViewer.removeHotSpot(hs.id);
        });
        // Adding new hotspots
        hotspotArray.map(function (hs) {
          return _this.video.pnlmViewer.addHotSpot(hs);
        });
        // setting new video
        _this.video.src({
          type: 'video/mp4',
          src: _this.props.video
        });
        return _this.video.play();
      } else {
        _this.video = (0, _video2.default)(_this.videoNode, {
          loop: _this.props.loop,
          autoplay: _this.props.autoplay,
          controls: _this.props.controls,
          muted: _this.props.muted,
          plugins: {
            pannellum: {
              yaw: _this.props.yaw,
              pitch: _this.props.pitch,
              hfov: _this.props.hfov,
              minHfov: _this.props.minHfov,
              maxHfov: _this.props.maxHfov,
              minPitch: _this.props.minPitch,
              maxPitch: _this.props.maxPitch,
              minYaw: _this.props.minYaw,
              maxYaw: _this.props.maxYaw,
              hotSpotDebug: _this.props.hotspotDebug,
              autoRotate: _this.props.autoRotate,
              mouseZoom: _this.props.mouseZoom,
              hotSpots: hotspotArray
            }
          }
        });
        _this.video.src({ type: 'video/mp4', src: _this.props.video });
        _this.video.play();
      }
    };

    _this.componentDidMount = function () {
      _this.renderVideo("mount");
    };

    _this.handleClickHotspot = function (e, args) {
      console.log("hotspot clicked", args.name);
    };

    _this.hotspotTooltip = function (hotSpotDiv, args) {
      hotSpotDiv.setAttribute("id", "textInfo");
      var hDiv = document.createElement('div');
      hDiv.classList.add('hotspot');
      var outDiv = document.createElement('div');
      outDiv.classList.add('out');
      var inDiv = document.createElement('div');
      inDiv.classList.add('in');
      var imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      hotSpotDiv.appendChild(hDiv);
      hDiv.appendChild(inDiv);
      hDiv.appendChild(outDiv);
    };

    _this.getViewer = function () {
      return _this.video.pnlmViewer;
    };

    _this.state = {
      id: Math.random().toString(36).substr(2, 9)
    };
    return _this;
  }

  PannellumVideo.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    // videojs(this.videoNode).dispose();
    // this.videoNode.setAttribute("src", this.props.video );
    this.renderVideo("update");
  };

  PannellumVideo.prototype.componentWillUnmount = function componentWillUnmount() {
    (0, _video2.default)(this.videoNode).dispose();
  };

  PannellumVideo.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        width = _props.width,
        height = _props.height,
        video = _props.video;

    var divStyle = {
      width: width,
      height: height
    };
    return _react2.default.createElement(
      'div',
      { 'data-vjs-player': true },
      _react2.default.createElement('video', {
        id: this.props.id ? this.props.id : this.state.id,
        className: 'video-js vjs-default-skin vjs-big-play-centered',
        ref: function ref(node) {
          return _this2.videoNode = node;
        },
        preload: 'none',
        crossOrigin: 'anonymous',
        style: divStyle
      })
    );
  };

  return PannellumVideo;
}(_react.Component), _class.defaultProps = {
  children: [],
  width: '100%',
  height: '400px',
  video: '',
  yaw: 0,
  pitch: 0,
  hfov: 100,
  minHfov: 50,
  maxHfov: 150,
  minPitch: -90,
  maxPitch: 90,
  minYaw: -180,
  maxYaw: 180,
  hotspotDebug: false,
  autoRotate: 0,
  mouseZoom: true,
  loop: false,
  autoplay: true,
  controls: false,
  muted: true
}, _temp);
PannellumVideo.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  id: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  video: _propTypes2.default.string,
  yaw: _propTypes2.default.number,
  pitch: _propTypes2.default.number,
  hfov: _propTypes2.default.number,
  minHfov: _propTypes2.default.number,
  maxHfov: _propTypes2.default.number,
  minPitch: _propTypes2.default.number,
  maxPitch: _propTypes2.default.number,
  minYaw: _propTypes2.default.number,
  maxYaw: _propTypes2.default.number,
  hotspotDebug: _propTypes2.default.bool,
  autoRotate: _propTypes2.default.number,
  mouseZoom: _propTypes2.default.bool,
  loop: _propTypes2.default.bool,
  autoplay: _propTypes2.default.bool,
  controls: _propTypes2.default.bool,
  muted: _propTypes2.default.bool,
  tooltip: _propTypes2.default.func,
  tooltipArg: _propTypes2.default.object,
  handleClick: _propTypes2.default.func,
  handleClickArg: _propTypes2.default.object,
  cssClass: _propTypes2.default.string
} : {};
exports.default = PannellumVideo;
module.exports = exports['default'];