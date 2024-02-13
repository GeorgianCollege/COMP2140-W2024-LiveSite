import express, { NextFunction, Request, Response } from 'express';


export function DisplayHome(req: Request, res: Response, next: NextFunction): void
{
  res.render('index', {title: 'Home', page: 'home'});
}

export function DisplayAbout(req: Request, res: Response, next: NextFunction): void
{
  res.render('index', {title: 'About Us', page: 'about'});
}

export function DisplayProducts(req: Request, res: Response, next: NextFunction): void
{
  res.render('index', {title: 'Our Products', page: 'products'});
}

export function DisplayServices(req: Request, res: Response, next: NextFunction): void
{
  res.render('index', {title: 'Our Services', page: 'services'});
}

export function DisplayContact(req: Request, res: Response, next: NextFunction): void
{
  res.render('index', {title: 'Contact Us', page: 'contact'});
}

  