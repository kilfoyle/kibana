/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { act } from 'react-dom/test-utils';

import { setupEnvironment } from '../helpers';
import { AppTestBed, setupAppPage } from './app.helpers';

describe('Cluster upgrade', () => {
  let testBed: AppTestBed;
  let server: ReturnType<typeof setupEnvironment>['server'];
  let httpRequestsMockHelpers: ReturnType<typeof setupEnvironment>['httpRequestsMockHelpers'];

  beforeEach(() => {
    ({ server, httpRequestsMockHelpers } = setupEnvironment());
  });

  afterEach(() => {
    server.restore();
  });

  describe('when user is still preparing for upgrade', () => {
    beforeEach(async () => {
      testBed = await setupAppPage();
    });

    test('renders overview', () => {
      const { exists } = testBed;
      expect(exists('overview')).toBe(true);
      expect(exists('isUpgradingMessage')).toBe(false);
      expect(exists('isUpgradeCompleteMessage')).toBe(false);
    });
  });

  describe('when cluster is in the process of a rolling upgrade', () => {
    beforeEach(async () => {
      httpRequestsMockHelpers.setLoadDeprecationLoggingResponse(undefined, {
        statusCode: 426,
        message: '',
        attributes: {
          allNodesUpgraded: false,
        },
      });

      await act(async () => {
        testBed = await setupAppPage();
      });
    });

    test('renders rolling upgrade message', async () => {
      const { component, exists } = testBed;
      component.update();
      expect(exists('overview')).toBe(false);
      expect(exists('isUpgradingMessage')).toBe(true);
      expect(exists('isUpgradeCompleteMessage')).toBe(false);
    });
  });

  describe('when cluster has been upgraded', () => {
    beforeEach(async () => {
      httpRequestsMockHelpers.setLoadDeprecationLoggingResponse(undefined, {
        statusCode: 426,
        message: '',
        attributes: {
          allNodesUpgraded: true,
        },
      });

      await act(async () => {
        testBed = await setupAppPage();
      });
    });

    test('renders upgrade complete message', () => {
      const { component, exists } = testBed;
      component.update();
      expect(exists('overview')).toBe(false);
      expect(exists('isUpgradingMessage')).toBe(false);
      expect(exists('isUpgradeCompleteMessage')).toBe(true);
    });
  });
});
