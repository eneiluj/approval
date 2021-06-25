<?php
/**
 * Nextcloud - Approval
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <eneiluj@posteo.net>
 * @copyright Julien Veyssier 2021
 */

return [
	'routes' => [
		/**
		 * Settings
		 */
		['name' => 'Config#getRules', 'url' => '/rules', 'verb' => 'GET'],
		['name' => 'Config#saveRule', 'url' => '/rule/{id}', 'verb' => 'PUT'],
		['name' => 'Config#deleteRule', 'url' => '/rule/{id}', 'verb' => 'DELETE'],
		['name' => 'Config#createRule', 'url' => '/rule', 'verb' => 'POST'],
		['name' => 'Config#createTag', 'url' => '/tag', 'verb' => 'POST'],

		/**
		 * DocuSign
		 */
		['name' => 'Docusign#setDocusignConfig', 'url' => '/docusign-config', 'verb' => 'PUT'],
		['name' => 'Docusign#getDocusignInfo', 'url' => '/docusign/info', 'verb' => 'GET'],
		['name' => 'Docusign#oauthRedirect', 'url' => '/docusign/oauth-redirect', 'verb' => 'GET'],
		['name' => 'Docusign#signByApprover', 'url' => '/docusign/{fileId}/approval-sign', 'verb' => 'PUT'],
		['name' => 'Docusign#signStandalone', 'url' => '/docusign/{fileId}/standalone-sign', 'verb' => 'PUT'],

		/**
		 * LibreSign
		 */
		['name' => 'Config#getLibresignInfo', 'url' => '/libresign/info', 'verb' => 'GET'],
	],
	'ocs' => [
		/**
		 * Approval actions
		 */
		[
			'name' => 'Approval#getUserRequesterRules',
			'url' => '/api/v1/user-requester-rules',
			'verb' => 'GET',
		],
		[
			'name' => 'Approval#getApprovalState',
			'url' => '/api/v1/{fileId}/state',
			'verb' => 'GET',
		],
		[
			'name' => 'Approval#approve',
			'url' => '/api/v1/{fileId}/approve',
			'verb' => 'PUT'],
		[
			'name' => 'Approval#reject',
			'url' => '/api/v1/{fileId}/reject',
			'verb' => 'PUT',
		],
		[
			'name' => 'Approval#request',
			'url' => '/api/v1/{fileId}/request/{ruleId}',
			'verb' => 'POST',
		],
	],
];
