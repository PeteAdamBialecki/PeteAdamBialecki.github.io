# **REST API**

REST stands for Representational State Transfer. REST sits on top of HTTP and defines how your API works. Mostly, it's a set of rules for how to use the HTTP framework to access bits and pieces of your application or data in reliable and predictable ways.

## **End Points**

Endpoints are the workhorses of our APIs. Let's talk about what they're expected to do and how to design them.

## **Resource, Endpoint and Actions**
A resource is a piece of data, which usually comes out of a database (but doesn't have to!). Resources are gathered together into collections. Resources are usually available at endpoints that point to either individual resources or collections of resources. Endpoints don't represent actions that you take on those resources, though. Actions are determined by the data provided to an endpoint and the HTTP method used to access the endpoint.  By combining endpoints and HTTP methods, we can build complete sentences with just HTTP and REST.

## **URL vs URI, what's the difference?**
The acronyms URL and URI are often used interchangeably. Although they can be referencing the same thing, there are some distinctions. Here is a brief summary:

1. URI stands for "Uniform Resource Identifier", the keyword being "Identifier". This can mean name, location, or both. Example: /api/v1/games/1234

2. URL stands for "Uniform Resource Locator", the keyword being "Locator" so it provides full details to locate the resource. Example: https://teamtreehouse.com/alenaholligan.

3. The part that makes something a URL is the combination of the name and an access method, such as https://, or mailto:.

4. URLs are URIs, but the opposite is not true. So saying URI is always technically accurate, but if you are discussing something that’s both a full URL and a URI (which all URLs are), it’s best to call it a “URL” because it’s more specific.

## **HTTP Headers**

- Accept

- Accept-Language

- Cache-Control

## **Cache**

A cache is a service that holds onto data that you need to be able to retrieve quickly. This is very useful when your data takes awhile to retrieve or calculate. Some common caches you might use are memcached, TimesTen if you use Oracle products, or HazelCast for the Java world. For caching compiled pages, Varnish is a very common and powerful choice.


## **Rate Limiting**