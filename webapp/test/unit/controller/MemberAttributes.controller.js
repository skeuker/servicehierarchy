/*global QUnit*/

sap.ui.define([
	"pnp/servicehierarchy/servicehierarchy/controller/MemberAttributes.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MemberAttributes Controller");

	QUnit.test("I should test the MemberAttributes controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});