/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/// <reference types="node" />

export {PerFileShimGenerator, TopLevelShimGenerator} from './api';
export {ShimAdapter} from './src/adapter';
export {isShim} from './src/expando';
export {FactoryGenerator, FactoryInfo, FactoryTracker, generatedFactoryTransform} from './src/factory_generator';
export {ShimReferenceTagger} from './src/reference_tagger';
export {SummaryGenerator} from './src/summary_generator';
