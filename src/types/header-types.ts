import { NextApiRequest, NextApiResponse } from 'next';
import { Request, Response } from 'express';
import { IncomingMessage, ServerResponse } from 'http';
import { Action } from 'redux';

interface CtxData {
  res?: NextApiResponse;
  req?: NextApiRequest;
}

interface ActionWithPayload<T> extends Action {
  payload: T;
}

type HeaderReq = NextApiRequest | Request | IncomingMessage;
type HeaderRes = NextApiResponse | Response | ServerResponse;

export type { CtxData, ActionWithPayload, HeaderReq, HeaderRes };
