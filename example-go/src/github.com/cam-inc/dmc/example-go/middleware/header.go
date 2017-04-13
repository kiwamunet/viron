package middleware

import (
	"net/http"

	"context"

	"github.com/goadesign/goa"
)

func SetHeader() goa.Middleware {
	setHeader := func(nextHandler goa.Handler) goa.Handler {
		return func(ctx context.Context, rw http.ResponseWriter, req *http.Request) error {
			rw.Header().Set("Authorization", req.Header.Get("Authorization"))
			return nextHandler(ctx, rw, req)
		}
	}

	fm, _ := goa.NewMiddleware(setHeader)
	return fm
}
