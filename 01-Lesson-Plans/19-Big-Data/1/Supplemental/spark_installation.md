# Setting Up Apache Spark With Jupyter Notebook

## Install Java Development Kit

Download from <http://www.oracle.com/technetwork/java/javase/downloads/index.html>

Add following code to your e.g. `.bash_profile` or `.zshrc`.

```bash
# For Apache Spark
if which java > /dev/null; then export JAVA_HOME=$(/usr/libexec/java_home); fi
```

## Install Apache Spark

```shell
brew update
brew install scala
brew install apache-spark
```

## Set up env variables

* Add following code to your `.bash_profile` or `.zshrc`.

```bash
# For jupyter notebook and pyspark integration
if which pyspark > /dev/null; then
  export SPARK_HOME="/usr/local/Cellar/apache-spark/2.2.0/libexec/"
  export PYTHONPATH=$SPARK_HOME/python:$SPARK_HOME/python/build:$PYTHONPATH
  export PYTHONPATH=$SPARK_HOME/python/lib/py4j-0.10.4-src.zip:$PYTHONPATH
fi

# Pyspark Jupyter notebook settings
# Enables pyspark in your terminal to open a notebook with `sc` available automatically.
export PYSPARK_DRIVER_PYTHON=jupyter
export PYSPARK_DRIVER_PYTHON_OPTS=notebook
```

You can check `SPARK_HOME` path using following brew command

```
$ brew info apache-spark
apache-spark: stable 2.2.0, HEAD
Engine for large-scale data processing
https://spark.apache.org/
/usr/local/Cellar/apache-spark/2.2.0 (1,356 files, 222.1MB) *
  Built from source on 2017-11-08 at 09:55:28
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/apache-spark.rb
```
