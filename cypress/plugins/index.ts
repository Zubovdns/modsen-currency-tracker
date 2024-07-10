const cypressCodeCoverage = require('@cypress/code-coverage/task')

module.exports = (on, config) => {
  on('task', cypressCodeCoverage.task)
  on('file:preprocessor', cypressCodeCoverage.loadCoveragePlugin(config))
}
