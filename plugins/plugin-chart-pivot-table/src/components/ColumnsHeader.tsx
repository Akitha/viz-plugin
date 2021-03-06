/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { FC } from 'react';
import { GridItem } from './Layout';
import { Unit } from '../plugin/utils';

type ColumnsHeaderProps<C extends string, M extends string> = {
  metrics: M[];
  uiColumnUnits: Unit<C>;
  columns: C[];
  numberOfColumns: number;
  compactView: boolean;
};

const ColumnsHeader: FC<ColumnsHeaderProps<string, string>> = ({
  metrics,
  compactView,
  uiColumnUnits,
  columns,
  numberOfColumns,
}) => (
  <>
    {metrics.map(metric => (
      // eslint-disable-next-line react/jsx-key
      <GridItem bordered header bgLevel={2} gridColumn={`span ${numberOfColumns / metrics.length}`}>
        {metric}
      </GridItem>
    ))}
    {columns.map(column =>
      uiColumnUnits[column].map(item => (
        // eslint-disable-next-line react/jsx-key
        <GridItem header bordered bgLevel={2} gridColumn={`span ${numberOfColumns / uiColumnUnits[column].length}`}>
          <div>{item}</div>
        </GridItem>
      )),
    )}
    {/* One empty line for header columns of rows */}
    {!compactView && (
      <GridItem header bordered gridColumn={`span ${numberOfColumns}`} style={{ color: 'transparent' }}>
        :)
      </GridItem>
    )}
  </>
);

export default ColumnsHeader;
