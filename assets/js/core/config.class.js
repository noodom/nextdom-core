
/* This file is part of Jeedom.
 *
 * Jeedom is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Jeedom is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Jeedom. If not, see <http://www.gnu.org/licenses/>.
 */

nextdom.config = function () {
};


nextdom.config.save = function (_params) {
    var paramsRequired = ['configuration'];
    var paramsSpecifics = {};
    try {
        nextdom.private.checkParamsRequired(_params || {}, paramsRequired);
    } catch (e) {
        (_params.error || paramsSpecifics.error || nextdom.private.default_params.error)(e);
        return;
    }
    var params = $.extend({}, nextdom.private.default_params, paramsSpecifics, _params || {});
    var paramsAJAX = nextdom.private.getParamsAJAX(params, 'Config', 'addKey');
    paramsAJAX.data['value'] = json_encode(_params.configuration);
    paramsAJAX.data['plugin'] = _params.plugin || 'core';
    $.ajax(paramsAJAX);
}

nextdom.config.load = function (_params) {
    var paramsRequired = ['configuration'];
    var paramsSpecifics = {global: _params.global || true};
    try {
        nextdom.private.checkParamsRequired(_params || {}, paramsRequired);
    } catch (e) {
        (_params.error || paramsSpecifics.error || nextdom.private.default_params.error)(e);
        return;
    }
    var params = $.extend({}, nextdom.private.default_params, paramsSpecifics, _params || {});
    var paramsAJAX = nextdom.private.getParamsAJAX(params, 'Config', 'getKey');
    paramsAJAX.data['key'] = ($.isArray(_params.configuration) || $.isPlainObject(_params.configuration)) ? json_encode(_params.configuration) : _params.configuration;
    paramsAJAX.data['plugin'] = _params.plugin || 'core';
    paramsAJAX.data['convertToHumanReadable'] =  _params.convertToHumanReadable || false;
    $.ajax(paramsAJAX);
};

nextdom.config.remove = function (_params) {
    var paramsRequired = ['configuration'];
    var paramsSpecifics = {};
    try {
        nextdom.private.checkParamsRequired(_params || {}, paramsRequired);
    } catch (e) {
        (_params.error || paramsSpecifics.error || nextdom.private.default_params.error)(e);
        return;
    }
    var params = $.extend({}, nextdom.private.default_params, paramsSpecifics, _params || {});
    var paramsAJAX = nextdom.private.getParamsAJAX(params, 'Config', 'removeKey');
    paramsAJAX.data['action'] = 'removeKey';
    paramsAJAX.data['key'] = ($.isArray(_params.configuration) || $.isPlainObject(_params.configuration)) ? json_encode(_params.configuration) : _params.configuration;
    paramsAJAX.data['plugin'] = _params.plugin || 'core';
    $.ajax(paramsAJAX);
};