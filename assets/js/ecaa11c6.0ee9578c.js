"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[56268,29742],{21449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(74848),a=t(28453),s=(t(55604),t(66805));const i={id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},l=void 0,d={id:"api/app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",source:"@site/docs/core/api/app.md",sourceDirName:"api",slug:"/api/app",permalink:"/next/api/app",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/api/app.md",tags:[],version:"current",lastUpdatedAt:1724307874e3,sidebarPosition:2,frontMatter:{id:"app",title:"\ud83d\ude80 App",description:"The app instance conventionally denotes the Fiber application.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Fiber",permalink:"/next/api/fiber"},next:{title:"\ud83e\udde0 Ctx",permalink:"/next/api/ctx"}},o={},c=[{value:"Routing",id:"routing",level:2},{value:"Route Handlers",id:"route-handlers",level:3},...s.toc,{value:"Mounting",id:"mounting",level:3},{value:"MountPath",id:"mountpath",level:3},{value:"Group",id:"group",level:3},{value:"Route",id:"route",level:3},{value:"HandlersCount",id:"handlerscount",level:3},{value:"Stack",id:"stack",level:3},{value:"Name",id:"name",level:3},{value:"GetRoute",id:"getroute",level:3},{value:"GetRoutes",id:"getroutes",level:3},{value:"Config",id:"config",level:2},{value:"Handler",id:"handler",level:2},{value:"ErrorHandler",id:"errorhandler",level:2},{value:"NewCtxFunc",id:"newctxfunc",level:2},{value:"RegisterCustomBinder",id:"registercustombinder",level:2},{value:"RegisterCustomConstraint",id:"registercustomconstraint",level:2},{value:"SetTLSHandler",id:"settlshandler",level:2},{value:"Test",id:"test",level:2},{value:"Hooks",id:"hooks",level:2},{value:"RebuildTree",id:"rebuildtree",level:2},{value:"Example Usage",id:"example-usage",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"routing",children:"Routing"}),"\n","\n",(0,r.jsx)(n.h3,{id:"route-handlers",children:"Route Handlers"}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(n.h3,{id:"mounting",children:"Mounting"}),"\n",(0,r.jsxs)(n.p,{children:["You can Mount Fiber instance using the ",(0,r.jsx)(n.a,{href:"/next/api/app#use",children:(0,r.jsx)(n.code,{children:"app.Use"})})," method similar to ",(0,r.jsx)(n.a,{href:"https://expressjs.com/en/api.html#router.use",children:(0,r.jsx)(n.code,{children:"express"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n    app := fiber.New()\n    micro := fiber.New()\n    app.Use("/john", micro) // GET /john/doe -> 200 OK\n\n    micro.Get("/doe", func(c fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusOK)\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"mountpath",children:"MountPath"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"MountPath"})," property contains one or more path patterns on which a sub-app was mounted."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) MountPath() string\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n    app := fiber.New()\n    one := fiber.New()\n    two := fiber.New()\n    three := fiber.New()\n\n    two.Use("/three", three)\n    one.Use("/two", two)\n    app.Use("/one", one)\n  \n    one.MountPath()   // "/one"\n    two.MountPath()   // "/one/two"\n    three.MountPath() // "/one/two/three"\n    app.MountPath()   // ""\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Mounting order is important for MountPath. If you want to get mount paths properly, you should start mounting from the deepest app."})}),"\n",(0,r.jsx)(n.h3,{id:"group",children:"Group"}),"\n",(0,r.jsxs)(n.p,{children:["You can group routes by creating a ",(0,r.jsx)(n.code,{children:"*Group"})," struct."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Group(prefix string, handlers ...Handler) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", handler)  // /api\n\n  v1 := api.Group("/v1", handler)   // /api/v1\n  v1.Get("/list", handler)          // /api/v1/list\n  v1.Get("/user", handler)          // /api/v1/user\n\n  v2 := api.Group("/v2", handler)   // /api/v2\n  v2.Get("/list", handler)          // /api/v2/list\n  v2.Get("/user", handler)          // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"route",children:"Route"}),"\n",(0,r.jsx)(n.p,{children:"Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware."}),"\n",(0,r.jsxs)(n.p,{children:["Similar to ",(0,r.jsx)(n.a,{href:"https://expressjs.com/de/api.html#app.route",children:(0,r.jsx)(n.code,{children:"Express"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Route(path string) Register\n"})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:["Click here to see the ",(0,r.jsx)(n.code,{children:"Register"})," interface"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Register interface {\n  All(handler Handler, middleware ...Handler) Register\n  Get(handler Handler, middleware ...Handler) Register\n  Head(handler Handler, middleware ...Handler) Register\n  Post(handler Handler, middleware ...Handler) Register\n  Put(handler Handler, middleware ...Handler) Register\n  Delete(handler Handler, middleware ...Handler) Register\n  Connect(handler Handler, middleware ...Handler) Register\n  Options(handler Handler, middleware ...Handler) Register\n  Trace(handler Handler, middleware ...Handler) Register\n  Patch(handler Handler, middleware ...Handler) Register\n\n  Add(methods []string, handler Handler, middleware ...Handler) Register\n\n  Route(path string) Register\n}\n"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n  app := fiber.New()\n\n  // use `Route` as chainable route declaration method\n  app.Route("/test").Get(func(c fiber.Ctx) error {\n    return c.SendString("GET /test")\n  })\n  \n  app.Route("/events").all(func(c fiber.Ctx) error {\n    // runs for all HTTP verbs first\n    // think of it as route specific middleware!\n  })\n  .get(func(c fiber.Ctx) error {\n    return c.SendString("GET /events")\n  })\n  .post(func(c fiber.Ctx) error {\n    // maybe add a new event...\n  })\n  \n  // combine multiple routes\n  app.Route("/v2").Route("/user").Get(func(c fiber.Ctx) error {\n    return c.SendString("GET /v2/user")\n  })\n  \n  // use multiple methods\n  app.Route("/api").Get(func(c fiber.Ctx) error {\n    return c.SendString("GET /api")\n  }).Post(func(c fiber.Ctx) error {\n    return c.SendString("POST /api")\n  })\n\n  log.Fatal(app.Listen(":3000"))\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"handlerscount",children:"HandlersCount"}),"\n",(0,r.jsx)(n.p,{children:"This method returns the amount of registered handlers."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) HandlersCount() uint32\n"})}),"\n",(0,r.jsx)(n.h3,{id:"stack",children:"Stack"}),"\n",(0,r.jsx)(n.p,{children:"This method returns the original router stack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Stack() [][]*Route\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'var handler = func(c fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/john/:age", handler)\n    app.Post("/register", handler)\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Println(string(data))\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  [\n    {\n      "method": "GET",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "path": "/john/:age",\n      "params": [\n        "age"\n      ]\n    }\n  ],\n  [\n    {\n      "method": "POST",\n      "path": "/register",\n      "params": null\n    }\n  ]\n]\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"This method assigns the name of latest created route."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Name(name string) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'var handler = func(c fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler)\n    app.Name("index")\n\n    app.Get("/doe", handler).Name("home")\n\n    app.Trace("/tracer", handler).Name("tracert")\n\n    app.Delete("/delete", handler).Name("delete")\n\n    a := app.Group("/a")\n    a.Name("fd.")\n\n    a.Get("/test", handler).Name("test")\n\n    data, _ := json.MarshalIndent(app.Stack(), "", "  ")\n    fmt.Print(string(data))\n\n    app.Listen(":3000")\n\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  [\n    {\n      "method": "GET",\n      "name": "index",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "home",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "GET",\n      "name": "fd.test",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  [\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/doe",\n      "params": null\n    },\n    {\n      "method": "HEAD",\n      "name": "",\n      "path": "/a/test",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "DELETE",\n      "name": "delete",\n      "path": "/delete",\n      "params": null\n    }\n  ],\n  null,\n  null,\n  [\n    {\n      "method": "TRACE",\n      "name": "tracert",\n      "path": "/tracer",\n      "params": null\n    }\n  ],\n  null\n]\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"getroute",children:"GetRoute"}),"\n",(0,r.jsx)(n.p,{children:"This method gets the route by name."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) GetRoute(name string) Route\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'var handler = func(c fiber.Ctx) error { return nil }\n\nfunc main() {\n    app := fiber.New()\n\n    app.Get("/", handler).Name("index")\n    \n    data, _ := json.MarshalIndent(app.GetRoute("index"), "", "  ")\n    fmt.Print(string(data))\n\n\n    app.Listen(":3000")\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "method": "GET",\n  "name": "index",\n  "path": "/",\n  "params": null\n}\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"getroutes",children:"GetRoutes"}),"\n",(0,r.jsx)(n.p,{children:"This method gets all routes."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) GetRoutes(filterUseOption ...bool) []Route\n"})}),"\n",(0,r.jsx)(n.p,{children:"When filterUseOption equal to true, it will filter the routes registered by the middleware."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'func main() {\n    app := fiber.New()\n    app.Post("/", func (c fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    }).Name("index")\n    data, _ := json.MarshalIndent(app.GetRoutes(true), "", "  ")\n    fmt.Print(string(data))\n}\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Click here to see the result"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "method": "POST",\n        "name": "index",\n        "path": "/",\n        "params": null\n    }\n]\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(n.p,{children:["Config returns the ",(0,r.jsx)(n.a,{href:"/next/api/fiber#config",children:"app config"})," as value ( read-only )."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Config() Config\n"})}),"\n",(0,r.jsx)(n.h2,{id:"handler",children:"Handler"}),"\n",(0,r.jsxs)(n.p,{children:["Handler returns the server handler that can be used to serve custom ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/valyala/fasthttp#RequestCtx",children:(0,r.jsx)(n.code,{children:"\\*fasthttp.RequestCtx"})})," requests."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Handler() fasthttp.RequestHandler\n"})}),"\n",(0,r.jsx)(n.h2,{id:"errorhandler",children:"ErrorHandler"}),"\n",(0,r.jsx)(n.p,{children:"Errorhandler executes the process which was defined for the application in case of errors, this is used in some cases in middlewares."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) ErrorHandler(ctx Ctx, err error) error\n"})}),"\n",(0,r.jsx)(n.h2,{id:"newctxfunc",children:"NewCtxFunc"}),"\n",(0,r.jsx)(n.p,{children:"NewCtxFunc allows to customize the ctx struct as we want."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) NewCtxFunc(function func(app *App) CustomCtx)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'type CustomCtx struct {\n    DefaultCtx\n}\n\n// Custom method\nfunc (c *CustomCtx) Params(key string, defaultValue ...string) string {\n    return "prefix_" + c.DefaultCtx.Params(key)\n}\n\napp := New()\napp.NewCtxFunc(func(app *fiber.App) fiber.CustomCtx {\n    return &CustomCtx{\n        DefaultCtx: *NewDefaultCtx(app),\n    }\n})\n// curl http://localhost:3000/123\napp.Get("/:id", func(c Ctx) error {\n    // use custom method - output: prefix_123\n    return c.SendString(c.Params("id"))\n})\n'})}),"\n",(0,r.jsx)(n.h2,{id:"registercustombinder",children:"RegisterCustomBinder"}),"\n",(0,r.jsxs)(n.p,{children:["You can register custom binders to use as ",(0,r.jsx)(n.a,{href:"/next/api/bind#custom",children:(0,r.jsx)(n.code,{children:'Bind().Custom("name")'})}),".\nThey should be compatible with CustomBinder interface."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) RegisterCustomBinder(binder CustomBinder)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'app := fiber.New()\n\n// My custom binder\ncustomBinder := &customBinder{}\n// Name of custom binder, which will be used as Bind().Custom("name")\nfunc (*customBinder) Name() string {\n    return "custom"\n}\n// Is used in the Body Bind method to check if the binder should be used for custom mime types\nfunc (*customBinder) MIMETypes() []string {\n    return []string{"application/yaml"}\n}\n// Parse the body and bind it to the out interface\nfunc (*customBinder) Parse(c Ctx, out any) error {\n    // parse yaml body\n    return yaml.Unmarshal(c.Body(), out)\n}\n// Register custom binder\napp.RegisterCustomBinder(customBinder)\n\n// curl -X POST http://localhost:3000/custom -H "Content-Type: application/yaml" -d "name: John"\napp.Post("/custom", func(c Ctx) error {\n    var user User\n    // output: {Name:John}\n    // Custom binder is used by the name\n    if err := c.Bind().Custom("custom", &user); err != nil {\n        return err\n    }\n    // ...\n    return c.JSON(user)\n})\n// curl -X POST http://localhost:3000/normal -H "Content-Type: application/yaml" -d "name: Doe"\napp.Post("/normal", func(c Ctx) error {\n    var user User\n    // output: {Name:Doe}\n    // Custom binder is used by the mime type\n    if err := c.Bind().Body(&user); err != nil {\n        return err\n    }\n    // ...\n    return c.JSON(user)\n})\n'})}),"\n",(0,r.jsx)(n.h2,{id:"registercustomconstraint",children:"RegisterCustomConstraint"}),"\n",(0,r.jsx)(n.p,{children:"RegisterCustomConstraint allows to register custom constraint."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) RegisterCustomConstraint(constraint CustomConstraint)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/next/guide/routing#custom-constraint",children:"Custom Constraint"})," section for more information."]}),"\n",(0,r.jsx)(n.h2,{id:"settlshandler",children:"SetTLSHandler"}),"\n",(0,r.jsxs)(n.p,{children:["Use SetTLSHandler to set ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8446#section-4.1.2",children:"ClientHelloInfo"})," when using TLS with Listener."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) SetTLSHandler(tlsHandler *TLSHandler)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,r.jsxs)(n.p,{children:["Testing your application is done with the ",(0,r.jsx)(n.strong,{children:"Test"})," method. Use this method for creating ",(0,r.jsx)(n.code,{children:"_test.go"})," files or when you need to debug your routing logic. The default timeout is ",(0,r.jsx)(n.code,{children:"1s"})," if you want to disable a timeout altogether, pass ",(0,r.jsx)(n.code,{children:"-1"})," as a second argument."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Test(req *http.Request, msTimeout ...int) (*http.Response, error)\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Create route with GET method for test:\napp.Get("/", func(c fiber.Ctx) error {\n  fmt.Println(c.BaseURL())              // => http://google.com\n  fmt.Println(c.Get("X-Custom-Header")) // => hi\n\n  return c.SendString("hello, World!")\n})\n\n// http.Request\nreq := httptest.NewRequest("GET", "http://google.com", nil)\nreq.Header.Set("X-Custom-Header", "hi")\n\n// http.Response\nresp, _ := app.Test(req)\n\n// Do something with results:\nif resp.StatusCode == fiber.StatusOK {\n  body, _ := io.ReadAll(resp.Body)\n  fmt.Println(string(body)) // => Hello, World!\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"hooks",children:"Hooks"}),"\n",(0,r.jsxs)(n.p,{children:["Hooks is a method to return ",(0,r.jsx)(n.a,{href:"/next/api/hooks",children:"hooks"})," property."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Hooks() *Hooks\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rebuildtree",children:"RebuildTree"}),"\n",(0,r.jsx)(n.p,{children:"The RebuildTree method is designed to rebuild the route tree and enable dynamic route registration. It returns a pointer to the App instance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) RebuildTree() *App\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Use this method with caution. It is ",(0,r.jsx)(n.strong,{children:"not"})," thread-safe and calling it can be very performance-intensive, so it should be used sparingly and only in development mode. Avoid using it concurrently."]}),"\n",(0,r.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.p,{children:"Here\u2019s an example of how to define and register routes dynamically:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'app.Get("/define", func(c Ctx) error {  // Define a new route dynamically\n    app.Get("/dynamically-defined", func(c Ctx) error {  // Adding a dynamically defined route\n        return c.SendStatus(http.StatusOK)\n    })\n\n    app.RebuildTree()  // Rebuild the route tree to register the new route\n\n    return c.SendStatus(http.StatusOK)\n})\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, a new route is defined and then ",(0,r.jsx)(n.code,{children:"RebuildTree()"})," is called to make sure the new route is registered and available."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},66805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(74848),a=t(28453),s=t(55604);const i={id:"route-handlers",title:"Route Handlers"},l=void 0,d={id:"partials/routing/route-handlers",title:"Route Handlers",description:"Registers a route bound to a specific HTTP method.",source:"@site/docs/core/partials/routing/handler.md",sourceDirName:"partials/routing",slug:"/partials/routing/route-handlers",permalink:"/next/partials/routing/route-handlers",draft:!1,unlisted:!1,editUrl:"https://github.com/gofiber/fiber/edit/main/docs/partials/routing/handler.md",tags:[],version:"current",lastUpdatedAt:1724307874e3,frontMatter:{id:"route-handlers",title:"Route Handlers"}},o={},c=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Registers a route bound to a specific ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"HTTP method"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signatures"',children:"// HTTP methods\nfunc (app *App) Get(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Head(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Post(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Put(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Delete(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Connect(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Options(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Trace(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Patch(path string, handler Handler, middlewares ...Handler) Router\n\n// Add allows you to specify a method as value\nfunc (app *App) Add(method, path string, handler Handler, middlewares ...Handler) Router\n\n// All will register the route on all HTTP methods\n// Almost the same as app.Use but not bound to prefixes\nfunc (app *App) All(path string, handler Handler, middlewares ...Handler) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Simple GET handler\napp.Get("/api/list", func(c fiber.Ctx) error {\n    return c.SendString("I\'m a GET request!")\n})\n\n// Simple POST handler\napp.Post("/api/register", func(c fiber.Ctx) error {\n    return c.SendString("I\'m a POST request!")\n})\n'})}),"\n",(0,r.jsx)(s.A,{id:"use",children:(0,r.jsx)(n.strong,{children:"Use"})}),"\n",(0,r.jsxs)(n.p,{children:["Can be used for middleware packages and prefix catchers. These routes will only match the beginning of each path i.e. ",(0,r.jsx)(n.code,{children:"/john"})," will match ",(0,r.jsx)(n.code,{children:"/john/doe"}),", ",(0,r.jsx)(n.code,{children:"/johnnnnn"})," etc"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Signature"',children:"func (app *App) Use(args ...any) Router\n\n// Different usage variations\nfunc (app *App) Use(handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(paths []string, handler Handler, middlewares ...Handler) Router\nfunc (app *App) Use(path string, app *App) Router\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:'title="Examples"',children:'// Match any request\napp.Use(func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match request starting with /api\napp.Use("/api", func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Match requests starting with /api or /home (multiple-prefix support)\napp.Use([]string{"/api", "/home"}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Attach multiple handlers \napp.Use("/api", func(c fiber.Ctx) error {\n    c.Set("X-Custom-Header", random.String(32))\n    return c.Next()\n}, func(c fiber.Ctx) error {\n    return c.Next()\n})\n\n// Mount a sub-app\napp.Use("/api", api)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},55604:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(28774),a=t(63427),s=t(74848);function i(e){let{children:n,id:t}=e;return(0,a.A)().collectAnchor(t),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{id:t,className:"reference anchor",children:[n,(0,s.jsx)(r.A,{to:"#"+t,className:"hash-link"})]})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);