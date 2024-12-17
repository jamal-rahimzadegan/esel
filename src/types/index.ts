import { NextApiRequest, NextApiResponse } from 'next';
import { NextRouter } from 'next/router';
import { AdvertiseTypes, InpTypes, ObjectFit } from './component-types';
import { ActionWithPayload, CtxData, HeaderReq, HeaderRes } from './header-types';
import { ChangeEventHandler } from 'react';

type StrType = string | number;
type FnType = Function | ((a: any) => void);
type ComplexObject = { [key: string]: any };
type SharedReducerType = { sagaAction: ComplexObject; requestActions: ComplexObject; reducer: any };

export type {
  NextRouter,
  CtxData,
  NextApiRequest,
  NextApiResponse,
  HeaderReq,
  HeaderRes,
  AdvertiseTypes,
  ObjectFit,
  InpTypes,
  StrType,
  ComplexObject,
  SharedReducerType,
  ActionWithPayload,
  FnType,
};
