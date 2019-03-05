/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pnp/servicehierarchy/servicehierarchy/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});