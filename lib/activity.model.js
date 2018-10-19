'use strict';


/**
 * @module Activity
 * @name Activity
 * @description Define a specific action or function.
 *
 * Its a major unit of work to be completed in achieving objectives of a plan.
 *
 * An activity has a set of procedures to be followed and it consumes resources.
 *
 * An activity may have a precedence relationship with other activities i.e
 * finish-to-start, start-to-start, finish-to-finish etc.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @public
 */


/* dependencies */
const path = require('path');
const _ = require('lodash');
const { getString, getStrings } = require('@lykmapipo/env');
const mongoose = require('mongoose');
const actions = require('mongoose-rest-actions');
const { IncidentType } = require('@codetanzania/emis-incident-type');
const Plan = require(path.join(__dirname, 'plan.model'));
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


/* constants */
const ACTIVITY_MODEL_NAME =
  getString('ACTIVITY_MODEL_NAME', 'Activity');
const ACTIVITY_COLLECTION_NAME =
  getString('ACTIVITY_COLLECTION_NAME', 'activities');
const SCHEMA_OPTIONS =
  ({ timestamps: true, emitIndexErrors: true, collection: ACTIVITY_COLLECTION_NAME });
const DEFAULT_DISASTER_PHASE = getString('DEFAULT_DISASTER_PHASE', 'Mitigation');
const DEFAULT_DISASTER_PHASES = [
  'Mitigation', 'Preparedness',
  'Response', 'Recovery'
];
const DISASTER_PHASES = getStrings('DISASTER_PHASES', DEFAULT_DISASTER_PHASES);


/**
 * @name ActivitySchema
 * @type {Schema}
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
const ActivitySchema = new Schema({
  /**
   * @name plan
   * @description A plan under which a activity is applicable.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {string} ref - referenced collection
   * @property {boolean} required - mark required
   * @property {boolean} exists - ensure ref exists before save
   * @property {object} autopopulate - jurisdiction population options
   * @property {boolean} index - ensure database index
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  plan: {
    type: ObjectId,
    ref: Plan.MODEL_NAME,
    required: true,
    index: true,
    exists: true
  },


  /**
   * @name incidentType
   * @description An incident type under which a activity is applicable.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {string} ref - referenced collection
   * @property {boolean} required - mark required
   * @property {boolean} exists - ensure ref exists before save
   * @property {object} autopopulate - jurisdiction population options
   * @property {boolean} index - ensure database index
   *
   * @since 0.1.0
   * @version 1.0.0
   * @instance
   */
  incidentType: {
    type: ObjectId,
    ref: IncidentType.MODEL_NAME,
    required: true,
    index: true,
    exists: true,
    autopopulate: IncidentType.OPTION_AUTOPOPULATE
  },


  /**
   * @name phase
   * @description disaster management phase under which activity applicable.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} enum - list of acceptable values
   * @property {object} default - default value if non provided
   * @property {boolean} searchable - allow for searching
   * @property {boolean} index - ensure database index
   *
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  phase: {
    type: String,
    trim: true,
    enum: DISASTER_PHASES,
    default: undefined,
    searchable: true,
    index: true,
    fake: true
  },


  /**
   * @name name
   * @description Human readable name of activity.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} required - mark required
   * @property {number} minlength - ensure not empty
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 1,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  },


  /**
   * @name description
   * @description A brief summary about a activity if available i.e
   * additional details that clarify what a activity is for.
   *
   * @type {object}
   * @property {object} type - schema(data) type
   * @property {boolean} trim - force trimming
   * @property {boolean} index - ensure database index
   * @property {boolean} searchable - allow for searching
   * @property {object} fake - fake data generator options
   *
   * @author lally elias <lallyelias87@gmail.com>
   * @since 0.1.0
   * @version 0.1.0
   * @instance
   */
  description: {
    type: String,
    trim: true,
    index: true,
    searchable: true,
    fake: {
      generator: 'lorem',
      type: 'sentence'
    }
  }

}, SCHEMA_OPTIONS);


/*
 *------------------------------------------------------------------------------
 * Indexes
 *------------------------------------------------------------------------------
 */


/* TODO */


/*
 *------------------------------------------------------------------------------
 *  Hooks
 *------------------------------------------------------------------------------
 */


/**
 * @name validate
 * @function validate
 * @description activity schema pre validation hook
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @private
 */
ActivitySchema.pre('validate', function (done) {

  this.preValidate(done);

});


/*
 *------------------------------------------------------------------------------
 *  Instance
 *------------------------------------------------------------------------------
 */


/**
 * @name preValidate
 * @function preValidate
 * @description activity schema pre validation hook logic
 * @param {function} done callback to invoke on success or error
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since 0.1.0
 * @version 0.1.0
 * @instance
 */
ActivitySchema.methods.preValidate = function preValidate(done) {

  //ensure incident type
  if (!this.incidentType && this.plan) {
    this.incidentType = this.plan.incidentType;
  }

  //ensure disaster phase
  if (_.isEmpty(this.phase)) {
    this.phase = DEFAULT_DISASTER_PHASE;
  }

  // continue
  done();

};


/*
 *------------------------------------------------------------------------------
 * Statics
 *------------------------------------------------------------------------------
 */


/* static constants */
ActivitySchema.statics.MODEL_NAME = ACTIVITY_MODEL_NAME;
ActivitySchema.statics.COLLECTION_NAME = ACTIVITY_COLLECTION_NAME;


/*
 *------------------------------------------------------------------------------
 * Plugins
 *------------------------------------------------------------------------------
 */


/* plug mongoose rest actions*/
ActivitySchema.plugin(actions);


/* export activity model */
module.exports = mongoose.model(ACTIVITY_MODEL_NAME, ActivitySchema);