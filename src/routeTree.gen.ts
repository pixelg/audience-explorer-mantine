/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as BoxPlotChartImport } from './routes/box-plot-chart'
import { Route as BarChartImport } from './routes/bar-chart'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const BoxPlotChartRoute = BoxPlotChartImport.update({
  id: '/box-plot-chart',
  path: '/box-plot-chart',
  getParentRoute: () => rootRoute,
} as any)

const BarChartRoute = BarChartImport.update({
  id: '/bar-chart',
  path: '/bar-chart',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/bar-chart': {
      id: '/bar-chart'
      path: '/bar-chart'
      fullPath: '/bar-chart'
      preLoaderRoute: typeof BarChartImport
      parentRoute: typeof rootRoute
    }
    '/box-plot-chart': {
      id: '/box-plot-chart'
      path: '/box-plot-chart'
      fullPath: '/box-plot-chart'
      preLoaderRoute: typeof BoxPlotChartImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/bar-chart': typeof BarChartRoute
  '/box-plot-chart': typeof BoxPlotChartRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/bar-chart': typeof BarChartRoute
  '/box-plot-chart': typeof BoxPlotChartRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/bar-chart': typeof BarChartRoute
  '/box-plot-chart': typeof BoxPlotChartRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/bar-chart' | '/box-plot-chart'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/bar-chart' | '/box-plot-chart'
  id: '__root__' | '/' | '/bar-chart' | '/box-plot-chart'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BarChartRoute: typeof BarChartRoute
  BoxPlotChartRoute: typeof BoxPlotChartRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BarChartRoute: BarChartRoute,
  BoxPlotChartRoute: BoxPlotChartRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/bar-chart",
        "/box-plot-chart"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/bar-chart": {
      "filePath": "bar-chart.tsx"
    },
    "/box-plot-chart": {
      "filePath": "box-plot-chart.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
