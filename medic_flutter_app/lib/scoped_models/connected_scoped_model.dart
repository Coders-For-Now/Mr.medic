import 'package:medic_flutter_app/models/patient.dart';

import '../api/keys.dart';
import 'dart:io';
import 'package:scoped_model/scoped_model.dart';
// import '../models/tweet.dart';

class ConnectedModel extends Model {
  // List<Tweet> feedList = [];
  final uri = ApiKeys.uri;
  bool isLoading = false;
  bool isPatient = true;
  File file = null;
  int report_index = null;
  Patient doctor_client = null;
}
