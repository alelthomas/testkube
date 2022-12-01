## kubectl-testkube abort testsuiteexecution

Abort test suite execution

```
kubectl-testkube abort testsuiteexecution <executionID> [flags]
```

### Options

```
  -h, --help   help for testsuiteexecution
```

### Options inherited from parent commands

```
  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")
  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")
      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")
      --oauth-enabled      enable oauth
      --verbose            show additional debug messages
```

### SEE ALSO

* [kubectl-testkube abort](kubectl-testkube_abort.md)	 - Abort tests or test suites
