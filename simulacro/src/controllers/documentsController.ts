import type { Request, Response, NextFunction } from 'express';
import * as documentsService from '../services/documentsService.js';
import { AppError } from '../errors/AppError.js';

export function list(req: Request, res: Response, next: NextFunction): void {
  try {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 20);
    res.json(documentsService.list(page, limit));
  } catch (err) {
    next(err);
  }
}

export function getById(req: Request, res: Response, next: NextFunction): void {
  try {
    const document = documentsService.getById(String(req.params.documentId));
    if (!document) {
      throw new AppError(404, `Document with id '${req.params.documentId}' not found`, 'NOT_FOUND');
    }
    res.json({ data: document });
  } catch (err) {
    next(err);
  }
}

export function create(req: Request, res: Response, next: NextFunction): void {
  try {
    const { title, description } = req.body;
    if (!title || typeof title !== 'string') {
      throw new AppError(400, 'Missing required field: title', 'BAD_REQUEST');
    }
    const document = documentsService.create(
      title.trim(),
      typeof description === 'string' ? description.trim() : '',
    );
    res.status(201).json({ data: document });
  } catch (err) {
    next(err);
  }
}

export function update(req: Request, res: Response, next: NextFunction): void {
  try {
    const { title, description } = req.body;
    const document = documentsService.update(String(req.params.documentId), { title, description });
    if (!document) {
      throw new AppError(404, `Document with id '${req.params.documentId}' not found`, 'NOT_FOUND');
    }
    res.json({ data: document });
  } catch (err) {
    next(err);
  }
}