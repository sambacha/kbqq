'use strict';

const path = require('path');
const Logger = require('log4bro');

const config = {
  kafka: {
    kafkaHost: 'localhost:9092',
    logger: new Logger(),
    groupId: 'kc-bigquery-test',
    clientName: 'kc-bigquery-test-name',
    workerPerPartition: 1,
    options: {
      sessionTimeout: 8000,
      protocol: ['roundrobin'],
      fromOffset: 'earliest', //latest
      fetchMaxBytes: 1024 * 100,
      fetchMinBytes: 1,
      fetchMaxWaitMs: 10,
      heartbeatInterval: 250,
      retryMinTimeout: 250,
      requireAcks: 0,
      //ackTimeoutMs: 100,
      //partitionerType: 3
    },
  },
  topic: 'bqkc_test_topic',
  partitions: 1,
  maxTasks: 1,
  pollInterval: 250,
  produceKeyed: true,
  produceCompressionType: 0,
  connector: {
    batchSize: 1,
    maxPollCount: 1,
    projectId: 'bq-project-id',
    dataset: 'bq_dataset',
    table: 'bq_table',
    idColumn: 'id',
  },
};

module.exports = config;
