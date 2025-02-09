# How to Run the Project (Mac Only)

## Setup .env
```console
PORT=3000

DB_USER=cchal_user
DB_HOST=cchal-postgresql
DB_NAME=cchal_db
DB_PASS=cchalpassword
DB_PORT=5432
```

## Deploy

### Install App Into k8s Cluster
```console
helm dependency update chart
helm install todo-app -n <your-namespace>
```

### Expose App to Host Machine

#### Backend
```console
# 1. get pod labels
kubectl get pods -n cctalent --show-labels

# 2. set pod name
export POD_NAME=$(kubectl get po -n cctalent -l "<backend-pod-label>" -o jsonpath="{.items[0].metadata.name}")`

# 3. set container port
`export CONTAINER_PORT=$(kubectl get po -n cctalent $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")

# forward host port to container port
kubectl --namespace cctalent port-forward $POD_NAME 3000:$CONTAINER_PORT
```

#### Frontend
```console
# 1. get pod labels
kubectl get pods -n cctalent --show-labels

# 2. set pod name
export POD_NAME=$(kubectl get po -n cctalent -l "<frontend-pod-label>" -o jsonpath="{.items[0].metadata.name}")`

# 3. set container port
`export CONTAINER_PORT=$(kubectl get po -n cctalent $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")

# forward host port to container port
kubectl --namespace cctalent port-forward $POD_NAME 3000:$CONTAINER_PORT
```
