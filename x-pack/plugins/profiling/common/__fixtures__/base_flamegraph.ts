/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { BaseFlameGraph } from '@kbn/profiling-utils';

export const baseFlamegraph: BaseFlameGraph = {
  Edges: [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10],
    [11],
    [12],
    [13],
    [14],
    [15],
    [16],
    [17],
    [18],
    [19],
    [20],
    [21],
    [22],
    [23],
    [24],
    [25],
    [26],
    [27],
    [28],
    [29],
    [30],
    [31],
    [32],
    [33],
    [34],
    [],
  ],
  FileID: [
    '',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    'fwIcP8qXDOl7k0VhWU8z9Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
    '5JfXt00O17Yra2Rwh8HT8Q',
  ],
  FrameType: [
    0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4, 4,
  ],
  Inline: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  ExeFilename: [
    '',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'metricbeat',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
    'vmlinux',
  ],
  AddressOrLine: [
    0, 43443520, 67880745, 67881145, 53704110, 53704665, 53696841, 53697537, 53700683, 53696841,
    52492674, 67626923, 67629380, 67630226, 51515812, 51512445, 51522994, 44606453, 43747101,
    43699300, 43538916, 43547623, 42994898, 42994925, 14680216, 14356875, 3732840, 3732678, 3721714,
    3719260, 3936007, 3897721, 4081162, 4458225, 1712873,
  ],
  FunctionName: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'entry_SYSCALL_64_after_hwframe',
    'do_syscall_64',
    '__x64_sys_read',
    'ksys_read',
    'vfs_read',
    'new_sync_read',
    'seq_read_iter',
    'm_show',
    'show_mountinfo',
    'kernfs_sop_show_path',
    'cgroup_show_path',
  ],
  FunctionOffset: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0,
  ],
  SourceFilename: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  SourceLine: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0,
  ],
  CountInclusive: [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7,
  ],
  CountExclusive: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 7,
  ],
  AnnualCO2TonsInclusive: [
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
    0.0013627551116480942, 0.0013627551116480942, 0.0013627551116480942,
  ],
  AnnualCO2TonsExclusive: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0.0013627551116480942,
  ],
  AnnualCostsUSDInclusive: [
    61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492,
    61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492,
    61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492,
    61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492,
    61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492,
    61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492,
    61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492, 61.30240940376492,
  ],
  AnnualCostsUSDExclusive: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 61.30240940376492,
  ],
  Size: 35,
  SamplingRate: 1,
  SelfCPU: 7,
  TotalCPU: 245,
  TotalSamples: 7,
  TotalSeconds: 4.980000019073486,
};
