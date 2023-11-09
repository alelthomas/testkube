# Testkube Open Source

Welcome to the Open Source version of Testkube! 

Designed to integrate seamlessly with your Kubernetes clusters, Testkube offers flexibility and power. For those searching for a quicker and streamlined experience, we suggest [signing up for Testkube Cloud](https://cloud.testkube.io/). However, for organizations that prefer the hands-on approach, diving deep into the [Open Source](testkube-oss.md) version could be the ideal choice.

Visit [Open Source or Cloud](open-source-or-cloud.md) to see a comparison of features to help you with your choice.

Also, take a look at our [Quick Setup Video](https://www.youtube.com/watch?v=ynzEkOUhxKk).

## Getting Started with Testkube Open Source

**Installation via Helm:** Dive into detailed installation instructions with [Helm in our official documentation](https://docs.testkube.io/articles/helm-chart/).

**Installing Using Testkube CLI:** Our CLI tool is here to simplify your deployment experience:
- 1st - Make sure your KUBECONFIG is pointing to the desired location for the Testkube installation.
- 2nd - Execute the command: 'testkube init'.

:::note
Testkube deploys in the **testkube** namespace. 
:::

This command will set up the following components in your Kubernetes cluster:

- Create a Testkube namespace.
- Deploy the Testkube API.
- Use MongoDB for test results and Minio for artifact storage (optional; disable with --no-minio). 
- Testkube Dashboard to visually and manage all your tests (optional; disable with --no-dashboard flag).
- Testkube will listen and manage all the CRDs for Tests, TestSuites, Executors, etc… inside the Testkube namespace.


Verify Your Installation: Ensure that Testkube is up and running with: 
`kubectl get all -n testkube`.

Once set up, you're ready to unleash the full potential of Testkube in your environment. Whether you opt for the Open Source or Cloud variant, Testkube is committed to powering your development and testing workflows seamlessly.
