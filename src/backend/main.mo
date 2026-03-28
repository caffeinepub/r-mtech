import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Submission = {
    id : Nat;
    name : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
  };

  module Submission {
    public func compare(submission1 : Submission, submission2 : Submission) : Order.Order {
      Nat.compare(submission1.id, submission2.id);
    };
  };

  let submissions = Map.empty<Nat, Submission>();
  var nextId = 0;

  let adminPrincipal = Principal.fromText("2vxsx-fae");

  func isAdmin(caller : Principal) : Bool {
    caller == adminPrincipal;
  };

  func getNextId() : Nat {
    let id = nextId;
    nextId += 1;
    id;
  };

  public shared ({ caller }) func submitServiceRequest(name : Text, phone : Text, serviceType : Text, message : Text) : async () {
    let id = getNextId();
    let submission : Submission = {
      id;
      name;
      phone;
      serviceType;
      message;
    };
    submissions.add(id, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    if (not isAdmin(caller)) { Runtime.trap("Only admin can view submissions.") };
    submissions.values().toArray().sort();
  };
};
