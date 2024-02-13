import express, { NextFunction, Request, Response } from 'express';

import Book from '../Models/book';

interface BookType
{
    title: string;
    releaseDate: Date;
    genres: string[];
    authors: string[];
    description: string;
    country: string;
    languages: string[];
    publisher: string;
    pages: number;
}

export function DisplayBookList(req: Request, res: Response, next: NextFunction): void
{

    Book.find(function(err: Error, bookCollection: BookType[])
    {
        if(err)
        {
            return console.error(err);
        }

        res.render('index', {title: 'Book List', page: 'book-list', book: bookCollection});
    });

}
